import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Email } from '../email';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: Email;

  constructor(private authService: AuthService) {
    this.email = {
      id: '',
      to: '',
      subject: '',
      html: '',
      text: '',
      from: `${authService.username}@angular-email.com`
    };
  }

  ngOnInit() {}

  onSubmit(email: Email) {
    // Send the email off via the email service
  }
}
