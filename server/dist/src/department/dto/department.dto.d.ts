export declare class CreateDepartmentDTO {
    name: string;
    description: string;
    bossId?: number;
    createdAt?: Date;
}
export declare class AssignBossDTO {
    departmentId: number;
    employeeId: number;
}
