import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class AddEmployeeDTO {
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

  startDate?: Date;
}

export class UpdateEmployeeDTO {
  name?: string;
  surname?: string;
  patronymic?: string;
  position?: string;
  departmentId?: number;
}
