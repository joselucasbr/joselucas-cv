import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { SectionComponent } from './section/section.component';
import { SummaryComponent } from './summary/summary.component';
import { TagsComponent } from './tags/tags.component';
import { BarsComponent } from './bars/bars.component';
import { IconsComponent } from './icons/icons.component';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperiencesComponent,
    SectionComponent,
    SummaryComponent,
    TagsComponent,
    BarsComponent,
    IconsComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
