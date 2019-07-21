import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { VacationsComponent } from './vacations/vacations.component';
import { PlanningComponent } from './planning/planning.component';
import { AddVacationComponent } from './add-vacation/add-vacation.component';
import { ViewVacationComponent } from './view-vacation/view-vacation.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeeNotesComponent } from './employee-notes/employee-notes.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './frameworks/authentication/user.service';
import { LoginService } from './frameworks/authentication/login.service';
import { LeadComponent } from './lead/lead.component';
import { EmployeesComponent } from './employees/employees.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { UpdateEmployeesComponent } from './update-employees/update-employees.component';
import {ReportsComponent} from './reports/reports.component';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, data: {animation: 'contact'}, canActivate:[LoginService,UserService]},
    { path: 'vacations', component: VacationsComponent, canActivate:[LoginService]},
    { path: 'planning', component: PlanningComponent, canActivate:[LoginService,UserService]},
    { path: 'addVacation', component: AddVacationComponent, canActivate:[LoginService,UserService]},
    { path: 'viewVacation', component: ViewVacationComponent, canActivate:[LoginService,UserService]},
    { path: 'profile', component: ProfileComponent, canActivate:[LoginService,UserService]},
    { path: 'notes', component: EmployeeNotesComponent, canActivate:[LoginService,UserService]},
    { path: 'leads', component: LeadComponent, canActivate:[LoginService,UserService]},
    { path: 'employees', component: EmployeesComponent, canActivate:[LoginService,UserService]},
    { path: 'addEmployee', component: AddEmployeesComponent, canActivate:[LoginService,UserService]},
    { path: 'viewEmployee', component: ViewEmployeesComponent, canActivate:[LoginService,UserService]},
    { path: 'updateEmployee', component: UpdateEmployeesComponent, canActivate:[LoginService,UserService]},
    { path: 'reports', component: ReportsComponent, canActivate:[LoginService,UserService]},
    { path: 'login', component: LoginComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
