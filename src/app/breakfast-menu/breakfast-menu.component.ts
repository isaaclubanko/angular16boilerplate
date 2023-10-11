import { Component, WritableSignal, signal, computed } from '@angular/core';
import { OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-breakfast-menu',
  templateUrl: './breakfast-menu.component.html',
  styleUrls: ['./breakfast-menu.component.css']
})
export class BreakfastMenuComponent implements OnInit{

  items:any[] = []
  taxSubscription$: Subscription = new Subscription();

  
  grossTotal: WritableSignal<number> = signal(0);
  taxRate: WritableSignal<number> = signal(9);

  tax = computed(()=>(
    this.grossTotal() * this.taxRate()) / 100
  )
  totalPrice = computed(()=>
    Math.round((this.grossTotal() + this.tax()) * 100) / 100
  )


  constructor(
    private menuService: MenuService
  ){
    
  }

  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe( items=>{
      this.items = items;
    })
    this.taxSubscription$ = this.menuService.updateTax().subscribe(
      rate=>{
        this.taxRate.set(rate);
      }
    )
  }

  public updateTotal(item: any){
    this.grossTotal.update(value => value + item.price)
  }

  public ngOnDestroy(){
    this.taxSubscription$.unsubscribe()
  }
}
