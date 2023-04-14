import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CadastrarAtualizarClientesComponent } from './pages/cadastrar-atualizar-clientes/cadastrar-atualizar-clientes.component';
import { ExcluirClientesComponent } from './pages/excluir-clientes/excluir-clientes.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/cadastrar', component: CadastrarAtualizarClientesComponent },
  { path: 'clientes/:id', component: ClientesComponent },
  { path: 'clientes/:id/editar', component: CadastrarAtualizarClientesComponent },
  { path: 'clientes/:id/excluir', component: ExcluirClientesComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
