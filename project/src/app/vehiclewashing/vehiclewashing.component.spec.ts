import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclewashingComponent } from './vehiclewashing.component';

describe('VehiclewashingComponent', () => {
  let component: VehiclewashingComponent;
  let fixture: ComponentFixture<VehiclewashingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclewashingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclewashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
