import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsDateString,
  IsNumber,
} from 'class-validator';

export class AddDepartmentDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  bossId: number;

  createdAt: Date;
}

export class AddEmployeeAtDepartmentDTO {
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

  departmentId: number;

  startDate: Date;
}
