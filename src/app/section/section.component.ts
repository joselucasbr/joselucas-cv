import { Component, Input } from '@angular/core';

@Component({
  selector: 'cv-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  @Input() title: string = '';
  @Input() subtitle: string = ''
}
