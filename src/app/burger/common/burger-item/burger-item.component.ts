import { Component, Input } from '@angular/core';
import { Burger } from '../../burger.model';

@Component({
  standalone: true,
  selector: 'app-burger-item',
  templateUrl: 'burger-item.component.html',
})
export class BurgerItemComponent {
  @Input() burger?: Burger;
}
