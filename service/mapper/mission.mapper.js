"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mission_entity_1 = require("../../domain/mission.entity");
const mission_dto_1 = require("../dto/mission.dto");
/**
 * A Mission mapper object.
 */
class MissionMapper {
    static fromDTOtoEntity(entityDTO) {
        if (!entityDTO) {
            return;
        }
        const entity = new mission_entity_1.Mission();
        const fields = Object.getOwnPropertyNames(entityDTO);
        fields.forEach(field => {
            entity[field] = entityDTO[field];
        });
        return entity;
    }
    static fromEntityToDTO(entity) {
        if (!entity) {
            return;
        }
        const entityDTO = new mission_dto_1.MissionDTO();
        const fields = Object.getOwnPropertyNames(entity);
        fields.forEach(field => {
            entityDTO[field] = entity[field];
        });
        return entityDTO;
    }
}
exports.MissionMapper = MissionMapper;
//# sourceMappingURL=mission.mapper.js.map