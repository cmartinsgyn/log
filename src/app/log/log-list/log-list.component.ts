import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Table } from 'primeng/table';
import { Log } from 'src/app/core/model/model';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss']
})
export class LogListComponent implements OnInit {
  logs: Log[] = []

  constructor(
    private title: Title,
    private servico: LogService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Logs')
    this.listar()
  }

  listar(){
    this.servico.findAll().subscribe(
      (data) => this.logs = data.slice().reverse(),
      (error) => this.errorHandler.handle(`Ops! Não foi possivel buscar o(s) log(s). ${error}`)
    );
  }

  clear(table: Table) {
    table.clear();
  }


}//end class
