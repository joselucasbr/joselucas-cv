import { Component } from '@angular/core';

import { CVService } from '../shared/cv.service';
import { TagsList, Tags } from '../shared/tags.model';

@Component({
  selector: 'cv-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tagsList: TagsList = {"list":[]};

  constructor(private cvService: CVService) {};

  ngOnInit(){
    this.cvService.getTags()
      .then(tagsList=>{
        console.log(tagsList);
        this.tagsList = tagsList
      });
  }

}
