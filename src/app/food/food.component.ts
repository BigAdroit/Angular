import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  public bRooms= JSON.parse(localStorage.getItem("roomBookings")!)

  constructor() { }

  ngOnInit(): void {
  }

}
