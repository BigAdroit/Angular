import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let toggle = document.querySelector('.toggle')as HTMLElement
    let nav = document.querySelector('ul') as HTMLElement
    toggle.addEventListener('click', e => {
      nav.style.display="block"
      nav.style.backgroundColor="black";
    })

  }

}
