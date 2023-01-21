import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { AddEmployeeDTO } from './dto/employee.dto';
import { Department, Employee } from '@prisma/client';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('create')
  async addEmployee(@Body() employee: AddEmployeeDTO): Promise<Employee> {
    return await this.employeeService.addEmployee(employee);
  }

  @Get('staff')
  async getStaff(): Promise<Employee[]> {
    return await this.employeeService.staff({});
  }

  @Get('staff/:departmentId')
  async getDepartmentStaff(
    @Param('departmentId') departmentId: string,
  ): Promise<Employee[]> {
    return await this.employeeService.departmentStaff({
      departmentId: Number(departmentId),
    });
  }

  @Get('filteredByName/:order')
  async getFilteredStaffDesc(
    @Param('order') order: 'desc' | 'asc',
  ): Promise<Employee[]> {
    return this.employeeService.staff({
      orderBy: {
        name: order,
      },
    });
  }

  @Get(':id')
  async getEmployee(@Param('id') id: string) {
    return await this.employeeService.employee({ id: Number(id) });
  }
}
