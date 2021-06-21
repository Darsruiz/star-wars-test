import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private url: string = "https://swapi.dev/api/starships/?page=1&format=json"

  constructor(private httpClient: HttpClient) { }

  getShips(){
    return this.httpClient.get(this.url);
  }
}
