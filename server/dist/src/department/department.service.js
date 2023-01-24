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
exports.DepartmentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const DepartmentNotFoundException_exception_1 = require("./exceptions/DepartmentNotFoundException.exception");
let DepartmentService = class DepartmentService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async department(where) {
        const department = await this.prismaService.department.findUnique({
            where,
        });
        if (!department) {
            throw new DepartmentNotFoundException_exception_1.default(where.id);
        }
        return department;
    }
    async departments(params) {
        return await this.prismaService.department.findMany(Object.assign({}, params));
    }
    async addDepartment(department) {
        return await this.prismaService.department.create({
            data: department,
        });
    }
    async updateDepartment(params) {
        const { data, where } = params;
        return this.prismaService.department.update({
            data,
            where,
        });
    }
    async deleteDepartment(where) {
        const department = await this.prismaService.department.delete({ where });
        if (!department) {
            throw new DepartmentNotFoundException_exception_1.default(where.id);
        }
        return department;
    }
};
DepartmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DepartmentService);
exports.DepartmentService = DepartmentService;
//# sourceMappingURL=department.service.js.map