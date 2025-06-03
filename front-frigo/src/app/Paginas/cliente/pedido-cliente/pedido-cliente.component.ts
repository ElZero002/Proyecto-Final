import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedido-cliente',
  standalone: true,
  templateUrl: './pedido-cliente.component.html',
  styleUrls: ['./pedido-cliente.component.scss'],
  imports: [CommonModule]
})
export class PedidoClienteComponent {
  pedido = {
    cedula: '1725263089',
    id: '0110',
    empresa: 'Valle Sotomayor John Geovanny ???????',
    correo: 'uwu@gmail.com',
    telefono: '0985475218',
    codigoPostal: '202564',
    provincia: 'Pichincha',
    ciudad: 'Quito',
    callePrincipal: 'Av. Mariscal Sucre',
    calleSecundaria: 'Juan valdez',
    descripcion: `Para entender la historia de Five Nights at Freddy’s hay que olvidarse que estos son juegos...`
  };
}
