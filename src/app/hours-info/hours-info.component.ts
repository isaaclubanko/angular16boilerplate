import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoursService } from './hours.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-hours-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hours-info.component.html',
  styleUrls: ['./hours-info.component.css']
})
export class HoursInfoComponent implements OnInit{
  hoursSubscription$: Observable<any> = new Observable();

  constructor( private hoursService: HoursService){

  }

  ngOnInit(): void {
    this.hoursSubscription$ = this.hoursService.getHours();
  }
}
