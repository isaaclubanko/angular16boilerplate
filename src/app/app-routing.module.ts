import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakfastMenuComponent } from './breakfast-menu/breakfast-menu.component';


const routes: Routes = [
  { path: 'breakfastmenu', component: BreakfastMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
