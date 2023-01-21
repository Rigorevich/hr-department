"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function startServer() {
    try {
        const PORT = process.env.PORT || 7000;
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
        await app.listen(PORT);
    }
    catch (e) {
        console.log(e);
    }
}
startServer();
//# sourceMappingURL=main.js.map