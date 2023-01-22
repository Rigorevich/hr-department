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

  @IsNumber()
  @IsNotEmpty()
  departmentId: number;

  startDate: Date;
}
