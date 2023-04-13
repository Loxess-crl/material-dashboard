import { Component, ViewChild } from '@angular/core';

export interface ElementSidenav {
  name: string;
  icon: string;
  subElements?: SecondaryElement[];
  isActive: boolean;
  link?: string;
}

export interface SecondaryElement {
  name: string;
  subcategories?: SecondaryElement[];
  isActive: boolean;
  link?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
