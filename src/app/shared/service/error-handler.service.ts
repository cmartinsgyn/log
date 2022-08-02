import { Injectable } from '@angular/core';
// import { NotAuthenticatedError } from '../seguranca/money-http';
import { Router } from '@angular/router';
import {Component} from '@angular/core';
import {MessageService} from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  msg!: string;

  constructor(
    private router: Router,
    private toasty: MessageService
    ) { }

  handle(errorResponse: any) {
    if(typeof errorResponse === 'string')
      this.msg = errorResponse
    try{
        if(errorResponse.error.length == 1){
          this.msg = errorResponse.error[0].mensagemUsuario;
        } else {
          if (errorResponse.status == 500 || errorResponse.status >= 500) {
            this.msg = 'Ocorreu um erro no servidor. Por favor contato o administrador';
            }

          if (errorResponse.status == 400 || errorResponse.status <= 499) {
          this.msg = 'Ocorreu um erro ao processar a sua solicitação...';
          }

          if (errorResponse.status == 403) {
            this.msg = 'Você não tem permissão para executar essa ação!';
          }

        }

        this.toasty.add({severity:'error', summary:'Ops!', detail:this.msg});
      }catch(e){
        if(this.msg == null || this.msg == undefined)
          this.msg = 'Erro na requisição ao servidor. Verifique a conexão e tente novamente.';

        this.toasty.add({severity:'error', summary:'Ops!', detail:this.msg});
        console.log(`Ocorreu um erro na requisição ao servidor: ${errorResponse}. Causa: ${e}`);

      }

  }

}
