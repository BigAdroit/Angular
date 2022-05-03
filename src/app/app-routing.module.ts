import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RoomsComponent } from './rooms/rooms.component';
import { DiningComponent } from './dining/dining.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ButtonComponent } from './button/button.component';
import { AdminComponent } from './admin/admin.component';
import { RoomBookedComponent } from './room-booked/room-booked.component';
import { FoodComponent } from './food/food.component';

const routes: Routes = [
  {path:"", component:HeaderComponent},
  {path:"room", component:RoomsComponent},
  {path:"home", component:HeaderComponent},
  {path:"dining", component:DiningComponent},
  {path:"service", component:ServiceComponent},
  {path:"about", component:AboutComponent},
  {path: "button", component:ButtonComponent},
  {path: "admin", component:AdminComponent},
  {path: "booked-room", component:RoomBookedComponent},
  {path:"food", component:FoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
