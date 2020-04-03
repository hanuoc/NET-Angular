import { AuthService } from './../_service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  Login(){
    this.authService.login(this.model).subscribe(next =>{
      console.log("Login succsetfully");
    },error =>{
      console.log(error);
    })
  }
  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout(){
    localStorage.removeItem('token');
    console.log('Logged out!');
    
  }
}
