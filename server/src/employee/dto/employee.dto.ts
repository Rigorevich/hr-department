import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEmployeeDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  surname: string;

  @IsString()
  @IsNotEmpty()
  patronymic: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  departmentId?: number;

  startDate?: Date;
}

export class AddEmployeeToDepartmentDTO {
  @IsNumber()
  @IsNotEmpty()
  employeeId: number;

  @IsNumber()
  @IsNotEmpty()
  departmentId: number;
}
