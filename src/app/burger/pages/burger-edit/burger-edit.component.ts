import { Component } from '@angular/core';
import { BurgerFormComponent } from '../../common/burger-form/burger-form.component';

@Component({
  standalone: true,
  selector: 'app-burger-edit',
  templateUrl: 'burger-edit.component.html',
  styleUrls: ['burger-edit.component.css'],
  imports: [BurgerFormComponent],
})
export class BurgerEditComponent {}
