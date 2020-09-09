import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Email } from './email';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email> {
  constructor() {}

  resolve() {
    return {
      id: 'laskjdf',
      subject: 'alskdfj',
      to: 'asldkfj',
      from: 'asldfkj',
      text: 'asldkfj',
      html: 'asldfkj'
    };
  }
}
