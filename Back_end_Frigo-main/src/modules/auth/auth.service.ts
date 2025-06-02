import { Injectable, NotFoundException } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { randomInt } from 'crypto';
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../usuario/entities/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async enviarCodigo(correo: string): Promise<string> {
    const usuario = await this.usuarioRepository.findOneBy({ correo });
    if (!usuario) throw new NotFoundException('Correo no registrado');

    const codigo = randomInt(100000, 999999).toString();
    const expira = new Date(Date.now() + 10 * 60000); // 10 minutos

    usuario.codigo_recuperacion = codigo;
    usuario.codigo_expira = expira;
    await this.usuarioRepository.save(usuario);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Frigo App" <${process.env.MAIL_USER}>`,
      to: correo,
      subject: 'Código de recuperación de contraseña',
      html: `<b>Tu código es: ${codigo}</b>`,
    });

    return 'Código enviado al correo';
  }

  async verificarCodigo(correo: string, codigo: string): Promise<boolean> {
    const usuario = await this.usuarioRepository.findOneBy({ correo });
    if (!usuario || usuario.codigo_recuperacion !== codigo) return false;
    if (new Date() > usuario.codigo_expira) return false;
    return true;
  }

  async resetearContrasena(correo: string, nuevaClave: string): Promise<string> {
    const usuario = await this.usuarioRepository.findOneBy({ correo });
    if (!usuario) throw new NotFoundException('Correo no encontrado');

    usuario.password = await bcrypt.hash(nuevaClave, 10);
    usuario.codigo_recuperacion = null;
    usuario.codigo_expira = null;
    await this.usuarioRepository.save(usuario);

    return 'Contraseña actualizada correctamente';
  }
}
