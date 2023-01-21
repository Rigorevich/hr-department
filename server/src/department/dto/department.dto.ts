import { IsString, IsNotEmpty, IsDate, IsDateString } from 'class-validator';

export class AddDepartmentDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  createdAt: Date;
}
