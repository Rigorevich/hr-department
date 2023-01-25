import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';

@Module({
  imports: [],
  providers: [DepartmentService],
})
export class DepartmentModule {}
