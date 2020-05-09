import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UserNaveAvailableResponse {
  available: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  usernameAvaliable(username: string) {
    return this.httpClient.post<UserNaveAvailableResponse>('https://api.angular-email.com/auth/username', {
        username
    })
  }
}
