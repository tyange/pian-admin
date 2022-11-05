import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  standalone: true,
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  imports: [HeaderComponent],
})
export class LayoutComponent {}
