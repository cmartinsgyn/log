import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/service/crud.service';
import { Log } from '../core/model/model';

@Injectable({
  providedIn: 'root'
})
export class LogService extends CrudService<Log, number>{
  constructor(protected _http:HttpClient) {
    super(_http, '/log')
   }
}
