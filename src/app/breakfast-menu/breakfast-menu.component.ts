import { Component } from '@angular/core';
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
  grossTotal: number = 0.00
  taxRate: number = 9
  totalPrice: number = 0.00
  taxSubscription$: Subscription = new Subscription();

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
        this.taxRate = rate;
      }
    )
  }

  public updateTotal(item: any){
    this.grossTotal = this.grossTotal + item.price
    let tax = (this.grossTotal * this.taxRate) / 100
    this.totalPrice = Math.round((this.grossTotal + tax) * 100) / 100
  }

  public ngOnDestroy(){
    this.taxSubscription$.unsubscribe()
  }
}
