import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-source',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css'],
})
export class SourceComponent {
  @Input() source: any;
}
