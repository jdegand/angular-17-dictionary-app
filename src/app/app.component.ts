import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { FontSelectComponent } from './font-select/font-select.component';
import { DarkModeTogglerComponent } from './dark-mode-toggler/dark-mode-toggler.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../styles.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontSelectComponent,
    DarkModeTogglerComponent,
  ],
})
export class AppComponent {
  title = 'angular-dictionary-app';

  constructor(
    private route: Router,
    @Inject(DOCUMENT) private document: Document
  ) { }

  darkMode: any = this.document.body.getAttribute('data-theme'); // null / light / dark

  onSubmit(searchForm: NgForm) {
    if (searchForm.valid) {
      // could make api request here and then pass response to navigate as part of state object
      // this.apiService.getWord(searchForm.form.value.searchTerm).subscribe(response => console.log('res', response));

      this.route.navigate(['details'], {
        queryParams: { word: searchForm.form.value.searchTerm },
      });
    }
  }
}