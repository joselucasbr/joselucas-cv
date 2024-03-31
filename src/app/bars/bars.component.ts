import { Component } from '@angular/core';

import { CVService } from '../shared/cv.service';
import { BarsList, Bars } from '../shared/bars.model';

@Component({
  selector: 'cv-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css','./font-awesome.min.css']
})
export class BarsComponent {
  barsList: BarsList = {};

  constructor(private cvService:CVService){};

  ngOnInit(){
    this.cvService.getBars()
    .then(barsList=>this.barsList=barsList);
  }
}
