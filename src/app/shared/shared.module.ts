import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../material.module';
import { SidenavSecondaryComponent } from './components/sidenav-secondary/sidenav-secondary.component';



@NgModule({
  declarations: [
    SidenavComponent,
    SidenavSecondaryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    SidenavComponent,
    SidenavSecondaryComponent,
  ]
})
export class SharedModule { }
