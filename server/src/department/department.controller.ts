import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { AddDepartmentDTO } from './dto/department.dto';
import { Department } from '@prisma/client';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post('')
  async addDepartment(
    @Body() department: AddDepartmentDTO,
  ): Promise<Department> {
    return await this.departmentService.addDepartment(department);
  }

  @Put('update/:id')
  async updateDepartment(
    @Param('id') id: string,
    @Body()
    department: { name?: string; description?: string; createdAt?: Date },
  ): Promise<Department> {
    return this.departmentService.updateDepartment({
      where: { id: Number(id) },
      data: { ...department },
    });
  }

  @Delete('delete/:id')
  async deleteDepartment(@Param('id') id: string): Promise<Department> {
    return await this.departmentService.deleteDepartment({ id: Number(id) });
  }

  @Get(':id')
  async getDepartmentById(@Param('id') id: string): Promise<Department> {
    return await this.departmentService.department({ id: Number(id) });
  }

  @Get('')
  async getAllDepartments(): Promise<Department[]> {
    return await this.departmentService.departments({});
  }

  @Get('filtered/:searchString')
  async getFilteredDepartments(
    @Param('searchString') searchString: string,
  ): Promise<Department[]> {
    return this.departmentService.departments({
      where: {
        OR: [
          {
            name: { contains: searchString },
          },
          {
            description: { contains: searchString },
          },
        ],
      },
    });
  }
}
