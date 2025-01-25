
// Unit tests for: isPlaying


import { WordDetailsComponent } from '../word-details.component';


describe('WordDetailsComponent.isPlaying() isPlaying method', () => {
  let component: WordDetailsComponent;

  beforeEach(() => {
    component = new WordDetailsComponent();
  });

  describe('Happy Paths', () => {
    it('should toggle playing from false to true', () => {
      // Initial state
      component.playing = false;

      // Act
      component.isPlaying();

      // Assert
      expect(component.playing).toBe(true);
    });

    it('should toggle playing from true to false', () => {
      // Initial state
      component.playing = true;

      // Act
      component.isPlaying();

      // Assert
      expect(component.playing).toBe(false);
    });
  });

  describe('Edge Cases', () => {
    it('should handle multiple toggles correctly', () => {
      // Initial state
      component.playing = false;

      // Act & Assert
      component.isPlaying();
      expect(component.playing).toBe(true);

      component.isPlaying();
      expect(component.playing).toBe(false);

      component.isPlaying();
      expect(component.playing).toBe(true);
    });

    it('should maintain state consistency when toggled multiple times', () => {
      // Initial state
      component.playing = false;

      // Act
      for (let i = 0; i < 10; i++) {
        component.isPlaying();
      }

      // Assert
      expect(component.playing).toBe(false); // Even number of toggles should return to initial state
    });
  });
});

// End of unit tests for: isPlaying
