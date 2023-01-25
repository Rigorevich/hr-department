import { PrismaService } from '../../prisma/prisma.service';
import { Department, Prisma } from '@prisma/client';
import { CreateDepartmentDTO, AssignBossDTO } from './dto/department.dto';
export declare class DepartmentService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    department(where: Prisma.DepartmentWhereUniqueInput): Promise<Department | null>;
    departments(params?: {
        skip?: number;
        take?: number;
        cursor?: Prisma.DepartmentWhereUniqueInput;
        where?: Prisma.DepartmentWhereInput;
        orderBy?: Prisma.DepartmentOrderByWithRelationInput;
    }): Promise<Department[]>;
    addDepartment(department: CreateDepartmentDTO): Promise<Department>;
    assignBoss(body: AssignBossDTO): Promise<Department>;
    deleteDepartment(where: Prisma.DepartmentWhereUniqueInput): Promise<Department | null>;
}
