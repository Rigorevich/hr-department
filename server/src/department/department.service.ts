import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Department, Employee, Prisma } from '@prisma/client';
import {
  AddDepartmentDTO,
  AddEmployeeAtDepartmentDTO,
} from './dto/department.dto';

import DepartmentNotFoundException from './exceptions/DepartmentNotFoundException.exception';

@Injectable()
export class DepartmentService {
  constructor(private readonly prismaService: PrismaService) {}

  async department(
    where: Prisma.DepartmentWhereUniqueInput,
  ): Promise<Department | null> {
    const department = await this.prismaService.department.findUnique({
      where,
    });

    if (!department) {
      throw new DepartmentNotFoundException(where.id);
    }

    return department;
  }

  async departments(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DepartmentWhereUniqueInput;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput;
  }): Promise<Department[]> {
    return await this.prismaService.department.findMany({ ...params });
  }

  async addDepartment(department: AddDepartmentDTO): Promise<Department> {
    return await this.prismaService.department.create({
      data: department,
    });
  }

  async updateDepartment(params: {
    where: Prisma.DepartmentWhereUniqueInput;
    data: Prisma.DepartmentUpdateInput;
  }): Promise<Department> {
    const { data, where } = params;
    return this.prismaService.department.update({
      data,
      where,
    });
  }

  async deleteDepartment(
    where: Prisma.DepartmentWhereUniqueInput,
  ): Promise<Department | null> {
    const department = await this.prismaService.department.delete({ where });

    if (!department) {
      throw new DepartmentNotFoundException(where.id);
    }

    return department;
  }
}
