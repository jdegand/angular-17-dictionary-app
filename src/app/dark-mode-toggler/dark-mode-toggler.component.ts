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
    if (event.target.checked) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }
}
