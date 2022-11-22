import { Component } from '@angular/core';
import { BurgerFormComponent } from '../../common/burger-form/burger-form.component';
import { BurgerListComponent } from '../../common/burger-list/burger-list.component';

@Component({
  standalone: true,
  selector: 'app-burger-home',
  templateUrl: 'burger-home.component.html',
  styleUrls: ['burger-home.component.css'],
  imports: [BurgerFormComponent, BurgerListComponent],
})
export class BurgerHomeComponent {}
