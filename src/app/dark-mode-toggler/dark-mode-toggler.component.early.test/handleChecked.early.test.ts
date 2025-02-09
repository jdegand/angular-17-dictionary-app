
// Unit tests for: handleChecked


import { DarkModeTogglerComponent } from '../dark-mode-toggler.component';


describe('DarkModeTogglerComponent.handleChecked() handleChecked method', () => {
  let component: DarkModeTogglerComponent;

  beforeEach(() => {
    component = new DarkModeTogglerComponent();
    // Reset the document body attribute before each test
    document.body.removeAttribute('data-theme');
  });

  // Happy Path Tests
  describe('Happy Paths', () => {
    it('should set data-theme to "dark" when event.target.checked is true', () => {
      // Arrange
      const event = { target: { checked: true } };

      // Act
      component.handleChecked(event);

      // Assert
      expect(document.body.getAttribute('data-theme')).toBe('dark');
    });

    it('should set data-theme to "light" when event.target.checked is false', () => {
      // Arrange
      const event = { target: { checked: false } };

      // Act
      component.handleChecked(event);

      // Assert
      expect(document.body.getAttribute('data-theme')).toBe('light');
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    it('should set data-theme to "light" and log error when event is null', () => {
      // Arrange
      const event = null;

      // Act
      component.handleChecked(event);

      // Assert
      expect(document.body.getAttribute('data-theme')).toBe('light');
    });

    it('should set data-theme to "light" and log error when event.target is undefined', () => {
      // Arrange
      const event = {};

      // Act
      component.handleChecked(event);

      // Assert
      expect(document.body.getAttribute('data-theme')).toBe('light');
    });

    it('should set data-theme to "light" and log error when event.target.checked is undefined', () => {
      // Arrange
      const event = { target: {} };

      // Act
      component.handleChecked(event);

      // Assert
      expect(document.body.getAttribute('data-theme')).toBe('light');
    });
  });
});

// End of unit tests for: handleChecked
