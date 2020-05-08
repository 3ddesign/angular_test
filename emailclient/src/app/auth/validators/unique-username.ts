import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncValidator, FormControl } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private httpClient: HttpClient) {}
  validate = (control: FormControl) => {
    const { value } = control;


    return this.httpClient.post<any>('https://api.angular-email.com/auth/username', {
        username: value
    }).pipe(
      map(value => {
          if (value.available) {
            return null;
          }
        }),
        catchError(error => {
          if (error.message.username) {
            return of({ nonUniqueUsername: true });
          } else {
            return of({ noConnection: true });
          }
        })
      );
  }
}
