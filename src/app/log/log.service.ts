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
    // console.log(`${this.baseUrl}/arquivoLog`)
    // //return this._http.post(`${this.baseUrl}${this._endPoint}/arquivoLog`, formData);
    // const upload$ = this._http.post(`${this.baseUrl}/arquivoLog`, formData, {
    //   reportProgress: true,
    //   observe: 'events'
    // })
    //   .pipe(
    //     finalize(() => true)
    //   );
    return this._http.post<any>(`${this.baseUrl}/arquivoLog`, formData);
  }
     
}
