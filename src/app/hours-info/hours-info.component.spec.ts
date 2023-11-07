import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursInfoComponent } from './hours-info.component';

describe('HoursInfoComponent', () => {
  let component: HoursInfoComponent;
  let fixture: ComponentFixture<HoursInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HoursInfoComponent]
    });
    fixture = TestBed.createComponent(HoursInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
