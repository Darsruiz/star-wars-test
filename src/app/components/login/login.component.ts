import { Component, OnInit } from '@angular/core';
import { UserData } from '../user-data';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoggedIn = this.util.LoggedIn
  users: UserData[] = [];

  constructor(private util: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(data: UserData) {
    this.util.onSubmit(data)
  }

  onLogin(data: UserData) {
    this.util.onLogin(data)
    this.LoggedIn = this.util.LoggedIn
  }
}
