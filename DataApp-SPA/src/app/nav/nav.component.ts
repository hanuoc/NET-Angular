import { AlertifyService } from './../_service/alertify.service';
import { AuthService } from './../_service/auth.service';
import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class NavComponent implements OnInit {

  photoUrl: string;
  model: any = {};
  constructor(public authService: AuthService, private alertService: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }
  Login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertService.success('Login successfully');
    }, error => {
      this.alertService.error(error);
    }, () => {
      this.router.navigate(['/members']);
    });
  }
  loggedIn() {
    return this.authService.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertService.message('logged out');
    this.router.navigate(['/home']);
  }
}
