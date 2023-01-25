import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsDateString,
  IsNumber,
} from 'class-validator';

export class CreateDepartmentDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  bossId?: number;

  createdAt?: Date;
}

export class AssignBossDTO {
  @IsNumber()
  @IsNotEmpty()
  departmentId: number;

  @IsNumber()
  @IsNotEmpty()
  employeeId: number;
}
