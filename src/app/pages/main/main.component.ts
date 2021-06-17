import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  ships: any;
  shipsArray: any
  ownedShips: any;
  money: number = 0;

  constructor(private service: APIService) { }

  ngOnInit() {
    this.service.getShips()
    .subscribe(response => {
      this.ships = response;
      this.shipsArray = this.ships.results
      this.ships = this.ships.next
      console.log("next page",this.ships);
    });
  }

   /* moreShips() {
     this.getNextShip
     .subscribe(response => {
      this.ships = response
      this.shipsArray.append(this.ships.next.results)
     })
    console.log(this.ships.next)
    
  } */

  buyShip(i: any) {
    alert("Not Implemented Yet")
    /* if (this.money > i.cost_in_credits) {
      this.ownedShips.append(this.ships[i])
    }
    console.log("Not enough money") */
  }
  
  sellShip(i: any) {
    alert("Not Implemented Yet")
    console.log("Not Implemented Yet")
  }
}

/* ,  */