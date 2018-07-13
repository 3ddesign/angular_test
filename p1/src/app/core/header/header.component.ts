import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public constructor(public authService: AuthService ) {}

  public ngOnInit(): any {
  }

  public onLogout(): any {
    this.authService.logout();
  }
}
