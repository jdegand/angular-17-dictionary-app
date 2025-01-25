
// Unit tests for: isPlaying


import { PlayerComponent } from '../player.component';




describe('PlayerComponent.isPlaying() isPlaying method', () => {
  let component: PlayerComponent;
  let mockAudio: any;

  beforeEach(() => {
    mockAudio = {
      play: jest.fn(),
      pause: jest.fn(),
      addEventListener: jest.fn(),
    };
    component = new PlayerComponent();
    component.audioSrc = 'test-audio.mp3';
    component.audio = mockAudio;
  });

  describe('Happy Paths', () => {
    it('should play audio when isPlaying is called and currently not playing', () => {
      // Arrange
      component.playing = false;

      // Act
      component.isPlaying();

      // Assert
      expect(component.playing).toBe(true);
      expect(mockAudio.play).toHaveBeenCalled();
    });

    it('should pause audio when isPlaying is called and currently playing', () => {
      // Arrange
      component.playing = true;

      // Act
      component.isPlaying();

      // Assert
      expect(component.playing).toBe(false);
      expect(mockAudio.pause).toHaveBeenCalled();
    });
  });

  describe('Edge Cases', () => {
    it('should handle calling isPlaying when audio is undefined', () => {
      // Arrange
      component.audio = undefined;

      // Act & Assert
      expect(() => component.isPlaying()).not.toThrow();
    });

    it('should toggle playing state correctly even if audio methods are not defined', () => {
      // Arrange
      component.audio = {};

      // Act
      component.isPlaying();

      // Assert
      expect(component.playing).toBe(true);

      // Act again
      component.isPlaying();

      // Assert
      expect(component.playing).toBe(false);
    });
  });
});

// End of unit tests for: isPlaying
