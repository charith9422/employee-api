import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Employees Module')
@Controller('employee')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  async create(@Res() response, @Body() createEmployeeDto: CreateEmployeeDto) {
    try {
      const newEmployee = await this.employeesService.create(createEmployeeDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Employee has been created successfully',
        newEmployee,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Employee not created!',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async findAll(@Res() response) {
    try {
      const employeeData = await this.employeesService.findAll();
      return response.status(HttpStatus.OK).json({
        message: 'All employee data found successfully',
        employeeData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Put('/:id')
  async update(
    @Res() response,
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    try {
      const employee = await this.employeesService.update(
        id,
        updateEmployeeDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Employee has been successfully updated',
        employee,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Delete(':id')
  async remove(@Res() response, @Param('id') id: string) {
    try {
      const deletedEmployee = await this.employeesService.remove(id);
      return response.status(HttpStatus.OK).json({
        message: `Employee #${id} deleted successfully`,
        deletedEmployee,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }
}
