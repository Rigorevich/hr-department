import { PrismaService } from '../../prisma/prisma.service';
import { Employee, Prisma } from '@prisma/client';
import { AddEmployeeDTO } from './dto/employee.dto';
export declare class EmployeeService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    staff(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.EmployeeWhereUniqueInput;
        where?: Prisma.EmployeeWhereInput;
        orderBy?: Prisma.EmployeeOrderByWithRelationInput;
    }): Promise<Employee[]>;
    departmentStaff(where?: Prisma.EmployeeWhereInput): Promise<Employee[]>;
    employee(where: Prisma.EmployeeWhereUniqueInput): Promise<Employee | null>;
    addEmployee(employee: AddEmployeeDTO): Promise<Employee>;
}
