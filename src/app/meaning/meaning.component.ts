import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meaning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meaning.component.html',
  styleUrls: ['./meaning.component.css'],
})
export class MeaningComponent {
  @Input() meaning: any;
}
