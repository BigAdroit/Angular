import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Input } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { RoomBook } from '../room-book';
// import { diningBook } from '../dining/diningbooking';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent implements OnInit {
  isDisplayRoom = true
  isDisplayForm = false
  roomName : string =""
  roomPrice : number=0
  rooms:any = []
  bookingD = new RoomBook(this.roomName, this.roomPrice, 0,"","","","","")
  public name: string = "Adroit"

  //  creating an instance of the service, injecting the service 
  constructor(private roomservice: RoomService ) { }


  ngOnInit(): void {
    this.rooms = this.roomservice.getRoom()
  }

  toggleClass() {
    console.log("Am a working btn")
  }
  bookRoom(value:any) {
    console.log( value)
    // window.open("/button", "_blank")
    this.isDisplayRoom = false 
    this.isDisplayForm = true
    this.roomName = value.room
    this.roomPrice = value.price
    this.bookingD = new RoomBook(this.roomName, this.roomPrice, 0,"","","","","")

  }
  //  using localstorage to store data
  bookOn(details:any) {
    console.log(details)
    
    // checking if it already exist in the localstorage, if not creat new one 
    if(!(localStorage.getItem("roomBookings"))) {
      let arr = []
      arr.push(details)
      localStorage.setItem("roomBookings", JSON.stringify(arr))
    }else{
      let arr = JSON.parse(localStorage.getItem("roomBookings")!)
      arr.push(details)
      localStorage.setItem("roomBookings", JSON.stringify(arr))

      setInterval(()=>{
        this.isDisplayRoom = true
        this.isDisplayForm = false
      }, 2000)
    }
    
  }


  // creating instance of bookroom class
  // bookingD = new RoomBook(this.roomName, this.roomPrice, 0,"","","","","")
}
