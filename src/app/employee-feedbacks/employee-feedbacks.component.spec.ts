import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFeedbacksComponent } from './employee-feedbacks.component';

describe('EmployeeFeedbacksComponent', () => {
  let component: EmployeeFeedbacksComponent;
  let fixture: ComponentFixture<EmployeeFeedbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeFeedbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
