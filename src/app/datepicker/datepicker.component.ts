import {Component} from '@angular/core';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html'
})
export class DatepickerComponent {

  date: {year: number, month: number};

  constructor() {
  }

  selectToday() {
    //this.model = this.calendar.getToday();
  }
}

