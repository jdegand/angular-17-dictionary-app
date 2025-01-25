
// Unit tests for: ngAfterViewInit


import { PlayerComponent } from '../player.component';




describe('PlayerComponent.ngAfterViewInit() ngAfterViewInit method', () => {
  let component: PlayerComponent;
  let mockAudio: any;

  beforeEach(() => {
    mockAudio = {
      addEventListener: jest.fn(),
      play: jest.fn(),
      pause: jest.fn(),
    };
    component = new PlayerComponent();
    component.audioSrc = 'test-audio.mp3';
    component.audio = mockAudio;
  });

  describe('Happy Paths', () => {
    it('should add an event listener for the "ended" event on the audio element', () => {
      // Arrange
      const addEventListenerSpy = jest.spyOn(mockAudio, 'addEventListener');

      // Act
      component.ngAfterViewInit();

      // Assert
      expect(addEventListenerSpy).toHaveBeenCalledWith('ended', expect.any(Function));
    });

    it('should set playing to false when the audio ends', () => {
      // Arrange
      component.playing = true;
      component.ngAfterViewInit();
      const endedCallback = mockAudio.addEventListener.mock.calls[0][1];

      // Act
      endedCallback();

      // Assert
      expect(component.playing).toBe(false);
    });
  });

  describe('Edge Cases', () => {
    it('should not throw an error if audio is undefined', () => {
      // Arrange
      component.audio = undefined;

      // Act & Assert
      expect(() => component.ngAfterViewInit()).not.toThrow();
    });

    it('should handle multiple calls to ngAfterViewInit gracefully', () => {
      // Arrange
      component.ngAfterViewInit();
      const firstCallListener = mockAudio.addEventListener.mock.calls[0][1];

      // Act
      component.ngAfterViewInit();
      const secondCallListener = mockAudio.addEventListener.mock.calls[1][1];

      // Assert
      expect(firstCallListener).toBe(secondCallListener);
    });
  });
});

// End of unit tests for: ngAfterViewInit
