import { Component, OnInit } from '@angular/core';

/**
* Componente que muestra el nav bar
*/
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public title = 'nav';
  constructor() { }

  ngOnInit() {
  }

}
