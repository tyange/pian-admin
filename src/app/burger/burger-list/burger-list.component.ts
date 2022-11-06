import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { BurgerService } from '../burger.service';
import { Subscription } from 'rxjs';
import { Burger } from '../burger.model';
import { BurgerItemComponent } from '../burger-item/burger-item.component';
import { PaginatorComponent } from './paginator/paginator.component';

@Component({
  standalone: true,
  selector: 'app-burger-list',
  templateUrl: 'burger-list.component.html',
  styleUrls: ['burger-list.component.css'],
  imports: [BurgerItemComponent, NgForOf, PaginatorComponent, NgIf],
})
export class BurgerListComponent implements OnInit {
  burgers: Burger[][] = [];
  currentPageBurgers: Burger[] = [];
  pageCounts = 0;

  private burgerSub!: Subscription;

  constructor(private burgerService: BurgerService) {}

  ngOnInit() {
    this.burgerService.getAllBurger();
    this.burgerSub = this.burgerService.getAllBurgerUpdateListener().subscribe({
      next: (data: { burgers: Burger[][] }) => {
        this.burgers = data.burgers;
        this.currentPageBurgers = data.burgers[0];
        this.pageCounts = data.burgers.length;
      },
    });
  }

  pageChange(pageNum: number) {
    const currentBurgers = this.burgers;

    this.currentPageBurgers = currentBurgers![pageNum];
  }

  ngOnDestroy() {
    this.burgerSub.unsubscribe();
  }
}
