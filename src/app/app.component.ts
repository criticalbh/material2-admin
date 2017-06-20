import {Component, ViewChild} from '@angular/core';
import {ObservableMedia} from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav;
  @ViewChild('sidenavMob') sidenavMob;

  constructor(public media: ObservableMedia) {

  }

  logout() {

  }

  toggle() {
    if (this.sidenav) {
      this.sidenav.toggle();
    } else if (this.sidenavMob) {
      this.sidenavMob.toggle();
    }
  }
}
