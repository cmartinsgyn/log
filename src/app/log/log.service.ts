import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/service/crud.service';
import { Log } from '../core/model/model';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService extends CrudService<Log, number>{
  constructor(protected _http:HttpClient) {
    super(_http, '/log')
   }

  salvarPeloArquivo(formData: FormData): Observable<any> {
    return this._http.post<any>(`${this.baseUrl}/arquivoLog`, formData);
  }
     
}
