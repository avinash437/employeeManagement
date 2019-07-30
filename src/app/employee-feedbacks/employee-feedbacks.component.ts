import { Component, OnInit } from '@angular/core';
import { employeeModel } from '../view-employees/employeeModel';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { employeeFeedback } from '../models/EmployeeFeedback';
import { employeeFeedbackModel } from './employeeFeedbackModel';
import { Router } from "@angular/router";

@Component({
  selector: 'app-employee-feedbacks',
  templateUrl: './employee-feedbacks.component.html',
  styleUrls: ['./employee-feedbacks.component.css']
})
export class EmployeeFeedbacksComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, public employeeModel: employeeModel,
    public employeeFeedbackModel: employeeFeedbackModel,private router: Router) { }
  registerForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.employeeModel.getEmployees('/employees');
    this.registerForm = this.formBuilder.group({
     from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      feedback: ['', [Validators.required]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    var element = document.getElementById('selectedEmployee') as HTMLSelectElement;
    const feedback = new employeeFeedback();
    feedback.username = element.options[element.selectedIndex].value;
    feedback.from = this.registerForm.value.from;
    feedback.to = this.registerForm.value.to;
    feedback.feedback = this.registerForm.value.feedback;
    this.employeeFeedbackModel.addFeedback(feedback);
    this.router.navigateByUrl('/viewVacation');

  }
}
