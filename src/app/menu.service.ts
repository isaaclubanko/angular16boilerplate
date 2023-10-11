import { Injectable } from '@angular/core';
import { Observable, of, map, interval} from 'rxjs';

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

  updateTax(): Observable<any>{
    const src = interval(3000)
    return src.pipe(
      map((x)=>{
        const rate = Math.floor(Math.random() * 10) + 6;
        return rate
      })
    )
  }

  updateForex(): Observable<any>{
    const src = interval(3000)
    return src.pipe(
      map((x)=>{
        const rate = Math.floor((Math.random() * .3 + 1) * 100) / 100
        return rate
      })
    )
  }
}
