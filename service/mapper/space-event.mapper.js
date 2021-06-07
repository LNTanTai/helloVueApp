"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const space_event_entity_1 = require("../../domain/space-event.entity");
const space_event_dto_1 = require("../dto/space-event.dto");
/**
 * A SpaceEvent mapper object.
 */
class SpaceEventMapper {
    static fromDTOtoEntity(entityDTO) {
        if (!entityDTO) {
            return;
        }
        const entity = new space_event_entity_1.SpaceEvent();
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
        const entityDTO = new space_event_dto_1.SpaceEventDTO();
        const fields = Object.getOwnPropertyNames(entity);
        fields.forEach(field => {
            entityDTO[field] = entity[field];
        });
        return entityDTO;
    }
}
exports.SpaceEventMapper = SpaceEventMapper;
//# sourceMappingURL=space-event.mapper.js.map