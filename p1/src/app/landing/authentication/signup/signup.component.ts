import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
   public constructor (private authService: AuthService) {}

  public onSignup(form: NgForm): any {
    const email: any = form.value.email;
    const password: any = form.value.password;
    this.authService.signupUser(email, password);
  }

}
