import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  values: any = {};
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValue();
  }
  registerToggle() {
    this.registerMode = true;
  }
  getValue() {
    this.http.get('https://localhost:44360/api/values').subscribe(response => {
      this.values = response;
      console.log(this.values);
    }, error => {
      console.log(error);
    });
  }
  cancelRegisterMode(registerMode: boolean){
    this.registerMode = registerMode;
  }
}
