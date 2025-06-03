import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnicoRoutingModule } from './tecnico-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    TecnicoRoutingModule,
    RouterModule,
    FormsModule
    
  ]
})
export class TecnicoModule {}
