import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../material.module';
import { SecondarySidenavComponent } from './components/sidenav-secondary/sidenav-secondary.component';



@NgModule({
  declarations: [
    SidenavComponent,
    SecondarySidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    SidenavComponent,
    SecondarySidenavComponent,
  ]
})
export class SharedModule { }
