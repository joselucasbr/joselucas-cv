import { Component } from '@angular/core';

import { CVService } from '../shared/cv.service';
import { Timeline, TimelineList } from '../shared/timeline.model';
@Component({
  selector: 'cv-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  timelineList: TimelineList = {};

  constructor(private cvService:CVService){};

  ngOnInit(){
    this.cvService.getTimeline()
      .then(timelineList=>this.timelineList=timelineList);
  }

}
