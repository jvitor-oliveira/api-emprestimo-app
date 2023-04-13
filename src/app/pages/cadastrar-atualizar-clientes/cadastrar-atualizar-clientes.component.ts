import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,  } from '@angular/router';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { ICliente } from 'src/app/interfaces/cliente';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-atualizar-clientes',
  templateUrl: './cadastrar-atualizar-clientes.component.html',
  styleUrls: ['./cadastrar-atualizar-clientes.component.css']
})
export class CadastrarAtualizarClientesComponent {


  clienteForm = new FormGroup({
    cpf: new FormControl('', Validators.required),
    nome: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    endereco: new FormGroup({
      rua: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      cep: new FormControl('', Validators.required),
    }),
    rendimentoMensal: new FormControl(0, Validators.required),
  })

  constructor(private clientesService: ClientesService, private route: ActivatedRoute, private router: Router) {}

  cpf = '';
  ngOnInit() {
    const verificaCPf = this.route.snapshot.paramMap.get('id');

    if (verificaCPf !== null) {
      this.cpf = String(verificaCPf);
      this.clientesService.buscarClientesPorCpf(this.cpf).subscribe((cliente: ICliente) => {

          this.clienteForm.setValue({
              cpf: cliente.cpf,
              nome: cliente.nome,
              telefone: cliente.telefone,
              endereco: {
                rua: cliente.endereco.rua,
                numero: cliente.endereco.numero,
                cep: cliente.endereco.cep,
              },
              rendimentoMensal: cliente.rendimentoMensal
          })
      });
    }

  }

  EdicaoEcadastro() {
    if(this.cpf) {
      this.editar();
    } else {
      this.cadastrar();
    }
  }

  cadastrar() {
    const cliente: ICliente = this.clienteForm.value as ICliente;
    this.clientesService.cadastrarClientes(cliente).subscribe(result => {
        Swal.fire(
          'Dados corretos',
          'Cliente foi cadastrado com sucesso',
          'success'
        );
        this.clienteForm.setValue({
          cpf: '',
          nome: '',
          telefone: "",
          endereco: {
            rua: '',
            numero: '',
            cep: ''
          },
          rendimentoMensal: 0
        })
    }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo deu errado!'
        })
        console.error(error);

    })
  }

  editar() {
    const cliente: ICliente = this.clienteForm.value as ICliente;
    this.clientesService.editarClientes(this.cpf.toString(), cliente).subscribe(result => {
        Swal.fire(
          'Dados corretos',
          'Edição realizada',
          'success'

        );
        this.router.navigate(["clientes"])


    }, error => {
        Swal.fire({
          icon: 'error',
          title: 'erro',
          text: 'Algo deu errado, não foi possível atualizar'
        })
        console.error(error);
    })
  }
}


