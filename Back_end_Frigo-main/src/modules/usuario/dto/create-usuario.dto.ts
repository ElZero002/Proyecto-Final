import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  cedula: string;

  @IsString()
  nombre: string;

  @IsEmail()
  correo: string;

  @IsString()
  telefono: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  id_rol: number;
}
