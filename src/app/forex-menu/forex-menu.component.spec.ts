import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexMenuComponent } from './forex-menu.component';

describe('ForexMenuComponent', () => {
  let component: ForexMenuComponent;
  let fixture: ComponentFixture<ForexMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForexMenuComponent]
    });
    fixture = TestBed.createComponent(ForexMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
