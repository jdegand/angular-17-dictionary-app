import { Component, Input, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css', '../../styles.css'],
})
export class PlayerComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() audioSrc: any;

  playing = false;

  audio: any;
  endedListener: any;

  /**
    * Initializes the audio object with the specified audio source.
    * This function is called once the component is initialized.
    * 
    * @throws {Error} Throws an error if the audio source is invalid.
    */
  ngOnInit() {
    if (this.audioSrc) {
      this.audio = new Audio(this.audioSrc);
    } else {
      // console.error('audioSrc is undefined.');
      // you can set a default audioSrc or display an error message
      this.audioSrc = '';
      this.audio = new Audio(this.audioSrc);
    }
  }

  /**
    * Toggles the playback state of the audio. 
    * If currently playing, it pauses the audio; otherwise, it plays the audio.
    * 
    * @returns {void} No return value.
    * @throws {Error} Throws an error if audio playback fails.
    */
  isPlaying() {
    if (!this.audio) {
      return;
    }

    this.playing = !this.playing;
    if (this.playing) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  /**
    * Initializes the component after the view has been fully initialized.
    * Sets up an event listener to update the 'playing' state when the audio ends.
    * 
    * @returns void
    * @throws None
    */
  ngAfterViewInit() {
    if (this.audio && !this.endedListener) {
      this.endedListener = () => (this.playing = false);
      this.audio.addEventListener('ended', this.endedListener);
    }
  }

  /**
    * Cleans up the event listener when the component is destroyed.
    * 
    * @returns void
    * @throws None
    */
  ngOnDestroy() {
    if (this.audio && this.endedListener) {
      this.audio.removeEventListener('ended', this.endedListener);
    }
  }
}
