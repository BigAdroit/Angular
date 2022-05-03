import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: any;
  @Input() color:any;
  @Output () btnClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    // localStorage.setItem("greetings", "Hello")
  }
  onClick() {
    this.btnClick.emit()
  }
}
