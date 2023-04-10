import { Component, ViewChild } from '@angular/core';

export interface ElementSidenav {
  name: string;
  icon: string;
  subElements?: SecondaryElement[];
  isActive: boolean;
}

export interface SecondaryElement {
  name: string;
  subcategories?: SecondaryElement[];
  isActive: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  elements:ElementSidenav[] = [
    {
      name: 'Home',
      icon: 'home',
      isActive: false,
    },
    {
      name: 'Get started',
      icon: 'apps',
      isActive: false,
    },
    {
      name: 'Development',
      icon: 'code',
      isActive: false,
      subElements: [
        {
          name: 'Develop overview',
          isActive: false,
        },
        {
          name: 'Android',
          subcategories: [
            {
              name: 'MDC-Android',
              isActive: false,
            },
            {
              name: 'Jetpack Compose',
              isActive: false,
            },
          ],
          isActive: false,
        },
        {
          name: 'Flutter',
          isActive: false,
        },
        {
          name: 'Web',
          isActive: false,
        },
      ],
    },
    {
      name: 'Foundations',
      icon: 'book',
      isActive: false,
    },
    {
      name: 'Styles',
      icon: 'palette',
      isActive: false,
    },
    {
      name: 'Components',
      icon: 'add_circle',
      isActive: false,
    },
    {
      name: 'Blog',
      icon: 'pages',
      isActive: false,
    },
  ];


}
