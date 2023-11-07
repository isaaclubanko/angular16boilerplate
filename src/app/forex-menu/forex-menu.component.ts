import { Component, WritableSignal, signal, computed } from '@angular/core';
import { OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forex-menu',
  templateUrl: './forex-menu.component.html',
  styleUrls: ['./forex-menu.component.css']
})
export class ForexMenuComponent implements OnInit {
  forexSubscription$: Subscription = new Subscription();

  items:any[] = []
  orders:any[] = []

  grossTotal: WritableSignal<number> = signal(0);
  forexRate: WritableSignal<number> = signal(1);
  totalPrice = computed(() => 
    this.dollarAmount(this.grossTotal() * this.forexRate())
  )

  constructor(
    private menuService: MenuService
  ){
    
  }

  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe( items=>{
      this.items = items;
    })
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
