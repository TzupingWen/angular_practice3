import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleapiComponent } from './vehicleapi.component';

describe('VehicleapiComponent', () => {
  let component: VehicleapiComponent;
  let fixture: ComponentFixture<VehicleapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
