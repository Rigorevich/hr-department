export declare class CreateEmployeeDTO {
    name: string;
    surname: string;
    patronymic: string;
    position: string;
    departmentId?: number;
    startDate?: Date;
}
export declare class AddEmployeeToDepartmentDTO {
    employeeId: number;
    departmentId: number;
}
