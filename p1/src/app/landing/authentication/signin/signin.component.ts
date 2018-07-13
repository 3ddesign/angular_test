import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public onSignin(form: NgForm): any {
    const email: any = form.value.email;
    const password: any = form.value.password;
    this.authService.signinUser(email, password);
  }

}
