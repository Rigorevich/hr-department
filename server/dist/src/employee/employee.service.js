"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const EmployeeNotFoundException_exception_1 = require("./exceptions/EmployeeNotFoundException.exception");
let EmployeeService = class EmployeeService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async staff(params = {}) {
        return await this.prismaService.employee.findMany(Object.assign({}, params));
    }
    async employee(where) {
        const employee = await this.prismaService.employee.findUnique({
            where,
        });
        if (!employee) {
            throw new EmployeeNotFoundException_exception_1.default(where.id);
        }
        return employee;
    }
    async addEmployeeToDepartment(body) {
        return this.prismaService.employee.update({
            where: {
                id: body.employeeId,
            },
            data: {
                departmentId: body.departmentId,
            },
        });
    }
    async deleteEmployee(where) {
        const employee = await this.prismaService.employee.delete({ where });
        if (!employee) {
            throw new EmployeeNotFoundException_exception_1.default(where.id);
        }
        return employee;
    }
    async addEmployee(employee) {
        return await this.prismaService.employee.create({
            data: employee,
        });
    }
};
EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map