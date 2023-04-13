import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SecondaryElement } from 'src/app/pages/home/home.component';
import { onClickElement } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-secondary-sidenav',
  templateUrl: './sidenav-secondary.component.html',
  styleUrls: ['./sidenav-secondary.component.scss'],
})
export class SecondarySidenavComponent {

  @Input() secondaryElements: SecondaryElement[] = [];
  subAnimate = 'display-none';

  constructor(private route: Router) { }

  ngOnInit(): void {
    if (this.secondaryElements.some((element) => element.isActive && element.subcategories)) {
      this.subAnimate = 'animation-expand';
    }
  }

  onSecondaryElementClick(element: SecondaryElement) {
    if(element.link){
      
      onClickElement(element);
      
      this.route.navigate([element.link]);
    } else {
      element.isActive = !element.isActive;
      if(element.isActive) this.subAnimate = 'animation-expand';
      else this.subAnimate = 'animation-collapse';

    }
  }

  onSubcategoryClick(subcategory: SecondaryElement) {
    onClickElement(subcategory);
    this.route.navigate([subcategory.link]);
  }
}
