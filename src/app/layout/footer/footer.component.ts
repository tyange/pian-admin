import { Component } from '@angular/core';

import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  imports: [FontAwesomeModule],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  faCopyright = faCopyright;
}
