import { Component, OnInit } from '@angular/core';
import { BurgerFormComponent } from '../../common/burger-form/burger-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BurgerService } from '../../burger.service';
import { Burger } from '../../burger.model';

@Component({
  standalone: true,
  selector: 'app-burger-edit',
  templateUrl: 'burger-edit.component.html',
  styleUrls: ['burger-edit.component.css'],
  imports: [BurgerFormComponent],
})
export class BurgerEditComponent implements OnInit {
  burgerData?: Burger;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private burgerService: BurgerService
  ) {}

  ngOnInit() {
    this.burgerService
      .getBurger(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.burgerData = data;
      });
  }

  editBurgerHandler(burger: Burger) {
    this.burgerService
      .editBurger(burger)
      .subscribe(() => this.router.navigate(['burger']));
  }
}
