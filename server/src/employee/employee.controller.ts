import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { UpdateEmployeeDTO, AddEmployeeDTO } from './dto/employee.dto';
import { Employee } from '@prisma/client';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('')
  async addEmployee(@Body() employee: AddEmployeeDTO): Promise<Employee> {
    return await this.employeeService.addEmployee(employee);
  }

  @Delete('/:id')
  async deleteDepartment(@Param('id') id: string): Promise<Employee> {
    return await this.employeeService.deleteEmployee({ id: Number(id) });
  }

  @Get('')
  async getStaff(): Promise<Employee[]> {
    return await this.employeeService.staff({});
  }

  @Put(':id')
  async updateEmployee(
    @Param('id') id: string,
    @Body()
    employee: UpdateEmployeeDTO,
  ): Promise<Employee> {
    return await this.employeeService.updateEmployee({
      where: { id: Number(id) },
      data: { ...employee },
    });
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
