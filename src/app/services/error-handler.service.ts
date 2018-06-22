import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

declare var iziToast: any;

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  /**
   * TODO: Transforma a funciotn NOTIFY em um serviço externo
   * Tratamento de erro para a aplicação
   * @param error Objeto de error recebido pelo request
   */

  constructor(private router: Router) {}

  handleError(error: HttpErrorResponse) {
    switch (error.status) {
      case 0:
        const msg = {
          title: 'Error',
          icon: 'fa fa-wifi',
          message: 'Erro de conexão com o servidor!'
        };
        notify(msg);
        break;
      case 500:
        notify(error.error);
        break;
      case 401:
        notify(error.error);
        break;
      default:
        notify(error.error);
    }

    return throwError(error.error);
  }
}

function notify(data: any): any {
  return iziToast.show({
    title: data.title || 'Error',
    color: 'red',
    icon: data.icon || 'fa fa-remove',
    position: 'bottomCenter',
    layout: 2,
    balloon: true,
    message: data.message || 'Generic error'
  });
}
