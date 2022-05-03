import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { CheckService } from './check.service';
import { RoomService } from './room.service';
import { DiningService } from './dining.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DiningComponent } from './dining/dining.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { MainDasboardComponent } from './Dashboard/main-dasboard/main-dasboard.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { RoomBookedComponent } from './room-booked/room-booked.component';
import { FoodComponent } from './food/food.component'

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    DiningComponent,
    ServiceComponent,
    AboutComponent,
    MainDasboardComponent,
    AdminComponent,
    MenuComponent,
    RoomBookedComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CheckService, RoomService, DiningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
