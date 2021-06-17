import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService implements OnInit {

  private url: string = "https://swapi.dev/api/starships/?page=1&format=json"

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {}

  getShips(){
    return this.httpClient.get(this.url);
  }
}
