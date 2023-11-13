import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkModeTogglerComponent } from './dark-mode-toggler.component';

describe('DarkModeTogglerComponent', () => {
  let component: DarkModeTogglerComponent;
  let fixture: ComponentFixture<DarkModeTogglerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DarkModeTogglerComponent],
    });
    fixture = TestBed.createComponent(DarkModeTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
