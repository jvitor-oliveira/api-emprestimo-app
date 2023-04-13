import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { ICliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  endpoint = 'clientes';
  api = environment.api;
  constructor(private http: HttpClient) { }


  buscarTodosClientes(){
    return this.http.get<ICliente[]>(`${this.api}/${this.endpoint}`);

  }

  cadastrarClientes(Cliente: ICliente) {
    return this.http.post(`${this.api}/${this.endpoint}`, Cliente);
  }

  buscarClientesPorCpf(cpf: String) {
    return this.http.get<ICliente>(`${this.api}/${this.endpoint}/${cpf}`);
  }

   editarClientes(cpf: String, Cliente: ICliente) {
    return this.http.put<ICliente>(`${this.api}/${this.endpoint}/${cpf}`, Cliente);
  }

  removerCliente(cpf: String) {
    return this.http.delete(`${this.api}/${this.endpoint}/${cpf}`);
  }
}

