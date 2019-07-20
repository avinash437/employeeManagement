import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.css']
})
export class CalendarCellComponent implements OnInit {
  daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  sprintDays = [];
  @Input() planning: string;
  @Input() sprintDay: string;

  constructor() { }

  ngOnInit() {

    for (let i = 0; i < 14; i++) {
      this.sprintDays[i] = i;
    }
  }
  getDay(planning, days) {
    var date = new Date(planning.sprintStartDate);
    date.setDate(date.getDate() + parseInt(days));
    return (this.daysInWeek[date.getDay()]).substring(0, 3);
  }
  checkHaveVacations(planning,sprintDay) {
    var currentDate = new Date(planning.sprintStartDate);
    currentDate.setDate(currentDate.getDate() + parseInt(sprintDay));
    let response = 'novacation';
    if (planning.vacationlist.length >0 ) {
        planning.vacationlist.forEach(vacation => {
          let fromDate = new Date(vacation.from);
          let toDate = new Date(vacation.to);
          let checkDate = new Date(currentDate);
          if(
            this.compareDate(fromDate,checkDate) || this.compareDate(toDate,checkDate) || 
             (checkDate >= fromDate && checkDate <= toDate)){
            response = 'vacation';
          }
      });
      
    }
    return response
    
  }

  getNames(planning,sprintDay) {
    var currentDate = new Date(planning.sprintStartDate);
    currentDate.setDate(currentDate.getDate() + parseInt(sprintDay));
    let response = '';
    if (planning.vacationlist.length >0 ) {
        planning.vacationlist.forEach(vacation => {
          let fromDate = new Date(vacation.from);
          let toDate = new Date(vacation.to);
          let checkDate = new Date(currentDate);
          if(
            this.compareDate(fromDate,checkDate) || this.compareDate(toDate,checkDate) || 
             (checkDate >= fromDate && checkDate <= toDate)){
              response += vacation.name + ',';
          }
      });
      
    }
    return response.substring(0,response.lastIndexOf(','));
    
  }
  compareDate(date1, date2){
    if(date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getYear() == date2.getYear()){
      return true;
    }
    return false;
  }
  getDate(planning, days) {
    var date = new Date(planning.sprintStartDate);
    date.setDate(date.getDate() + parseInt(days));
    return date.getDate();
  }
  getEnrichedData(planning, days) {
    var date = new Date(planning.sprintStartDate);
    date.setDate(date.getDate() + parseInt(days));
    return date.getDate() + ',' + (this.daysInWeek[date.getDay()]).substring(0, 3);
  }
}
