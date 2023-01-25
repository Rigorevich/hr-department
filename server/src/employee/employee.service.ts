import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Employee, Prisma } from '@prisma/client';
import {
  AddEmployeeToDepartmentDTO,
  CreateEmployeeDTO,
} from './dto/employee.dto';

import EmployeeNotFoundException from './exceptions/EmployeeNotFoundException.exception';

@Injectable()
export class EmployeeService {
  constructor(private readonly prismaService: PrismaService) {}

  async staff(
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.EmployeeWhereUniqueInput;
      where?: Prisma.EmployeeWhereInput;
      orderBy?: Prisma.EmployeeOrderByWithRelationInput;
    } = {},
  ): Promise<Employee[]> {
    return await this.prismaService.employee.findMany({ ...params });
  }

  async employee(
    where: Prisma.EmployeeWhereUniqueInput,
  ): Promise<Employee | null> {
    const employee = await this.prismaService.employee.findUnique({
      where,
    });

    if (!employee) {
      throw new EmployeeNotFoundException(where.id);
    }

    return employee;
  }

  async addEmployeeToDepartment(
    body: AddEmployeeToDepartmentDTO,
  ): Promise<Employee> {
    return this.prismaService.employee.update({
      where: {
        id: body.employeeId,
      },
      data: {
        departmentId: body.departmentId,
      },
    });
  }

  async deleteEmployee(
    where: Prisma.EmployeeWhereUniqueInput,
  ): Promise<Employee | null> {
    const employee = await this.prismaService.employee.delete({ where });

    if (!employee) {
      throw new EmployeeNotFoundException(where.id);
    }

    return employee;
  }

  async addEmployee(employee: CreateEmployeeDTO): Promise<Employee> {
    return await this.prismaService.employee.create({
      data: employee,
    });
  }
}
