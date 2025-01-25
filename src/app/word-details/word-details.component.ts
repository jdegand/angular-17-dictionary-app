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
  name = 'WordDetailsComponent';
  errorResponse: any;
  word$: any;
  playing = false;
  searched: string | undefined | null;

  @Input() set word(word: string) {
    this.searched = word;
  }

  // early tests rules need to be updated regarding inject function use
  // I don't think it is necessary to use inject function inside of a constructor
  // as the inject function has its own injection context
  apiService = inject(ApiService);

  ngOnChanges() {

    // bug here -> used `return this.apiService.getWord()`
    // VsCode suggested that ngOnChanges could be an async function 
    // ngOnChanges, ngOnInit shouldn't be async functions
    // whenever you see that, you have done something wrong
    // see https://stackoverflow.com/questions/56092083/async-await-in-angular-ngoninit

    if (this.searched) {
      this.apiService.getWord(this.searched).then((res:any) => {
        this.word$ = res;
      });
    }
  }

  findPhoneticText(parentList: any) {
    return parentList.filter((item: any) => item?.text);
  }

  findAudio(parentList: any) {
    return parentList.filter((item: any) => item?.audio);
  }

  isPlaying() {
    this.playing = !this.playing;
  }
}
