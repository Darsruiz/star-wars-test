import { Injectable } from '@angular/core';
import { UserData } from '../components/user-data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  LoggedIn = false;
  users: UserData[] = [];
  money: number = 500000

  constructor() { }

  onSubmit(data: UserData) {
    let empty = ""
    if (data.username || data.password || data.email != empty) {
      let newUser: UserData = {
        username: data.username,
        password: data.password,
        email: data.email,
        money: 500000
      }
      this.users.push(newUser)
      alert("Account Successfully created, you can now login");
    } else {
      alert("Missing Data")
    }
  }

  onLogin(data: UserData) {
    let empty = ""
    if (data.username || data.password != empty) {
    this.users.forEach(element => {
      if (data.username == element.username) {
        if (data.password == element.password) {
          this.LoggedIn = true
          alert('Successfully logged in!')
        } else {alert("Incorrect Password") } 
      } else {alert("Account not Found")} 
    });
  } else {
    alert("Missing Data")
  }
}
}
