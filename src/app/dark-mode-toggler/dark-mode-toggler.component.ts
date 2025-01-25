import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dark-mode-toggler',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dark-mode-toggler.component.html',
  styleUrls: ['./dark-mode-toggler.component.css', '../../styles.css'],
})
export class DarkModeTogglerComponent {
  handleChecked(event: any) {
    if (event?.target?.checked !== undefined) {
      document.body.setAttribute('data-theme', event.target.checked ? 'dark' : 'light');
    } else {
      console.error('event or event.target is null.');
      document.body.setAttribute('data-theme', 'light');
    }
  }
}

