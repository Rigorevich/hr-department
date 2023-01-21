"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class DepartmentNotFoundException extends common_1.NotFoundException {
    constructor(departmentId) {
        super(`Department with id ${departmentId} not found`);
    }
}
exports.default = DepartmentNotFoundException;
//# sourceMappingURL=not-found.exception.js.map