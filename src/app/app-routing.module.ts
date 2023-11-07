import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakfastMenuComponent } from './breakfast-menu/breakfast-menu.component';
import { ForexMenuComponent } from './forex-menu/forex-menu.component';
import { HoursInfoComponent } from './hours-info/hours-info.component';

const routes: Routes = [
  { path: 'breakfastmenu', component: BreakfastMenuComponent},
  { path: 'breakfastforex', component: ForexMenuComponent},
  { path: 'hours', component: HoursInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
