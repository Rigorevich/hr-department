import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { DepartmentModule } from './department/department.module';
import { EmployeeModule } from './employee/employee.module';
import { AppController } from './app.controller';
import { DepartmentService } from './department/department.service';
import { EmployeeService } from './employee/employee.service';

@Module({
  imports: [PrismaModule, DepartmentModule, EmployeeModule],
  controllers: [AppController],
  providers: [DepartmentService, EmployeeService],
})
export class AppModule {}
