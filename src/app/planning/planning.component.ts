import { Component, OnInit } from '@angular/core';
import { planningModel } from './planningModel';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Vacation } from '../models/vacation';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        display: 'none'
      })),
      state('final', style({
        display: 'block'
      })),
      transition('initial=>final', animate('100ms')),
      transition('final=>initial', animate('100ms'))
    ]),
  ]
})
export class PlanningComponent implements OnInit {

  goals = ['My first life goal', 'I want to climb a mountain', 'Go ice skiing'];

  daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  sprintDays = [];
  constructor(private planningModel: planningModel) { }
  planning = <any>[];

  currentState = 'hidden';

  changeState(index) {
    let element = document.getElementById(index);
    element.className = element.className === 'hidden' ? 'visible' : 'hidden';
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  ngOnInit() {
    for (let i = 0; i < 14; i++) {
      this.sprintDays[i] = i;
    }
    let that = this;
    this.planningModel.getPlanning('/planning/capacity').subscribe(res => {
      that.planning = res;
    });
  }
  getDay(planning, days) {
    var date = new Date("08-May-2019");
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
