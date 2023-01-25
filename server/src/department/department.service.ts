import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Department, Prisma } from '@prisma/client';
import { CreateDepartmentDTO, AssignBossDTO } from './dto/department.dto';

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

  async departments(
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.DepartmentWhereUniqueInput;
      where?: Prisma.DepartmentWhereInput;
      orderBy?: Prisma.DepartmentOrderByWithRelationInput;
    } = {},
  ): Promise<Department[]> {
    return await this.prismaService.department.findMany({ ...params });
  }

  async addDepartment(department: CreateDepartmentDTO): Promise<Department> {
    return await this.prismaService.department.create({
      data: department,
    });
  }

  async assignBoss(body: AssignBossDTO): Promise<Department> {
    return this.prismaService.department.update({
      data: {
        bossId: body.employeeId,
      },
      where: {
        id: body.departmentId,
      },
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
