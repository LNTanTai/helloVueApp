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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const space_event_mapper_1 = require("../service/mapper/space-event.mapper");
const space_event_repository_1 = require("../repository/space-event.repository");
const relationshipNames = [];
let SpaceEventService = class SpaceEventService {
    constructor(spaceEventRepository) {
        this.spaceEventRepository = spaceEventRepository;
        this.logger = new common_1.Logger('SpaceEventService');
    }
    async findById(id) {
        const options = { relations: relationshipNames };
        const result = await this.spaceEventRepository.findOne(id, options);
        return space_event_mapper_1.SpaceEventMapper.fromEntityToDTO(result);
    }
    async findByfields(options) {
        const result = await this.spaceEventRepository.findOne(options);
        return space_event_mapper_1.SpaceEventMapper.fromEntityToDTO(result);
    }
    async findAndCount(options) {
        options.relations = relationshipNames;
        const resultList = await this.spaceEventRepository.findAndCount(options);
        const spaceEventDTO = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(spaceEvent => spaceEventDTO.push(space_event_mapper_1.SpaceEventMapper.fromEntityToDTO(spaceEvent)));
            resultList[0] = spaceEventDTO;
        }
        return resultList;
    }
    async save(spaceEventDTO) {
        const entity = space_event_mapper_1.SpaceEventMapper.fromDTOtoEntity(spaceEventDTO);
        const result = await this.spaceEventRepository.save(entity);
        return space_event_mapper_1.SpaceEventMapper.fromEntityToDTO(result);
    }
    async update(spaceEventDTO) {
        const entity = space_event_mapper_1.SpaceEventMapper.fromDTOtoEntity(spaceEventDTO);
        const result = await this.spaceEventRepository.save(entity);
        return space_event_mapper_1.SpaceEventMapper.fromEntityToDTO(result);
    }
    async deleteById(id) {
        await this.spaceEventRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new common_1.HttpException('Error, entity not deleted!', common_1.HttpStatus.NOT_FOUND);
        }
        return;
    }
};
SpaceEventService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(space_event_repository_1.SpaceEventRepository)),
    __metadata("design:paramtypes", [space_event_repository_1.SpaceEventRepository])
], SpaceEventService);
exports.SpaceEventService = SpaceEventService;
//# sourceMappingURL=space-event.service.js.map