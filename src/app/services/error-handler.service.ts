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

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      notify(error.error);
    } else {
      notify(error.error);
    }
    return throwError('err');
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
