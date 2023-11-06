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

  items$: Observable<any> = new Observable()
  forexSubscription$: Subscription = new Subscription();
  totalPrice = 0;
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
      combineLatestWith(this.forexRate$)
    ).subscribe(([gross, forex])=>{
      this.totalPrice = this.roundTotal(gross, forex);
    })
  }


  public roundTotal(v1:number, v2:number){
    return Math.round((v1 * v2) * 100) / 100
  }
  public updateTotal(item: any){
    this.orders.push(item)
    let total = this.grossTotal$.value + item.price
    this.grossTotal$.next(total)
  }

  public ngOnDestroy(){
    this.forexSubscription$.unsubscribe()
  }
}
