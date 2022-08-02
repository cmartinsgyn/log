import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  sweetAlertSucesso(msg: string) {
    Swal.fire({
      title: 'Muito Bem!',
      text: msg,
      icon: 'success'
    });
  }

  sweetAlertError(msg: string) {
    Swal.fire({
      title: 'Ops!',
      text: msg,
      icon: 'error'
    });
  }
}
