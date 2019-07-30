import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";
import { employeeNote } from '../models/employeeNote';
import { Employee } from '../models/employee';
import { employeeNotesModel } from './employeeNotesModel';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { employeeModel } from '../view-employees/employeeModel';

@Component({
  selector: 'app-employee-notes',
  templateUrl: './employee-notes.component.html',
  styleUrls: ['./employee-notes.component.css']
})
export class EmployeeNotesComponent implements OnInit {

  namerequired = false;
  registerForm: FormGroup;
  submitted = false;
  employeesList : Employee[];
  selectedEmployee: Employee;


  constructor(private formBuilder: FormBuilder, private employeeNotesModel:
    employeeNotesModel, private router: Router, public employeeModel: employeeModel) { }
  
  employeeNote: employeeNote;
  ngOnInit() {
    var that =this;
    this.employeeModel.getEmployees('/employees');
    this.registerForm = this.formBuilder.group({
     note: ['', [Validators.required]],
      time: ['', [Validators.required]]
    }/*, {
        validator: MustMatch('password', 'confirmPassword')
      }*/);
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    var element = document.getElementById('selectedEmployee') as HTMLSelectElement;
    var radioButton = document.getElementById('type2') as HTMLInputElement;
    let noteType = 'positive';
    if(radioButton.checked){
      noteType = 'improvement';
    }
    this.submitted = true;
    if(element.options[element.selectedIndex].value == ''){
      this.namerequired = true;
    }
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    const note = new employeeNote();
    note.username = element.options[element.selectedIndex].value;
    note.note = this.registerForm.value.note;
    note.time = this.registerForm.value.time;
    note.type = noteType;
    this.employeeNotesModel.postNotes('/notes/add', note, 'Failed to add notes ..!!');
    //this.router.navigateByUrl('/dashboard');

  }

}