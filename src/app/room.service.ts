import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  getRoom() {
    return [
      {
        "room" : "Classic Double Room",
        "price" : 299,
        "image" : "room-1.jpg",
    },
    {
      "room" : "Family Room",
      "price" : 500,
      "image" : "room-2.jpg",
    },
    {
      "room" : "Shorty",
      "price" : 50,
      "image" : "room-3.jpg",
    },
    {
      "room" : "Suite",
      "price" : 99,
      "image" : "room-1.jpg",
    },
    {
      "room" : "Honeymoon",
      "price" : 199,
      "image" : "room-2.jpg",
    },
    {
      "room" : "Family Suite",
      "price" : 399,
      "image" : "room-3.jpg",
    }
    ]
  }
}
