import { Component } from '@angular/core';

import { CVService } from './shared/cv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CVService]
})
export class AppComponent {
  title = 'joselucas-cv';
}
