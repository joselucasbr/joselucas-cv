import { Component } from "@angular/core";
import { Cover, cover } from "./cover.data";

@Component(
    {
        selector:'cv-cover',
        templateUrl:'./cover.component.html',
        styleUrls:['./cover.component.css']
    }
)
export class CoverComponent {
    cover:Cover = cover;
    title:string = "summary";
    subtitle:string="";
    constructor() {
        // console.log(this.experiences)            
      }  
}