import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-font-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './font-select.component.html',
  styleUrls: ['./font-select.component.css'],
})
export class FontSelectComponent {
  fonts = ['Serif', 'Sans-Serif', 'Monospace'];

  // replace with inject function for better type safety 
  constructor(@Inject(DOCUMENT) private document: Document) {}

  fontChange(fontForm: NgForm) {
    this.document.body.setAttribute('class', '');

    // set font value as class here
    this.document.body.setAttribute(
      'class',
      fontForm.form.value.font.toLowerCase()
    );
  }
}
