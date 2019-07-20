import { Vacation } from './vacation';


export class VacationList {
    name: string;
    vacation: Vacation[];
}

export class VacationResponse {
    month: string;
    vacationList: VacationList;
}