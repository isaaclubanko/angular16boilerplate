import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: any[] = [
    {
      name: 'Sausage McMuffin',
      price: 2.19,
      description: 'a sausage egg mcmuffin so good youll want to get another one'
    },
    {
      name: 'pancakes',
      price: 5.19,
      description: '3 stacks of flapjacks'
    }
  ]
  constructor() { }

  getMenuItems(): Observable<any[]>{
    return of(
      this.menuItems
    )
  }
}
