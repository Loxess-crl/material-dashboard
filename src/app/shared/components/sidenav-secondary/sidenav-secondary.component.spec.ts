import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySidenavComponent } from './sidenav-secondary.component';

describe('SidenavSecondaryComponent', () => {
  let component: SecondarySidenavComponent;
  let fixture: ComponentFixture<SecondarySidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondarySidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondarySidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
