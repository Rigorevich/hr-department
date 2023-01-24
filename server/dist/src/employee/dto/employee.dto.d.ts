export declare class AddEmployeeDTO {
    name: string;
    surname: string;
    patronymic: string;
    position: string;
    departmentId: number;
    startDate?: Date;
}
export declare class UpdateEmployeeDTO {
    name?: string;
    surname?: string;
    patronymic?: string;
    position?: string;
    departmentId?: number;
}
