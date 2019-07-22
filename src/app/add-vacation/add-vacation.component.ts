import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";
import { addVacation } from '../models/addVacation';
import { Employee } from '../models/employee';
import { addVacationModel } from './addVacationModel';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { MustMatch } from './must-match.validator';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { UserService } from '../frameworks/authentication/user.service';
import { UserDetails } from '../models/UserDetails';
import { employeeModel } from '../view-employees/employeeModel';


@Component({
  selector: 'app-add-vacation',
  templateUrl: './add-vacation.component.html',
  styleUrls: ['./add-vacation.component.css']
})
export class AddVacationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  userDetails = this.userService.getUserDetails();

  constructor(private formBuilder: FormBuilder, private addVacationModel: addVacationModel,
    private router: Router, private userService: UserService, private employeeModel: employeeModel) { }
  addVacation: addVacation;
  ngOnInit() {
    this.employeeModel.getEmployees('/employees');

    this.registerForm = this.formBuilder.group({
      name: [this.userDetails.name, Validators.required],
      from: ['', [Validators.required]],
      reason: ['', [Validators.required]],
      to: ['', [Validators.required]]
    });


  }

  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    
    var element = document.getElementById('selectedEmployee') as HTMLSelectElement;
    
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm);
    const addVacation1 = new addVacation();
    addVacation1.username =  element.options[element.selectedIndex].value;
    addVacation1.from = this.registerForm.value.from;
    addVacation1.to = this.registerForm.value.to;
    addVacation1.name = this.registerForm.value.name;
    addVacation1.reason = this.registerForm.value.reason;

    this.addVacationModel.addEmployeeVacations('/employee/add/vacations', addVacation1, 'Failed to add vacation');
    this.router.navigateByUrl('/viewVacation');

  }

}
