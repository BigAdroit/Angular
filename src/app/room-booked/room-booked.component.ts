import { Component, OnInit } from '@angular/core';
import { diningBook } from '../dining/diningbooking';
import { RoomService } from '../room.service';
import { room } from '../food-interface'

@Component({
  selector: 'app-room-booked',
  templateUrl: './room-booked.component.html',
  styleUrls: ['./room-booked.component.css']
})
export class RoomBookedComponent implements OnInit {
  public bRooms= JSON.parse(localStorage.getItem("roomBookings")!)
  bookingD = new diningBook("",0,0,"","","","","", false)

  room:room [] = []

  constructor(private roomservice : RoomService) { }

  ngOnInit(): void {
    this.room = this.roomservice.getRoom()
  }
  onBook(data:any) {
    console.log(data)
  }

}