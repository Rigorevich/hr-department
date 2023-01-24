import { PrismaService } from '../../prisma/prisma.service';
import { Department, Prisma } from '@prisma/client';
import { AddDepartmentDTO } from './dto/department.dto';
export declare class DepartmentService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    department(where: Prisma.DepartmentWhereUniqueInput): Promise<Department | null>;
    departments(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.DepartmentWhereUniqueInput;
        where?: Prisma.DepartmentWhereInput;
        orderBy?: Prisma.DepartmentOrderByWithRelationInput;
    }): Promise<Department[]>;
    addDepartment(department: AddDepartmentDTO): Promise<Department>;
    updateDepartment(params: {
        where: Prisma.DepartmentWhereUniqueInput;
        data: Prisma.DepartmentUpdateInput;
    }): Promise<Department>;
    deleteDepartment(where: Prisma.DepartmentWhereUniqueInput): Promise<Department | null>;
}
