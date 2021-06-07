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
const mission_mapper_1 = require("../service/mapper/mission.mapper");
const mission_repository_1 = require("../repository/mission.repository");
const relationshipNames = [];
let MissionService = class MissionService {
    constructor(missionRepository) {
        this.missionRepository = missionRepository;
        this.logger = new common_1.Logger('MissionService');
    }
    async findById(id) {
        const options = { relations: relationshipNames };
        const result = await this.missionRepository.findOne(id, options);
        return mission_mapper_1.MissionMapper.fromEntityToDTO(result);
    }
    async findByfields(options) {
        const result = await this.missionRepository.findOne(options);
        return mission_mapper_1.MissionMapper.fromEntityToDTO(result);
    }
    async findAndCount(options) {
        options.relations = relationshipNames;
        const resultList = await this.missionRepository.findAndCount(options);
        const missionDTO = [];
        if (resultList && resultList[0]) {
            resultList[0].forEach(mission => missionDTO.push(mission_mapper_1.MissionMapper.fromEntityToDTO(mission)));
            resultList[0] = missionDTO;
        }
        return resultList;
    }
    async save(missionDTO) {
        const entity = mission_mapper_1.MissionMapper.fromDTOtoEntity(missionDTO);
        const result = await this.missionRepository.save(entity);
        return mission_mapper_1.MissionMapper.fromEntityToDTO(result);
    }
    async update(missionDTO) {
        const entity = mission_mapper_1.MissionMapper.fromDTOtoEntity(missionDTO);
        const result = await this.missionRepository.save(entity);
        return mission_mapper_1.MissionMapper.fromEntityToDTO(result);
    }
    async deleteById(id) {
        await this.missionRepository.delete(id);
        const entityFind = await this.findById(id);
        if (entityFind) {
            throw new common_1.HttpException('Error, entity not deleted!', common_1.HttpStatus.NOT_FOUND);
        }
        return;
    }
};
MissionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(mission_repository_1.MissionRepository)),
    __metadata("design:paramtypes", [mission_repository_1.MissionRepository])
], MissionService);
exports.MissionService = MissionService;
//# sourceMappingURL=mission.service.js.map