
// Unit tests for: fontChange


import { FontSelectComponent } from '../font-select.component';


// Mock class for NgForm
class MockNgForm {
  public form = {
    value: {
      font: 'Serif' as String | null | undefined
    }
  };
}

describe('FontSelectComponent.fontChange() fontChange method', () => {
  let component: FontSelectComponent;
  let mockDocument: Document;
  let mockNgForm: MockNgForm;

  beforeEach(() => {
    mockDocument = document;
    component = new FontSelectComponent(mockDocument as any);
    mockNgForm = new MockNgForm();
  });

  describe('Happy Paths', () => {
    it('should set the body class to the selected font in lowercase', () => {
      // Arrange
      mockNgForm.form.value.font = 'Serif';

      // Act
      component.fontChange(mockNgForm as any);

      // Assert
      expect(mockDocument.body.getAttribute('class')).toBe('serif');
    });

    it('should handle different font selections correctly', () => {
      // Arrange
      mockNgForm.form.value.font = 'Sans-Serif';

      // Act
      component.fontChange(mockNgForm as any);

      // Assert
      expect(mockDocument.body.getAttribute('class')).toBe('sans-serif');
    });
  });

  describe('Edge Cases', () => {
    it('should handle an empty font selection gracefully', () => {
      // Arrange
      mockNgForm.form.value.font = '';

      // Act
      component.fontChange(mockNgForm as any);

      // Assert
      expect(mockDocument.body.getAttribute('class')).toBe('');
    });

    it('should handle null font selection gracefully', () => {
      // Arrange
      mockNgForm.form.value.font = null;

      // Act
      component.fontChange(mockNgForm as any);

      // Assert
      expect(mockDocument.body.getAttribute('class')).toBe('');
    });

    it('should handle undefined font selection gracefully', () => {
      // Arrange
      mockNgForm.form.value.font = undefined;

      // Act
      component.fontChange(mockNgForm as any);

      // Assert
      expect(mockDocument.body.getAttribute('class')).toBe('');
    });
  });
});

// End of unit tests for: fontChange
