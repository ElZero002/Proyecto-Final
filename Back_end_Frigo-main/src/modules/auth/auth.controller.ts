import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('recuperar')
  recuperar(@Body('correo') correo: string) {
    return this.authService.enviarCodigo(correo);
  }

  @Post('verificar-codigo')
  verificar(@Body() dto: { correo: string; codigo: string }) {
    return this.authService.verificarCodigo(dto.correo, dto.codigo);
  }

  @Post('reset-password')
  resetear(@Body() dto: { correo: string; nuevaClave: string }) {
    return this.authService.resetearContrasena(dto.correo, dto.nuevaClave);
  }
}