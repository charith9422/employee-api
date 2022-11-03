import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsMongoId, IsNotEmpty } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type EmployeeDocument = HydratedDocument<Employee>;

export enum GenderType {
  Male = 'M',
  Female = 'F',
}
@Schema()
export class Employee {
  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop()
  email: string;

  @Prop()
  number: string;

  @Prop()
  gender: string;

  @Prop()
  photo: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
