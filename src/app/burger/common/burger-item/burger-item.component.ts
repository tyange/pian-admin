import { Component, Input } from '@angular/core';
import { Burger } from '../../burger.model';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-burger-item',
  templateUrl: 'burger-item.component.html',
})
export class BurgerItemComponent {
  @Input() burger?: Burger;

  constructor(private router: Router) {}

  editButtonClickHandler() {
    this.router.navigate([`/burger/edit/${this.burger?.id}`]);
  }
}
