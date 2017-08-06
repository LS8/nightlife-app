import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationListitemComponent } from './location-listitem.component';

describe('LocationListitemComponent', () => {
  let component: LocationListitemComponent;
  let fixture: ComponentFixture<LocationListitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationListitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
