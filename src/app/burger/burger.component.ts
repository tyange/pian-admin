import { Component } from '@angular/core';
import { BurgerFormComponent } from './burger-form/burger-form.component';

@Component({
  standalone: true,
  selector: 'app-burger',
  templateUrl: 'burger.component.html',
  styleUrls: ['burger.component.css'],
  imports: [BurgerFormComponent],
})
export class BurgerComponent {}
