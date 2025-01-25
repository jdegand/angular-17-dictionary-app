
// Unit tests for: isPlaying


import { WordDetailsComponent } from '../word-details.component';


describe('WordDetailsComponent.isPlaying() isPlaying method', () => {
  let component: WordDetailsComponent;

  beforeEach(() => {
    // Initialize the component before each test
    component = new WordDetailsComponent({} as any);
  });

  describe('Happy Paths', () => {
    it('should toggle playing from false to true', () => {
      // Arrange: Ensure initial state is false
      component.playing = false;

      // Act: Call the isPlaying method
      component.isPlaying();

      // Assert: Check if playing is toggled to true
      expect(component.playing).toBe(true);
    });

    it('should toggle playing from true to false', () => {
      // Arrange: Ensure initial state is true
      component.playing = true;

      // Act: Call the isPlaying method
      component.isPlaying();

      // Assert: Check if playing is toggled to false
      expect(component.playing).toBe(false);
    });
  });

  describe('Edge Cases', () => {
    it('should handle multiple toggles correctly', () => {
      // Arrange: Ensure initial state is false
      component.playing = false;

      // Act: Toggle multiple times
      component.isPlaying(); // true
      component.isPlaying(); // false
      component.isPlaying(); // true

      // Assert: Check if playing is toggled correctly
      expect(component.playing).toBe(true);
    });

    it('should maintain state when toggled an even number of times', () => {
      // Arrange: Ensure initial state is false
      component.playing = false;

      // Act: Toggle an even number of times
      component.isPlaying(); // true
      component.isPlaying(); // false
      component.isPlaying(); // true
      component.isPlaying(); // false

      // Assert: Check if playing is back to initial state
      expect(component.playing).toBe(false);
    });
  });
});

// End of unit tests for: isPlaying
