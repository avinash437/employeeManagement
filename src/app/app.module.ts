import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { AnimationsModule } from '@angular/animations';


import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelloComponent } from './hello/hello.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { VacationsComponent } from './vacations/vacations.component';
import { PlanningComponent } from './planning/planning.component';
import { HttpClientModule } from '@angular/common/http';
import { AddVacationComponent } from './add-vacation/add-vacation.component';
import { ViewVacationComponent } from './view-vacation/view-vacation.component';
import { ProfileComponent } from './profile/profile.component';
import { DataStateStore } from './models/DataStateStore';
import { CalendarComponent } from './calendar/calendar.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './frameworks/utility/modal/modal.component';
import { EmployeeNotesComponent } from './employee-notes/employee-notes.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './frameworks/authentication/user.service';
import { LeadComponent } from './lead/lead.component';
import { EmployeesComponent } from './employees/employees.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { UpdateEmployeesComponent } from './update-employees/update-employees.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
//import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { CalendarCellComponent } from './calendar-cell/calendar-cell.component';
import { TodoComponent } from './todo/todo.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
       AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserAnimationsModule/*,
        MatAutocompleteModule,
        MatInputModule*/
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        MessagesComponent,
        VacationsComponent,
        PlanningComponent,
        AddVacationComponent,
        ViewVacationComponent,
        ProfileComponent,
        CalendarComponent,
        DatepickerComponent,
        HelloComponent,
        ModalComponent,
        EmployeeNotesComponent,
        LoginComponent,
        LeadComponent,
        EmployeesComponent,
        ViewEmployeesComponent,
        AddEmployeesComponent,
        UpdateEmployeesComponent,
        AutocompleteComponent,
        CalendarCellComponent,
        TodoComponent,
        ReportsComponent
    ],
    providers: [DataStateStore, UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }