import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Log } from 'src/app/core/model/model';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler.service';
import { SharedService } from 'src/app/shared/service/shared.service';
import { LogService } from '../log.service';


@Component({
  selector: 'app-cadastro-log',
  templateUrl: './cadastro-log.component.html',
  styleUrls: ['./cadastro-log.component.scss']
})
export class CadastroLogComponent implements OnInit {
  log: Log = new Log
  editando = false
  uploadedFiles: any[] = [];
  
  constructor(
    private router: Router,
    private servico: LogService,
    private errorHandler: ErrorHandlerService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

  onUpload(event: any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
}

  salvar(f: NgForm) {
    this.servico.save(this.log).subscribe(
      (adicionado) => {
        this.sharedService.sweetAlertSucesso(
          `Log salvo com sucesso!`
        );
        this.editar(adicionado.id)
      },
      (error) =>
        this.errorHandler.handle(error)
    );
  }


  editar(id: number) {
    this.servico.getById(id).subscribe(
      (response) => {
        this.log = response;
        this.editando = true
      },
      (error) => {
        this.log = new Log();
        this.errorHandler.handle(`Ops! Não foi possivel editar. ${error}`);
      }
    );
  }

  onReset(f: NgForm) {
    f.reset();
    setTimeout(() => {
      this.log = new Log();
      this.editando = false
    }, 1);
    this.router.navigate(['/cadastro-log']);
  }

}
