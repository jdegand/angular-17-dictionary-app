
// Unit tests for: onSubmit


import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';


class MockNgForm {
  public valid: boolean = true;
  public form = {
    value: {
      searchTerm: 'test'
    }
  };
}

class MockRouter {
  navigate = jest.fn();
}

describe('AppComponent.onSubmit() onSubmit method', () => {
  let component: AppComponent;
  let mockRouter: MockRouter;
  let mockDocument: Document;

  beforeEach(() => {
    mockRouter = new MockRouter();
    mockDocument = document;

    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: DOCUMENT, useValue: mockDocument }
      ]
    });

    component = new AppComponent(mockRouter as any, mockDocument as any);
  });

  describe('Happy paths', () => {
    it('should navigate to details page with search term when form is valid', () => {
      // Arrange
      const mockForm = new MockNgForm();
      mockForm.valid = true;
      mockForm.form.value.searchTerm = 'example';

      // Act
      component.onSubmit(mockForm as any);

      // Assert
      expect(jest.mocked(mockRouter.navigate)).toHaveBeenCalledWith(['details'], {
        queryParams: { word: 'example' }
      });
    });
  });

  describe('Edge cases', () => {
    it('should not navigate when form is invalid', () => {
      // Arrange
      const mockForm = new MockNgForm();
      mockForm.valid = false;

      // Act
      component.onSubmit(mockForm as any);

      // Assert
      expect(jest.mocked(mockRouter.navigate)).not.toHaveBeenCalled();
    });

    it('should handle empty search term gracefully', () => {
      // Arrange
      const mockForm = new MockNgForm();
      mockForm.valid = true;
      mockForm.form.value.searchTerm = '';

      // Act
      component.onSubmit(mockForm as any);

      // Assert
      expect(jest.mocked(mockRouter.navigate)).toHaveBeenCalledWith(['details'], {
        queryParams: { word: '' }
      });
    });
  });
});

// End of unit tests for: onSubmit
