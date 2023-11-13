import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSelectComponent } from './font-select.component';

describe('FontSelectComponent', () => {
  let component: FontSelectComponent;
  let fixture: ComponentFixture<FontSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FontSelectComponent],
    });
    fixture = TestBed.createComponent(FontSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
