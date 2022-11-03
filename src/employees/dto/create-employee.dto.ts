export enum Gender {
  Male = 'M',
  Female = 'F',
}
export class CreateEmployeeDto {
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  gender: Gender;
}
