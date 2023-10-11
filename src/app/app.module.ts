import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreakfastMenuComponent } from './breakfast-menu/breakfast-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForexMenuComponent } from './forex-menu/forex-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BreakfastMenuComponent,
    ForexMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
