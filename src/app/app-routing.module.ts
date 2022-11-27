import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgerHomeComponent } from './burger/pages/burger-home/burger-home.component';
import { BurgerEditComponent } from './burger/pages/burger-edit/burger-edit.component';

const routes: Routes = [
  {
    path: 'burger/edit/:id',
    component: BurgerEditComponent,
  },
  { path: 'burger', component: BurgerHomeComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'burger', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
