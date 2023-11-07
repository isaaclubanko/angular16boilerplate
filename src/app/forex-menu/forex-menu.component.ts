import { Component, WritableSignal, Signal, signal, computed } from '@angular/core';
import { OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-forex-menu',
  templateUrl: './forex-menu.component.html',
  styleUrls: ['./forex-menu.component.css']
})
export class ForexMenuComponent implements OnInit {
  forexSubscription$: Subscription = new Subscription();

  items$: Observable<any> = new Observable()
  orders:any[] = []

  grossTotal: WritableSignal<number> = signal(0);
  forexRate: WritableSignal<number> = signal(1);
  totalPrice: Signal<number> = computed(() => 
    this.dollarAmount(this.grossTotal() * this.forexRate())
  )

  constructor(
    private menuService: MenuService
  ){
    
  }

  ngOnInit(): void {
    this.items$ = this.menuService.getMenuItems()
    this.forexSubscription$ = this.menuService.updateForex().subscribe(
      rate=>{
        this.forexRate.set(rate);
      }
    )
  }

  public dollarAmount(v1:number){
    return Math.round((v1) * 100) / 100
  }

  public updateTotal(item: any){
    this.orders.push(item)
    this.grossTotal.update((value)=> this.dollarAmount(value + item.price ))
  }

  public ngOnDestroy(){
    this.forexSubscription$.unsubscribe()
  }
}
