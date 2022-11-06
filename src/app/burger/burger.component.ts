import { Component } from '@angular/core';
import { BurgerFormComponent } from './burger-form/burger-form.component';
import { BurgerListComponent } from './burger-list/burger-list.component';

@Component({
  standalone: true,
  selector: 'app-burger',
  templateUrl: 'burger.component.html',
  styleUrls: ['burger.component.css'],
  imports: [BurgerFormComponent, BurgerListComponent],
})
export class BurgerComponent {}
