import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDetailsComponent } from './word-details.component';

describe('WordDetailsComponent', () => {
  let component: WordDetailsComponent;
  let fixture: ComponentFixture<WordDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WordDetailsComponent],
    });
    fixture = TestBed.createComponent(WordDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
