import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgerFormComponent } from './burger/common/burger-form/burger-form.component';
import { BurgerHomeComponent } from './burger/pages/burger-home/burger-home.component';

const routes: Routes = [
  {
    path: 'burger-home/edit/:burgerId',
    component: BurgerFormComponent,
  },
  { path: 'burger', component: BurgerHomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
