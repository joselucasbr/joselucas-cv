import { Component } from '@angular/core';

import { CVService } from '../shared/cv.service';
import { Icons, IconsList } from '../shared/icons.model';

@Component({
  selector: 'cv-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent {
  iconsList: IconsList = {};

  constructor(private cvService:CVService){};

  ngOnInit(){
    this.cvService.getIcons()
      .then(iconsList=> this.iconsList=iconsList);
  }

}
