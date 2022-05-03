import { Component, OnInit } from '@angular/core';
import { food } from '../food-interface';
import { DiningService } from '../dining.service';
import { diningBook } from './diningbooking';

@Component({
  selector: 'app-dining',
  templateUrl: './dining.component.html',
  styleUrls: ['./dining.component.css']
})
export class DiningComponent implements OnInit {
  Foods : food[] = []
  Drinks : food[] =[]

  isDisplayFood :boolean = true
  isDisplayDrink : boolean = true

  foodName : string = ""
  foodPrice : number = 0
  
  diningBookingDetails = new diningBook(this.foodName, this.foodPrice, 0, "", "", "", "","", false)


  isDisplayForm : boolean = false
  constructor(private diningservice : DiningService) { }
  ngOnInit(): void {
    this.Foods = this.diningservice.getFood()
    this.Drinks = this.diningservice.getDrinks()
  }

  foodOrder(food:food){
    console.log(food)
    this.isDisplayForm = true
    this.foodName = food.name
    this.foodPrice = food.price

    this.isDisplayDrink = false
    this.isDisplayFood = false
    this.diningBookingDetails = new diningBook(this.foodName, this.foodPrice, 0, "", "", "", "","", false)


  }



  drinkOrder(drink:food) {
    console.log(drink)
    this.isDisplayForm = true
    this.foodName = drink.name
    this.foodPrice = drink.price

    this.isDisplayDrink = false
    this.isDisplayFood = false
    this.diningBookingDetails = new diningBook(this.foodName, this.foodPrice, 0, "", "", "", "","", false)

  }

  bookOn(data: food) {
    console.log(data)
  }
}
