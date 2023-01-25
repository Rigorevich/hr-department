import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DepartmentService } from './department/department.service';
import { EmployeeService } from './employee/employee.service';
import { Department, Employee } from '@prisma/client';
import {
  CreateDepartmentDTO,
  AssignBossDTO,
} from './department/dto/department.dto';
import {
  CreateEmployeeDTO,
  AddEmployeeToDepartmentDTO,
} from './employee/dto/employee.dto';

@Controller('')
export class AppController {
  constructor(
    private readonly departmentService: DepartmentService,
    private readonly employeeService: EmployeeService,
  ) {}

  @Get('department/:id')
  async getDepartmentById(@Param('id') id: string): Promise<Department | null> {
    return await this.departmentService.department({ id: Number(id) });
  }

  @Get('department')
  async getDepartments(): Promise<Department[]> {
    return await this.departmentService.departments();
  }

  @Get('employee/:id')
  async getEmployee(@Param('id') id: string): Promise<Employee | null> {
    return await this.employeeService.employee({ id: Number(id) });
  }

  @Get('employee')
  async getStaff(): Promise<Employee[]> {
    return await this.employeeService.staff();
  }

  @Get('department-staff/:departmentId')
  async getDepartmentStaff(
    @Param('departmentId') departmentId: string,
  ): Promise<Employee[]> {
    return await this.employeeService.staff({
      where: {
        departmentId: Number(departmentId),
      },
    });
  }

  @Post('department')
  async createDepartment(@Body() department: CreateDepartmentDTO) {
    return await this.departmentService.addDepartment(department);
  }

  @Post('employee')
  async createEmployee(@Body() employee: CreateEmployeeDTO) {
    return await this.employeeService.addEmployee(employee);
  }

  @Delete('department/:id')
  async deleteDepartment(@Param('id') id: string): Promise<Department | null> {
    return await this.departmentService.deleteDepartment({ id: Number(id) });
  }

  @Delete('employee/:id')
  async deleteEmployee(@Param('id') id: string): Promise<Employee | null> {
    return await this.employeeService.deleteEmployee({ id: Number(id) });
  }

  @Put('add-employee')
  async addEmployeeToDepartment(@Body() body: AddEmployeeToDepartmentDTO) {
    return await this.employeeService.addEmployeeToDepartment(body);
  }

  @Put('assign-boss')
  async assignBoss(@Body() body: AssignBossDTO) {
    const employeeById = await this.employeeService.employee({
      id: body.employeeId,
    });
    if (employeeById.departmentId !== body.departmentId) {
      await this.employeeService.addEmployeeToDepartment(body);
    }
    return await this.departmentService.assignBoss(body);
  }

  @Get('dashboard')
  async getDashboard(): Promise<Department[]> {
    return await this.departmentService.departments({
      take: 5,
      orderBy: {
        staff: {
          _count: 'desc',
        },
      },
    });
  }
}
