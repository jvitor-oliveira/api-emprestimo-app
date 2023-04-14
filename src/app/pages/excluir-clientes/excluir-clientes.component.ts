import { Component } from '@angular/core';
import { ICliente } from 'src/app/interfaces/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-excluir-clientes',
  templateUrl: './excluir-clientes.component.html',
  styleUrls: ['./excluir-clientes.component.css'],
})
export class ExcluirClientesComponent {
  clientes: ICliente[] = [];
  constructor(
    private clientesService: ClientesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  cpf = '';
  ngOnInit() {
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Não será possível recuperar os dados apagados',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Excluir',
    }).then((result) => {
      if (result.isConfirmed) {
        this.cpf = String(this.route.snapshot.paramMap.get('id'));

        this.clientesService.removerCliente(this.cpf).subscribe(
          (result) => {
            this.popUpSucesso();
          },
          (error) => {
            this.popUpErro();
          }
        );
      }
      this.router.navigate(['clientes']);
    });
  }

  popUpSucesso() {
    Swal.fire('OK', 'Cadastro excluído com sucesso!', 'success');
  }

  popUpErro() {
    Swal.fire({
      icon: 'error',
      title: 'Falha ao deletar',
      text: 'Não foi possível excluir o cliente',
    });
  }
}
