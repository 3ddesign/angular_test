import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl('',
    [ Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)],
      [this.uniqueUsername.validate]),
    password: new FormControl('',
    [ Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)]),
    passwordConfirmation: new FormControl('',
    [ Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)])
  }, {validators: [this.matchPassword.validate] });

  constructor(
    private authService: AuthService,
    private uniqueUsername: UniqueUsername,
    private matchPassword: MatchPassword) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.authForm.invalid) {
      return;
    }
    this.authService.signup(this.authForm.value)
      .subscribe({
        next: (response) => {
          // navigate to some new route
        },
        error: (error) =>  {
          if (!error.status) {
            this.authForm.setErrors({ noConnection: true });
          } else {
            this.authForm.setErrors({ unknownError: true });
          }
        }
      });
  }

}
