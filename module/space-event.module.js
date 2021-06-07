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
const space_event_controller_1 = require("../web/rest/space-event.controller");
const space_event_repository_1 = require("../repository/space-event.repository");
const space_event_service_1 = require("../service/space-event.service");
let SpaceEventModule = class SpaceEventModule {
};
SpaceEventModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([space_event_repository_1.SpaceEventRepository])],
        controllers: [space_event_controller_1.SpaceEventController],
        providers: [space_event_service_1.SpaceEventService],
        exports: [space_event_service_1.SpaceEventService],
    })
], SpaceEventModule);
exports.SpaceEventModule = SpaceEventModule;
//# sourceMappingURL=space-event.module.js.map