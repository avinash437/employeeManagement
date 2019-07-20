import { Vacation } from './vacation';
import { Employee } from './employee';

export class Planning {
    capacity: string;
    sprintStartDate: string;
    sprintEndDate: string;
    sprintNumber: string;
    employeeList: Employee[];
    vacationlist: Vacation[];
}