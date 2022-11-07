import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsPhoneNumber,
  IsEnum,
} from 'class-validator';
import { GenderType } from '../entities/employee.entity';

export class CreateEmployeeDto {
  @IsString()
  @MinLength(6)
  @MaxLength(10)
  @IsNotEmpty()
  @ApiProperty()
  first_name: string;

  @IsString()
  @MinLength(6)
  @MaxLength(10)
  @IsNotEmpty()
  @ApiProperty()
  last_name: string;

  @IsEmail()
  @ApiProperty({ required: false })
  email: string;

  @IsPhoneNumber('LK')
  @ApiProperty({ required: false })
  number: string;

  @IsEnum(GenderType)
  @ApiProperty({ required: false })
  gender: string;
}
