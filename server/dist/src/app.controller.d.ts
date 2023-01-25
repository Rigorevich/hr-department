import { DepartmentService } from './department/department.service';
import { EmployeeService } from './employee/employee.service';
import { Department, Employee } from '@prisma/client';
import { CreateDepartmentDTO, AssignBossDTO } from './department/dto/department.dto';
import { CreateEmployeeDTO, AddEmployeeToDepartmentDTO } from './employee/dto/employee.dto';
export declare class AppController {
    private readonly departmentService;
    private readonly employeeService;
    constructor(departmentService: DepartmentService, employeeService: EmployeeService);
    getDepartmentById(id: string): Promise<Department | null>;
    getDepartments(): Promise<Department[]>;
    getEmployee(id: string): Promise<Employee | null>;
    getStaff(): Promise<Employee[]>;
    getDepartmentStaff(departmentId: string): Promise<Employee[]>;
    createDepartment(department: CreateDepartmentDTO): Promise<Department>;
    createEmployee(employee: CreateEmployeeDTO): Promise<Employee>;
    deleteDepartment(id: string): Promise<Department | null>;
    deleteEmployee(id: string): Promise<Employee | null>;
    addEmployeeToDepartment(body: AddEmployeeToDepartmentDTO): Promise<Employee>;
    assignBoss(body: AssignBossDTO): Promise<Department>;
    getDashboard(): Promise<Department[]>;
}
