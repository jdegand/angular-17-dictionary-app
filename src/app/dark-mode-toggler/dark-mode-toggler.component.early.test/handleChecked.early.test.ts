
// Unit tests for: handleChecked


import { DarkModeTogglerComponent } from '../dark-mode-toggler.component';


describe('DarkModeTogglerComponent.handleChecked() handleChecked method', () => {
  let component: DarkModeTogglerComponent;

  beforeEach(() => {
    component = new DarkModeTogglerComponent();
  });

  describe('Happy Paths', () => {
    it('should set data-theme to "dark" when event.target.checked is true', () => {
      // Arrange
      const event = { target: { checked: true } };
      document.body.setAttribute('data-theme', 'light');

      // Act
      component.handleChecked(event);

      // Assert
      expect(document.body.getAttribute('data-theme')).toBe('dark');
    });

    it('should set data-theme to "light" when event.target.checked is false', () => {
      // Arrange
      const event = { target: { checked: false } };
      document.body.setAttribute('data-theme', 'dark');

      // Act
      component.handleChecked(event);

      // Assert
      expect(document.body.getAttribute('data-theme')).toBe('light');
    });
  });

  describe('Edge Cases', () => {
    it('should handle event with undefined target gracefully', () => {
      // Arrange
      const event = { target: undefined };
      document.body.setAttribute('data-theme', 'dark');

      // Act
      component.handleChecked(event);

      // Assert
      // Expect no change in data-theme
      expect(document.body.getAttribute('data-theme')).toBe('dark');
    });

    it('should handle event with null target gracefully', () => {
      // Arrange
      const event = { target: null };
      document.body.setAttribute('data-theme', 'light');

      // Act
      component.handleChecked(event);

      // Assert
      // Expect no change in data-theme
      expect(document.body.getAttribute('data-theme')).toBe('light');
    });

    it('should handle event with target having no checked property gracefully', () => {
      // Arrange
      const event = { target: {} };
      document.body.setAttribute('data-theme', 'dark');

      // Act
      component.handleChecked(event);

      // Assert
      // Expect no change in data-theme
      expect(document.body.getAttribute('data-theme')).toBe('dark');
    });
  });
});

// End of unit tests for: handleChecked
