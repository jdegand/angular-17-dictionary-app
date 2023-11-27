import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { PlayerComponent } from '../player/player.component';
import { MeaningComponent } from '../meaning/meaning.component';
import { SourceComponent } from '../source/source.component';

@Component({
  selector: 'app-word-details',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MeaningComponent, SourceComponent],
  templateUrl: './word-details.component.html',
  styleUrls: ['./word-details.component.css', '../../styles.css'],
})
export class WordDetailsComponent {
  errorResponse: any;
  word$: any;
  playing = false;
  searched: string | undefined;

  @Input() set word(word: string) {
    this.searched = word;
  }

  apiService = inject(ApiService);

  // this could be converted to async function 
  // not necessary?
  ngOnChanges() {
    return this.apiService.getWord(this.searched).then(res => {
      this.word$ = res;
    });
  }

  findPhoneticText(parentList: any) {
    return parentList.filter((item: any) => item.text);
  }

  findAudio(parentList: any) {
    return parentList.filter((item: any) => item.audio);
  }

  isPlaying() {
    this.playing = !this.playing;
  }
}
