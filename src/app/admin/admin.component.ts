import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public aRooms = JSON.parse(localStorage.getItem("Avalaiblity")!)
  public bRooms= JSON.parse(localStorage.getItem("roomBookings")!)

  constructor() { }

  ngOnInit(): void {
    // this.aRooms=
  }

}
