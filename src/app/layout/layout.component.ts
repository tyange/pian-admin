import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  imports: [HeaderComponent, FooterComponent],
})
export class LayoutComponent {}
