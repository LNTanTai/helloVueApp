"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mission_controller_1 = require("../web/rest/mission.controller");
const mission_repository_1 = require("../repository/mission.repository");
const mission_service_1 = require("../service/mission.service");
let MissionModule = class MissionModule {
};
MissionModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([mission_repository_1.MissionRepository])],
        controllers: [mission_controller_1.MissionController],
        providers: [mission_service_1.MissionService],
        exports: [mission_service_1.MissionService],
    })
], MissionModule);
exports.MissionModule = MissionModule;
//# sourceMappingURL=mission.module.js.map