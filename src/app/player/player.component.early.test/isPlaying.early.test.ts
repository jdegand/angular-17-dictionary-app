
// Unit tests for: isPlaying


import { PlayerComponent } from '../player.component';


describe('PlayerComponent.isPlaying() isPlaying method', () => {
  let component: PlayerComponent;
  let mockAudioPlay: jest.Mock;
  let mockAudioPause: jest.Mock;

  beforeEach(() => {
    component = new PlayerComponent();
    mockAudioPlay = jest.fn();
    mockAudioPause = jest.fn();
    component.audio = {
      play: mockAudioPlay,
      pause: mockAudioPause,
    };
  });

  describe('Happy Paths', () => {
    it('should play audio when isPlaying is called and currently not playing', () => {
      // Arrange
      component.playing = false;

      // Act
      component.isPlaying();

      // Assert
      expect(component.playing).toBe(true);
      expect(mockAudioPlay).toHaveBeenCalled();
      expect(mockAudioPause).not.toHaveBeenCalled();
    });

    it('should pause audio when isPlaying is called and currently playing', () => {
      // Arrange
      component.playing = true;

      // Act
      component.isPlaying();

      // Assert
      expect(component.playing).toBe(false);
      expect(mockAudioPause).toHaveBeenCalled();
      expect(mockAudioPlay).not.toHaveBeenCalled();
    });
  });

  describe('Edge Cases', () => {
    it('should not throw an error if audio is undefined', () => {
      // Arrange
      component.audio = undefined;

      // Act & Assert
      expect(() => component.isPlaying()).not.toThrow();
    });

    it('should not change playing state if audio is undefined', () => {
      // Arrange
      component.audio = undefined;
      const initialPlayingState = component.playing;

      // Act
      component.isPlaying();

      // Assert
      expect(component.playing).toBe(initialPlayingState);
    });
  });
});

// End of unit tests for: isPlaying
