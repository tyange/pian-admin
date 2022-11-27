import { Component, Input, OnChanges } from '@angular/core';
import { BurgerService } from '../../burger.service';
import { FormsModule } from '@angular/forms';
import { Burger } from '../../burger.model';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-burger-form',
  templateUrl: 'burger-form.component.html',
  imports: [FormsModule, NgIf],
})
export class BurgerFormComponent implements OnChanges {
  @Input() burgerData?: Burger;

  isEditMode = false;
  enteredName = '';
  enteredBrand = '';
  enteredDescription = '';

  constructor(private router: Router, private burgerService: BurgerService) {}

  ngOnChanges() {
    if (this.burgerData) {
      this.isEditMode = true;
      this.enteredName = this.burgerData.name;
      this.enteredBrand = this.burgerData.brand;
      this.enteredDescription = this.burgerData.description;
    }
  }

  addBurgerHandler() {
    this.burgerService.addBurger({
      name: this.enteredName,
      brand: this.enteredBrand,
      description: this.enteredDescription,
    });
  }

  editBurgerHandler() {
    this.burgerService
      .editBurger({
        id: this.burgerData!.id,
        name: this.enteredName,
        brand: this.enteredBrand,
        description: this.enteredDescription,
      })
      .subscribe({ next: () => this.router.navigate(['/burger']) });
  }

  deleteBurgerHandler() {
    this.burgerService
      .deleteBurger(this.burgerData?.id)
      .subscribe({ next: () => this.router.navigate(['/burger']) });
  }
}
