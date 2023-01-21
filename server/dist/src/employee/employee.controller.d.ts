import { EmployeeService } from './employee.service';
import { AddEmployeeDTO } from './dto/employee.dto';
import { Employee } from '@prisma/client';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    addEmployee(employee: AddEmployeeDTO): Promise<Employee>;
    getStaff(): Promise<Employee[]>;
    getDepartmentStaff(departmentId: string): Promise<Employee[]>;
    getFilteredStaffDesc(order: 'desc' | 'asc'): Promise<Employee[]>;
    getEmployee(id: string): Promise<Employee>;
}
