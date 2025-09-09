import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'builit';
  currentDate: Date = new Date();
  public getWeekDays(startingDate: Date): Date[] {
    const dateList: Date[] = [];
    for (let i = 0; i <= 6; i++) {
      const newDate = new Date(this.currentDate.getTime());
      newDate.setDate(newDate.getDate() + i);
      dateList.push(newDate);
    }
    return dateList;
  }
}
