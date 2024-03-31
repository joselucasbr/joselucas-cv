import { Component } from '@angular/core';

import { CVService } from '../shared/cv.service';
import { Summary } from '../shared/summary.model';

@Component({
  selector: 'cv-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  summary: Summary = {};

  constructor(private cvService: CVService) {};


  ngOnInit() {
    this.cvService.getSummary()
      .then(summary => this.summary = summary);
  }
  
}
