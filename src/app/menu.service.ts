import { Injectable } from '@angular/core';
import { Observable, of, map, interval} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: any[] = [
    {
      name: 'Two Eggs',
      price: 2.19,
      description: 'Two eggs any style'
    },
    {
      name: 'Pancakes',
      price: 5.19,
      description: 'Triple stack of flapjacks'
    },
    {
      name: 'Bacon',
      price: 2.50,
      description: 'Extra Crispy'
    },
    {
      name: 'Scrapple',
      price: 2.89,
      description: 'PA Specialty'
    }
  ]
  constructor() { }

  getMenuItems(): Observable<any[]>{
    return of(
      this.menuItems
    )
  }

  updateTax(): Observable<any>{
    const src = interval(10000)
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
        const rate = Math.floor((Math.random() * 1 +1) * 100) / 100
        return rate
      })
    )
  }
}
