import { Component } from '@angular/core';
import { BurgerService } from '../burger.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-burger-form',
  templateUrl: 'burger-form.component.html',
  imports: [FormsModule],
})
export class BurgerFormComponent {
  enteredName = '';
  enteredBrand = '';
  enteredDescription = '';

  constructor(private burgerService: BurgerService) {}

  addBurgerHandler() {
    this.burgerService.addBurger({
      name: this.enteredName,
      brand: this.enteredBrand,
      description: this.enteredDescription,
    });
  }
}
