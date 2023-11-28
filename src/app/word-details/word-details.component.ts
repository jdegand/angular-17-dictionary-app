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

  ngOnChanges() {

    // bug here -> used `return this.apiService.getWord()`
    // VsCode suggested that ngOnChanges could be an async function 
    // ngOnChanges, ngOnInit shouldn't be async functions
    // whenever you see that, you have done something wrong
    // see https://stackoverflow.com/questions/56092083/async-await-in-angular-ngoninit

    this.apiService.getWord(this.searched).then(res => {
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
