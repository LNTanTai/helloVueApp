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
/* eslint-disable @typescript-eslint/no-unused-vars */
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base/base.entity");
/**
 * A Mission.
 */
let Mission = class Mission extends base_entity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column({ name: 'name' }),
    __metadata("design:type", String)
], Mission.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ name: 'description', nullable: true }),
    __metadata("design:type", String)
], Mission.prototype, "description", void 0);
Mission = __decorate([
    typeorm_1.Entity('mission')
], Mission);
exports.Mission = Mission;
//# sourceMappingURL=mission.entity.js.map