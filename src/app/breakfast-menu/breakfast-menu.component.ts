import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MenuService } from '../menu.service';


@Component({
  selector: 'app-breakfast-menu',
  templateUrl: './breakfast-menu.component.html',
  styleUrls: ['./breakfast-menu.component.css']
})
export class BreakfastMenuComponent implements OnInit{

  items:any[] = []
  totalPrice: number = 0.00

  constructor(
    private menuService: MenuService
  ){}

  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe( items=>{
      this.items = items;
    })
  }

  public updateTotal(item: any){
    this.totalPrice = this.totalPrice + item.price
    this.totalPrice = Math.round(this.totalPrice * 100) / 100
  }
}
