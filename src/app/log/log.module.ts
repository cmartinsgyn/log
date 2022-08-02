import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { CadastroLogComponent } from './cadastro-log/cadastro-log.component';
import { LogRoutingModule } from './log-routing.module';
import { LogService } from './log.service';
import { LogListComponent } from './log-list/log-list.component';

@NgModule({
  declarations: [
    CadastroLogComponent,
    LogListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LogRoutingModule,
    SharedModule
  ],
  providers:[
    LogService
  ]
})
export class LogModule { }
