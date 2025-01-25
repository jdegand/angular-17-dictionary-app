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

/**
  * Updates the document body's class attribute to reflect the selected font.
  * The font value is retrieved from the provided form and converted to lowercase.
  * 
  * @param fontForm - The form containing the font selection.
  * @returns void
  * @throws None
  */
export class FontSelectComponent {
  fonts = ['Serif', 'Sans-Serif', 'Monospace'];

  // replace with inject function for better type safety 
  constructor(@Inject(DOCUMENT) private document: Document) { }

  fontChange(fontForm: NgForm) {
    this.document.body.setAttribute('class', '');

    const font = fontForm.form.value.font;

    if (font) {
      // set font value as class here
      this.document.body.setAttribute(
        'class',
        font.toLowerCase()
      );
    } else {
      console.warn('Font is undefined.');
      // Handle undefined font case here, if needed
    }
  }
}
