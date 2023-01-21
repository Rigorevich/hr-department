import { NotFoundException } from '@nestjs/common';

class DepartmentNotFoundException extends NotFoundException {
  constructor(departmentId: number) {
    super(`Department with id ${departmentId} not found`);
  }
}

export default DepartmentNotFoundException;
