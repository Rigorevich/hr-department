export interface IEmployee {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  position: string;
  startDate: Date;
  departmentId: number;
}

export interface IDepartment {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  bossId: number;
  staff: IEmployee[];
}
