
// Unit tests for: endedListener


import { PlayerComponent } from '../player.component';


import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('endedListener() endedListener method', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlayerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
  });

  describe('Happy Paths', () => {
    it('should set playing to false when audio ends', () => {
      // Arrange
      component.audioSrc = 'test-audio.mp3';
      component.ngOnInit();
      component.ngAfterViewInit();
      component.playing = true;

      // Act
      component.endedListener();

      // Assert
      expect(component.playing).toBe(false);
    });

    it('should add ended event listener on ngAfterViewInit', () => {
      // Arrange
      component.audioSrc = 'test-audio.mp3';
      component.ngOnInit();
      const addEventListenerSpy = jest.spyOn(component.audio, 'addEventListener');

      // Act
      component.ngAfterViewInit();

      // Assert
      expect(addEventListenerSpy).toHaveBeenCalledWith('ended', component.endedListener);
    });

    it('should remove ended event listener on ngOnDestroy', () => {
      // Arrange
      component.audioSrc = 'test-audio.mp3';
      component.ngOnInit();
      component.ngAfterViewInit();
      const removeEventListenerSpy = jest.spyOn(component.audio, 'removeEventListener');

      // Act
      component.ngOnDestroy();

      // Assert
      expect(removeEventListenerSpy).toHaveBeenCalledWith('ended', component.endedListener);
    });
  });

  describe('Edge Cases', () => {
    it('should handle ngOnDestroy gracefully if ngAfterViewInit was not called', () => {
      // Arrange
      component.audioSrc = 'test-audio.mp3';
      component.ngOnInit();
      const removeEventListenerSpy = jest.spyOn(component.audio, 'removeEventListener');

      // Act
      component.ngOnDestroy();

      // Assert
      expect(removeEventListenerSpy).not.toHaveBeenCalled();
    });

    it('should not throw if audioSrc is invalid', () => {
      // Arrange
      component.audioSrc = null;

      // Act & Assert
      expect(() => {
        component.ngOnInit();
        component.ngAfterViewInit();
      }).not.toThrow();
    });
  });
});

// End of unit tests for: endedListener
