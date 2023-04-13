import { Component } from '@angular/core';
import { ICliente } from 'src/app/interfaces/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-excluir-clientes',
  templateUrl: './excluir-clientes.component.html',
  styleUrls: ['./excluir-clientes.component.css']
})
export class ExcluirClientesComponent {

  clientes: ICliente[] = [];
  constructor(private clientesService: ClientesService, private route: ActivatedRoute, private router: Router) {}

  cpf = '';
  ngOnInit() {
    Swal.fire({
      title: 'Você tem certeza?',
      text: "Não será possíverl reverter essa ação!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.cpf = String(this.route.snapshot.paramMap.get('id'));

        this.clientesService.removerCliente(this.cpf).subscribe(result => {
            Swal.fire(
            'Tudo certo!',
            'Cadastro excluído com sucesso!',
            'success'
            );
            this.router.navigate(['/clientes']);
        }, error => {
            Swal.fire({
            icon: 'error',
            title: 'ih...',
            text: 'Algo deu errado! Verifique o erro no console.'
            })
            console.error(error);
        })

      }
    this.router.navigate(['/clientes']);
    });

  }

}

