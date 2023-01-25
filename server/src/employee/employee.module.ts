import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Module({
  imports: [],
  providers: [EmployeeService],
})
export class EmployeeModule {}
