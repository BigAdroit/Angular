import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { CheckAvalabilty } from '../check-avalabilty';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isError=false
  isSuccess = false
  isSearch = true
  public message: string =""
  isDisable = false
  room:any = []
  constructor(private _roomservice:RoomService) { 

  }
  Avalability: any = new CheckAvalabilty("", "", "", "", "", "", "", false)
  ngOnInit(): void {
    // using the class 
    this.room = this._roomservice.getRoom()
    console.log(this.room)


    if(!(localStorage.getItem("Avalaiblity"))) {
      let arr = []
      arr.push(this.Avalability)
      localStorage.setItem("Avalaiblity", JSON.stringify(arr))
    }else{
      console.log("Already exist in localstorage")
    }
    


  }

  // Avalability = new CheckAvalabilty("", "", "", "", false)

  onSubmit() {
    // getting submitting to database 
    console.log(this.Avalability)

    let set = JSON.parse(localStorage.getItem("Avalaiblity")!)
    let count = 0
    set.filter((element: any) => {
      if( element.checkIn === this.Avalability.checkIn) {
        console.log("Date Already Picked");
        count++
      }else {
          
      }
    })
    console.log(count)
    if(count != 0) {
      this.isError = true
    }else {
      // set.push(this.Avalability)
      // localStorage.setItem("Avalaiblity", JSON.stringify(set))
      this.isSuccess = true
      this.isSearch = false
      this.isDisable = true
      this.message ="Date is avalable please fill in the details below to book"
    }
    
    
  }
  finalSubmission() {
    console.log("Hellow my people")
    console.log(this.Avalability)

    let set = JSON.parse(localStorage.getItem("Avalaiblity")!)
    set.push(this.Avalability)
    localStorage.setItem("Avalaiblity", JSON.stringify(set))
    this.isError=false
    this.isError = false
    this.message ="Successfully booked"
  }
}
