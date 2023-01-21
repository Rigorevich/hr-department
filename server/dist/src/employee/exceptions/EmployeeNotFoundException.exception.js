"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class EmployeeNotFoundException extends common_1.NotFoundException {
    constructor(employeeId) {
        super(`Employee with id ${employeeId} not found`);
    }
}
exports.default = EmployeeNotFoundException;
//# sourceMappingURL=EmployeeNotFoundException.exception.js.map