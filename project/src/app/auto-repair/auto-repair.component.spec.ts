import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoRepairComponent } from './auto-repair.component';

describe('AutoRepairComponent', () => {
  let component: AutoRepairComponent;
  let fixture: ComponentFixture<AutoRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoRepairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
