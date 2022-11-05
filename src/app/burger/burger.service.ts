import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BurgerService {
  constructor(private http: HttpClient) {}

  addBurger(burger: { name: string; brand: string; description: string }) {
    const url = 'http://localhost:4000/burger';
    this.http.post(url, burger).subscribe(() => console.log(burger));
  }
}
