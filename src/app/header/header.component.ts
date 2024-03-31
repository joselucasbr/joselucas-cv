import { Component } from "@angular/core";

import { CVService } from "../shared/cv.service";
import { Header } from "../shared/header.model";

@Component(
    {
        selector:'cv-header',
        templateUrl:'./header.component.html',
        styleUrls:['../bars/font-awesome.min.css','./header.component.css']
    }
)
export class HeaderComponent {
    header:Header = {};

    constructor(private cvService:CVService){};

    ngOnInit(){
        this.cvService.getHeader()
            .then(header=>this.header=header);
    }
}