import { Component } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ICliente } from 'src/app/interfaces/cliente'
import {  Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  cpf: String = ''


  clientes: ICliente[] = [];
  constructor(private clientesService: ClientesService, private router: Router) {}


  ngOnInit() {
    this.clientesService.buscarTodosClientes().subscribe((result: ICliente[]) => {
      this.clientes = result;
    });

  }





}



