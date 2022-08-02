import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CrudOperations } from './crud-operations.interface';

export abstract class CrudService<T, ID> implements CrudOperations<T, ID> {

  baseUrl = environment.apiUrl;

  constructor(
    protected _http: HttpClient,
    protected _endPoint: string
  ) { }

  save(t: T): Observable<T> {
    return this._http.post<T>(`${this.baseUrl}${this._endPoint}`, t);
  }

  update(id: ID, t: T): Observable<T> {
    return this._http.put<T>(`${this.baseUrl}${this._endPoint}/${id}`, t, {});
  }

  getById(id: ID): Observable<T> {
    return this._http.get<T>(`${this.baseUrl}${this._endPoint}/${id}`);
  }

  findAll(): Observable<T[]> {
    return this._http.get<T[]>(`${this.baseUrl}${this._endPoint}/list`);
  }

  findAllPageable(page: number, pageSize: number): Observable<T[]> {
    return this._http.get<T[]>(`${this.baseUrl}${this._endPoint}?page=${page}&size=${pageSize}`);
  }

  delete(id: ID): Observable<T> {
    return this._http.delete<T>(`${this.baseUrl}${this._endPoint}/${id}`);
  }

}
