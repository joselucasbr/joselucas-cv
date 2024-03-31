import { Component } from "@angular/core";

import { CVService } from "../shared/cv.service";
import { Experience } from "../shared/experience.model";

@Component(
    {
        selector:'cv-experiences',
        templateUrl:'./experiences.component.html',
        styleUrls:['./experiences.component.css']
    }
)
export class ExperiencesComponent {
    experiences: Experience[] = [];

    constructor(private cvService: CVService) {};

    ngOnInit() {
        this.cvService.getExperiences()
            .then(experiences=>this.experiences = experiences);
    }
}