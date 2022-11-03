import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee, EmployeeDocument } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  //create employee
  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const createEmployee = new this.employeeModel(createEmployeeDto);
    return createEmployee.save();
  }

  //get all employees
  async findAll(): Promise<Employee[]> {
    const allEmployees = await this.employeeModel.find();
    if (!allEmployees || allEmployees.length == 0) {
      throw new NotFoundException('Employee data not found!');
    }
    return allEmployees;
  }

  //update employee
  async update(
    id: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    const employee = await this.employeeModel.findByIdAndUpdate(
      id,
      updateEmployeeDto,
      {
        new: true,
      },
    );
    if (!employee) {
      throw new NotFoundException();
    }
    return employee;
  }

  //delete employee
  async remove(id: string) {
    const deletedEmployee = await this.employeeModel.findByIdAndDelete(id);
    if (!deletedEmployee) {
      throw new NotFoundException(`Student #${id} not found`);
    }
    return deletedEmployee;
  }
}
