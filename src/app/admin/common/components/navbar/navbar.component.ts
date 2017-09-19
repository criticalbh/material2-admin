import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() toggleSidenav: EventEmitter<void> = new EventEmitter<void>();
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
