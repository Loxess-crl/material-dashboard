import { Component, Input } from '@angular/core';
import { SecondaryElement } from 'src/app/pages/home/home.component';



@Component({
  selector: 'app-sidenav-secondary',
  templateUrl: './sidenav-secondary.component.html',
  styleUrls: ['./sidenav-secondary.component.scss'],
})
export class SidenavSecondaryComponent {

  @Input() secondaryElements: SecondaryElement[] = [];

  constructor() {}

  onSecondaryElementClick(element: SecondaryElement) {
    if (!element.isActive) {
      this.secondaryElements.forEach((secondaryElement) => {
        secondaryElement.isActive = false;
      });

      element.isActive = true;
    } else {
      element.isActive = false;
    }
  }
}
