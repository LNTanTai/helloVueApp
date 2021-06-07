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
const mission_entity_1 = require("./mission.entity");
const space_event_type_1 = require("./enumeration/space-event-type");
/**
 * A SpaceEvent.
 */
let SpaceEvent = class SpaceEvent extends base_entity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column({ name: 'name' }),
    __metadata("design:type", String)
], SpaceEvent.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'date', name: 'date' }),
    __metadata("design:type", Object)
], SpaceEvent.prototype, "date", void 0);
__decorate([
    typeorm_1.Column({ type: 'blob', name: 'description' }),
    __metadata("design:type", Object)
], SpaceEvent.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: 'blob', name: 'photo' }),
    __metadata("design:type", Object)
], SpaceEvent.prototype, "photo", void 0);
__decorate([
    typeorm_1.Column({ name: 'photo_content_type' }),
    __metadata("design:type", String)
], SpaceEvent.prototype, "photoContentType", void 0);
__decorate([
    typeorm_1.Column({ type: 'simple-enum', name: 'type', enum: space_event_type_1.SpaceEventType }),
    __metadata("design:type", String)
], SpaceEvent.prototype, "type", void 0);
__decorate([
    typeorm_1.OneToOne(type => mission_entity_1.Mission),
    typeorm_1.JoinColumn(),
    __metadata("design:type", mission_entity_1.Mission)
], SpaceEvent.prototype, "mission", void 0);
SpaceEvent = __decorate([
    typeorm_1.Entity('space_event')
], SpaceEvent);
exports.SpaceEvent = SpaceEvent;
//# sourceMappingURL=space-event.entity.js.map