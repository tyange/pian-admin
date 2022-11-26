import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { BurgerService } from '../../burger.service';
import { FormsModule } from '@angular/forms';
import { Burger } from '../../burger.model';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-burger-form',
  templateUrl: 'burger-form.component.html',
  imports: [FormsModule, NgIf],
})
export class BurgerFormComponent implements OnChanges {
  @Input() burgerData?: Burger;
  @Output() editBurgerEvent = new EventEmitter<{
    id: number;
    name: string;
    brand: string;
    description: string;
  }>();

  isEditMode = false;
  enteredName = '';
  enteredBrand = '';
  enteredDescription = '';

  constructor(private burgerService: BurgerService) {}

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

  editBurger(burgerId: number) {
    this.editBurgerEvent.emit({
      id: burgerId,
      name: this.enteredName,
      brand: this.enteredBrand,
      description: this.enteredDescription,
    });
  }
}
