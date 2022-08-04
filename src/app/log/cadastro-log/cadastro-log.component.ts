import { HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
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
  @Input()
  requiredFileType!: string;

  log: Log = new Log
  editando = false
  fileName = ''
  file!: File;
  progress = false
  
  constructor(
    private router: Router,
    private servico: LogService,
    private errorHandler: ErrorHandlerService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

  onUpload(event: any) {
    this.file = event.target.files[0];
    if(this.file.type != 'text/x-log'){
      this.errorHandler.handle('Formato de arquivo de ser txt / log')
    }
  }
  processarArquivo() {
    this.progress = true
    if (this.file) {

      this.fileName = this.file.name;
      const formData = new FormData();
      formData.append("arquivo", this.file);

      this.servico.salvarPeloArquivo(formData).subscribe(
        () => {
          this.progress = false
          this.sharedService.sweetAlertSucesso(`Arquivo no banco salvo!`);
        }, (error) =>
        this.errorHandler.handle(error)
      );
    }//fim método


  }//end

  salvar(f: NgForm) {
    this.servico.save(this.log).subscribe(
      (adicionado) => {
        this.sharedService.sweetAlertSucesso(`Log salvo com sucesso!`);
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

  cancelUpload() {
    this.progress = false;
  }

}//end class
