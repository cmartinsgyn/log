import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroLogComponent } from './cadastro-log/cadastro-log.component';
import { LogListComponent } from './log-list/log-list.component';

const routes: Routes = [
  {
    path: 'cadastro-log', component: CadastroLogComponent,
    // canActivate: [AuthGuard],
    // data: {roles: ['ROLE_CADASTRAR_USUARIO']}
  },

  {
    path: 'lista-log', component: LogListComponent,
    // canActivate: [AuthGuard],
    // data: {roles: ['ROLE_CADASTRAR_USUARIO']}
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }
