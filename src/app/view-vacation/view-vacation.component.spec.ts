import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVacationComponent } from './view-vacation.component';

describe('ViewVacationComponent', () => {
  let component: ViewVacationComponent;
  let fixture: ComponentFixture<ViewVacationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVacationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
