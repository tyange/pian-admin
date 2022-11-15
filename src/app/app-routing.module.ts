import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgerComponent } from './burger/burger.component';
import { BurgerFormComponent } from './burger/burger-form/burger-form.component';

const routes: Routes = [
  {
    path: 'burger/edit/:burgerId',
    component: BurgerFormComponent,
  },
  { path: 'burger', component: BurgerComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
