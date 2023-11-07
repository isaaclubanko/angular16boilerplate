import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoursService {

  scheduleItems: any[] = [
    {
      day: 'Monday',
      time: '7am-7pm',
    },
    {
      day: 'Tuesday',
      time: 'closed',
    },
    {
      day: 'Wednesday',
      time: '7am-7pm',
    },
    {
      day: 'Thursday',
      time: '7am-7pm',
    },
    {
      day: 'Friday',
      time: '7am-7pm',
    },
    {
      day: 'Saturday',
      time: '7am-9pm',
    },
    {
      day: 'Sunday',
      time: '7am-9pm',
    },
  
  ]


  getHours(): Observable<any[]>{
    return of(
      this.scheduleItems
    )
  }

  constructor() { }
}
