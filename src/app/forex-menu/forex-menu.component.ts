import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { BehaviorSubject, combineLatestWith, Observable, Subscription, map, tap} from 'rxjs';



@Component({
  selector: 'app-forex-menu',
  templateUrl: './forex-menu.component.html',
  styleUrls: ['./forex-menu.component.css']
})
export class ForexMenuComponent implements OnInit {
  orders:any[] = []
  grossTotal$: BehaviorSubject<number> = new BehaviorSubject(0)
  forexRate$: BehaviorSubject<number> = new BehaviorSubject(1)
  totalPrice$: BehaviorSubject<number> = new BehaviorSubject(0)

  items$: Observable<any> = new Observable()
  forexSubscription$: Subscription = new Subscription();
  constructor(
    private menuService: MenuService
  ){
    
  }

  ngOnInit(): void {
    this.items$ = this.menuService.getMenuItems()
    this.forexSubscription$ = this.menuService.updateForex().subscribe(
      rate=>{
        this.forexRate$.next(rate);
      }
    )
    this.grossTotal$.pipe(
      combineLatestWith(this.forexRate$),
      tap(([gross, forex])=>{
        this.totalPrice$.next(this.dollarAmount(gross * forex))
      })
    ).subscribe()
  }


  public dollarAmount(v1:number){
    return Math.round((v1) * 100) / 100
  }

  public updateTotal(item: any){
    this.orders.push(item)
    let total = this.dollarAmount(this.grossTotal$.value + item.price)
    this.grossTotal$.next(total)
  }

  public ngOnDestroy(){
    this.forexSubscription$.unsubscribe()
    this.grossTotal$.unsubscribe();
    this.totalPrice$.unsubscribe();
    this.forexRate$.unsubscribe();
  }
}
