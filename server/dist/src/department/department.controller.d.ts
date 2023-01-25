import { DepartmentService } from './department.service';
import { CreateDepartmentDTO } from './dto/department.dto';
import { Department } from '@prisma/client';
export declare class DepartmentController {
    private readonly departmentService;
    constructor(departmentService: DepartmentService);
    createDepartment(department: CreateDepartmentDTO): Promise<Department>;
    updateDepartment(id: string, department: {
        name?: string;
        description?: string;
        createdAt?: Date;
        bossId?: number;
    }): Promise<Department>;
    deleteDepartment(id: string): Promise<Department>;
    getFilteredDepartments(searchString: string): Promise<Department[]>;
}
