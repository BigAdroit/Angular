import { Injectable } from '@angular/core';
import { food } from './food-interface';

@Injectable({
  providedIn: 'root'
})
export class DiningService {
 
  constructor() { }

  getFood() : food[] {
    return [
      {
        "name" : "Rice and Flower",
        price : 204,
        "image" : "menu-1.jpg"
      },

      {
        "name" : "Iyan Ati Eforiro",
        price : 150,
        "image" : "menu-2.jpg"
      },
      {
        "name" : "Ofada Rice",
        price : 400,
        "image" : "menu-3.jpg"
      },
      {
        "name" : "Commot body joor",
        price : 50,
        "image" : "menu-4.jpg"
      },
      {
        "name" : "Gbeyewo Korimo",
        price : 122,
        "image" : "menu-5.jpg"
      },
      {
        "name" : "Ijekuje Gbeyewo",
        price : 300,
        "image" : "menu-6.jpg"
      },
    ]
  }

  getDrinks():food[] {
    return [
      {
        "name" : "Skuchies",
        price : 47,
        "image" : "menu-8.jpg"
      },
      {
        "name" : "Orijin Bitters",
         price : 39,
       "image" : "menu-9.jpg"
      },

      {
        "name" : "Fura",
         price : 39,
       "image" : "menu-8.jpg"
      },
      ]
  }
}
