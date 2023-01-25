import { PrismaService } from '../../prisma/prisma.service';
import { Employee, Prisma } from '@prisma/client';
import { AddEmployeeToDepartmentDTO, CreateEmployeeDTO } from './dto/employee.dto';
export declare class EmployeeService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    staff(params?: {
        skip?: number;
        take?: number;
        cursor?: Prisma.EmployeeWhereUniqueInput;
        where?: Prisma.EmployeeWhereInput;
        orderBy?: Prisma.EmployeeOrderByWithRelationInput;
    }): Promise<Employee[]>;
    employee(where: Prisma.EmployeeWhereUniqueInput): Promise<Employee | null>;
    addEmployeeToDepartment(body: AddEmployeeToDepartmentDTO): Promise<Employee>;
    deleteEmployee(where: Prisma.EmployeeWhereUniqueInput): Promise<Employee | null>;
    addEmployee(employee: CreateEmployeeDTO): Promise<Employee>;
}
