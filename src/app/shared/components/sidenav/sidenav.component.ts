import { Component, Input } from '@angular/core';
import { ElementSidenav } from 'src/app/pages/home/home.component';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})

export class SidenavComponent {

  elementActive?: ElementSidenav;
  @Input() elements: ElementSidenav[] = [];

  constructor() {}

  activateElement(element: ElementSidenav) {
    if(!element.isActive){
      this.elements.forEach((element) => {
        element.isActive = false;
      });
      element.isActive = true;
      this.elementActive = element;
    } else {
      element.isActive = false;
      this.elementActive = undefined;
    }
  }
}
