import { NotFoundException } from '@nestjs/common';
declare class EmployeeNotFoundException extends NotFoundException {
    constructor(employeeId: number);
}
export default EmployeeNotFoundException;
