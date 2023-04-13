import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ElementSidenav, SecondaryElement } from 'src/app/pages/home/home.component';

/* You can change this */
export const menuElements:ElementSidenav[] = [
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

export const onClickElement = (elementClick: SecondaryElement) => {
  menuElements.forEach((element) => {
    element.isActive = false;

    if (element.subElements) {
      if (element.subElements.includes(elementClick)) element.isActive = true;
      element.subElements.forEach((subElement) => {
        if(!subElement.subcategories)subElement.isActive = false;
        if (subElement.subcategories) {
          if (subElement.subcategories.includes(elementClick)) element.isActive = true;
          subElement.subcategories.forEach((subCategory) => {
            subCategory.isActive = false;
          });
        }
      });
    }
  });
  elementClick.isActive = true;
};

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})

export class SidenavComponent {
  
  elementActive?: ElementSidenav;
  elements: ElementSidenav[] = menuElements;
  animate = '';

  constructor(private route: Router) {}

  deactivate() {
    this.animate = 'animate-out';
    setTimeout(() => {
      this.elementActive = undefined;
      this.animate = '';
    }, 150);
  }

  onElementClick(element: ElementSidenav) {
    if (element.link) {
      this.elements.forEach((element) => {
        element.isActive = false;
        element.subElements?.forEach((subElement) => {
          subElement.isActive = false;
          subElement.subcategories?.forEach((subCategory) => {
            subCategory.isActive = false;
          });
        });
      });
      element.isActive = true;
      this.elementActive = element;
      this.route.navigate([element.link]);
    }
  }

  showSubelements(element: ElementSidenav) {
    this.elementActive = element;
  }

  onClickOption(option: ElementSidenav) {
    if (option.link) {
      this.route.navigate([option.link]);
    }
  }
}
