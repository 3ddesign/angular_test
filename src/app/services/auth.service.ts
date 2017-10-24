import * as firebase from 'firebase';
import { Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  public token: string;

  public signupUser(email: string, password: string): any {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  public constructor (private router: Router) {}

  public signinUser(email: string, password: string): any {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/http']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  public getToken(): any {
     firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  public isAuthenticated(): any {
    return this.token != null;
  }

  public logout(): any {
    firebase.auth().signOut();
    this.router.navigate(['/']);
    this.token = null;
  }
}
