import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Burger } from './burger.model';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BurgerService {
  private burgerChunks: Burger[][] = [];
  private burgerSub = new Subject<{
    burgers: Burger[][];
  }>();

  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:4000';
  perPage = 5;

  getAllBurger() {
    return this.http
      .get<Burger[]>(`${this.baseUrl}/burger`)
      .pipe(
        map((res) => {
          const burgerDataArr = [];

          for (let i = 0; i < res.length; i += this.perPage) {
            const chunk = res.slice(i, i + this.perPage);
            burgerDataArr.push(chunk);
          }

          return burgerDataArr;
        })
      )
      .subscribe({
        next: (data) => {
          this.burgerChunks = data;
          this.burgerSub.next({
            burgers: [...this.burgerChunks],
          });
        },
        error: (err) => console.log(err),
      });
  }

  getAllBurgerUpdateListener() {
    return this.burgerSub;
  }

  addBurger(burger: { name: string; brand: string; description: string }) {
    const url = `${this.baseUrl}/burger`;
    this.http.post(url, burger).subscribe(() => this.getAllBurger());
  }

  editBurger() {}
}
