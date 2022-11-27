import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { BurgerHomeComponent } from './burger/pages/burger-home/burger-home.component';
import { ModalComponent } from './layout/modal/modal.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    LayoutComponent,
    BurgerHomeComponent,
    ModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
