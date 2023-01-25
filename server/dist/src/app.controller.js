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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const department_service_1 = require("./department/department.service");
const employee_service_1 = require("./employee/employee.service");
const department_dto_1 = require("./department/dto/department.dto");
const employee_dto_1 = require("./employee/dto/employee.dto");
let AppController = class AppController {
    constructor(departmentService, employeeService) {
        this.departmentService = departmentService;
        this.employeeService = employeeService;
    }
    async getDepartmentById(id) {
        return await this.departmentService.department({ id: Number(id) });
    }
    async getDepartments() {
        return await this.departmentService.departments();
    }
    async getEmployee(id) {
        return await this.employeeService.employee({ id: Number(id) });
    }
    async getStaff() {
        return await this.employeeService.staff();
    }
    async getDepartmentStaff(departmentId) {
        return await this.employeeService.staff({
            where: {
                departmentId: Number(departmentId),
            },
        });
    }
    async createDepartment(department) {
        return await this.departmentService.addDepartment(department);
    }
    async createEmployee(employee) {
        return await this.employeeService.addEmployee(employee);
    }
    async deleteDepartment(id) {
        return await this.departmentService.deleteDepartment({ id: Number(id) });
    }
    async deleteEmployee(id) {
        return await this.employeeService.deleteEmployee({ id: Number(id) });
    }
    async addEmployeeToDepartment(body) {
        return await this.employeeService.addEmployeeToDepartment(body);
    }
    async assignBoss(body) {
        const employeeById = await this.employeeService.employee({
            id: body.employeeId,
        });
        if (employeeById.departmentId !== body.departmentId) {
            await this.employeeService.addEmployeeToDepartment(body);
        }
        return await this.departmentService.assignBoss(body);
    }
    async getDashboard() {
        return await this.departmentService.departments({
            take: 5,
            orderBy: {
                staff: {
                    _count: 'desc',
                },
            },
        });
    }
};
__decorate([
    (0, common_1.Get)('department/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getDepartmentById", null);
__decorate([
    (0, common_1.Get)('department'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getDepartments", null);
__decorate([
    (0, common_1.Get)('employee/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getEmployee", null);
__decorate([
    (0, common_1.Get)('employee'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getStaff", null);
__decorate([
    (0, common_1.Get)('department-staff/:departmentId'),
    __param(0, (0, common_1.Param)('departmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getDepartmentStaff", null);
__decorate([
    (0, common_1.Post)('department'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [department_dto_1.CreateDepartmentDTO]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createDepartment", null);
__decorate([
    (0, common_1.Post)('employee'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [employee_dto_1.CreateEmployeeDTO]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createEmployee", null);
__decorate([
    (0, common_1.Delete)('department/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteDepartment", null);
__decorate([
    (0, common_1.Delete)('employee/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteEmployee", null);
__decorate([
    (0, common_1.Put)('add-employee'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [employee_dto_1.AddEmployeeToDepartmentDTO]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "addEmployeeToDepartment", null);
__decorate([
    (0, common_1.Put)('assign-boss'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [department_dto_1.AssignBossDTO]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "assignBoss", null);
__decorate([
    (0, common_1.Get)('dashboard'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getDashboard", null);
AppController = __decorate([
    (0, common_1.Controller)(''),
    __metadata("design:paramtypes", [department_service_1.DepartmentService,
        employee_service_1.EmployeeService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map