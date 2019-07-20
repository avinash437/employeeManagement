import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient,HttpHeaders } from "@angular/common/http";
import Teamlist from '../mocks/teamlist.json';
import { Employee } from '../models/employee';
import { employeeModel } from './employeeModel';

import { DataStateStore } from '../models/DataStateStore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

 
  constructor(private http: HttpClient, public dataStateStore: DataStateStore, private router: Router,
    private employeeModel: employeeModel ) { }
employee: Employee[];
selectedEmployee: Employee;

ngOnInit() {
    this.employeeModel.getEmployees('/employees');
}

getTeamInformation(): void {

}
ngOnDestroy() {
    //this.dataStateStore.employee = this.selectedEmployee;
}
updateEmployee(event, employee1): void {
    console.log(employee1);
    this.selectedEmployee = employee1;
    this.dataStateStore.employee = this.selectedEmployee;
    this.router.navigateByUrl('/updateEmployee', { state: this.selectedEmployee });
}

}
