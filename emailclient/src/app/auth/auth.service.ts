import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UserNaveAvailableResponse {
  available: boolean
}

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com'

  constructor(private httpClient: HttpClient) { }

  usernameAvaliable(username: string) {
    return this.httpClient.post<UserNaveAvailableResponse>(`${this.rootUrl}/auth/username`, {
        username
    })
  }

  signup(credentials: SignupCredentials) {
    return this.httpClient.post<SignupResponse>(`${this.rootUrl}/auth/signup`, credentials);
  }
}
