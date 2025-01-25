
// Unit tests for: ngOnDestroy


import { PlayerComponent } from '../player.component';




describe('PlayerComponent.ngOnDestroy() ngOnDestroy method', () => {
  let component: PlayerComponent;

  beforeEach(() => {
    component = new PlayerComponent();
    component.audioSrc = 'test-audio.mp3';
    component.ngOnInit();
    component.ngAfterViewInit();
  });

  describe('Happy paths', () => {
    it('should remove the "ended" event listener from the audio element', () => {
      // Arrange
      const removeEventListenerSpy = jest.spyOn(component.audio, 'removeEventListener');

      // Act
      component.ngOnDestroy();

      // Assert
      expect(removeEventListenerSpy).toHaveBeenCalledWith('ended', component.endedListener);
    });
  });

  describe('Edge cases', () => {
    it('should handle the case where audio is undefined gracefully', () => {
      // Arrange
      component.audio = undefined;

      // Act & Assert
      expect(() => component.ngOnDestroy()).not.toThrow();
    });

    it('should handle the case where endedListener is undefined gracefully', () => {
      // Arrange
      component.endedListener = undefined;

      // Act & Assert
      expect(() => component.ngOnDestroy()).not.toThrow();
    });
  });
});

// End of unit tests for: ngOnDestroy
