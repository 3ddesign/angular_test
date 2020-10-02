import { Component, OnInit, Input } from '@angular/core';
import { Email } from '../email';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnInit {
  showModal = false;
  @Input() email: Email;

  constructor() {}

  ngOnInit() {
    const text = this.email.text.replace(/\n/gi, '\n> ');

    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n-------- ${this.email.from} wrote:\n> ${text}`
    };
  }

  onSubmit(email: Email) {}
}
