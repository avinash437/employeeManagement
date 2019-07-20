import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient,HttpHeaders } from "@angular/common/http";
import { addVacation } from '../models/addVacation';
import { Employee } from '../models/employee';
import { updateEmployeeModel } from '../update-employees/updateEmployeeModel';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router,ActivatedRoute } from "@angular/router";
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DataStateStore } from '../models/DataStateStore';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(private formBuilder: FormBuilder,private addVacationModel: updateEmployeeModel, 
        private router: Router,public dataStateStore: DataStateStore,public activatedRoute: ActivatedRoute) { }
      registerForm: FormGroup;
      submitted = false;
      employee: {
        username: '',
        name: '',
        project: '',
        manager: '',
        contact: '',
        experience: ''
      };
      ngOnInit() {
    
        this.employee = window.history.state;
        this.registerForm = this.formBuilder.group({
          name: [this.employee.name, Validators.required],
          project: [this.employee.project, [Validators.required]],
          manager: [this.employee.manager, [Validators.required]],
          experience: [this.employee.experience, [Validators.required]],
          contact: [this.employee.contact, [Validators.required]]
        });
        
        console.log(this.employee);
      }
    
      get f() {
        return this.registerForm.controls; 
      }
      onSubmit() {
        this.submitted = true;
    
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log(this.registerForm);
        const employee = new Employee();
        employee.name = this.registerForm.value.name;
        employee.project = this.registerForm.value.project;
        employee.manager = this.registerForm.value.manager;
        employee.experience = this.registerForm.value.experience;
        employee.contact = this.registerForm.value.contact;
        employee.username = this.employee.username;
    
        this.addVacationModel.addEmployeeVacations('/employee/update',employee, 'Failed to add vacation');
        this.router.navigateByUrl('/employees');  
       
      }
}
