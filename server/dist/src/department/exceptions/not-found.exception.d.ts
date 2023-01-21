import { NotFoundException } from '@nestjs/common';
declare class DepartmentNotFoundException extends NotFoundException {
    constructor(departmentId: number);
}
export default DepartmentNotFoundException;
