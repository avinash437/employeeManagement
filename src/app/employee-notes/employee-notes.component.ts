import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient,HttpHeaders } from "@angular/common/http";
import { employeeNote } from '../models/employeeNote';
import { Employee } from '../models/employee';
import { employeeNotesModel } from './employeeNotesModel';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { MustMatch } from './must-match.validator';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-employee-notes',
  templateUrl: './employee-notes.component.html',
  styleUrls: ['./employee-notes.component.css']
})
export class EmployeeNotesComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
  
  
    constructor(private formBuilder: FormBuilder,private employeeNotesModel: employeeNotesModel, private router: Router) { }
    employeeNote: employeeNote;
    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
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
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      const note = new employeeNote();
      note.username = this.registerForm.value.name;
      note.note = this.registerForm.value.note;
      note.time = this.registerForm.value.time;
      this.employeeNotesModel.postNotes('/employee/add/notes',note, 'Failed to add notes ..!!');
      this.router.navigateByUrl('/dashboard');  
     
    }
    
  }