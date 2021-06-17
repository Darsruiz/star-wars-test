import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoggedIn = false
  data: any

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(data: any) {
    alert("Entered Email id : " + data.username + data.password + data.email);
 }

}
