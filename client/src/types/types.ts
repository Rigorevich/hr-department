export interface IEmployee {
  name: string;
  surname: string;
  patronymic: string;
  position: string;
  startDate: Date;
  departmentId: number;
}

export interface IDepartment {
  name: string;
  description: string;
  createdAt: Date;
  staff: IEmployee[];
}
