import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastMenuComponent } from './breakfast-menu.component';

describe('BreakfastMenuComponent', () => {
  let component: BreakfastMenuComponent;
  let fixture: ComponentFixture<BreakfastMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakfastMenuComponent]
    });
    fixture = TestBed.createComponent(BreakfastMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
