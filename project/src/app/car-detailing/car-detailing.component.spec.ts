import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailingComponent } from './car-detailing.component';

describe('CarDetailingComponent', () => {
  let component: CarDetailingComponent;
  let fixture: ComponentFixture<CarDetailingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDetailingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDetailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
