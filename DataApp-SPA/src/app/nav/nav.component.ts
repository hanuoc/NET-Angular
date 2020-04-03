import { AlertifyService } from './../_service/alertify.service';
import { AuthService } from './../_service/auth.service';
import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(public authService: AuthService, private alertService: AlertifyService) { }

  ngOnInit() {
  }
  Login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertService.success('Login successfully');
    }, error => {
      this.alertService.error(error);
    });
  }
  loggedIn() {
    return this.authService.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
    this.alertService.message('Logged out!');
  }
}
