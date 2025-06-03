import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ IMPORTAR
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,           // ✅ NECESARIO PARA ngModel y ngForm
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
