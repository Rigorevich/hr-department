import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsDateString,
  IsNumber,
} from 'class-validator';

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

  startDate: Date;
}
