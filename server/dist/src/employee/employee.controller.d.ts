import { EmployeeService } from './employee.service';
import { UpdateEmployeeDTO, CreateEmployeeDTO } from './dto/employee.dto';
import { Employee } from '@prisma/client';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    addEmployee(employee: CreateEmployeeDTO): Promise<Employee>;
    deleteDepartment(id: string): Promise<Employee>;
    updateEmployee(id: string, employee: UpdateEmployeeDTO): Promise<Employee>;
    getDepartmentStaff(departmentId: string): Promise<Employee[]>;
    getFilteredStaffDesc(order: 'desc' | 'asc'): Promise<Employee[]>;
}
