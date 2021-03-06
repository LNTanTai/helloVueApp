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
const security_1 = require("../../security");
const pagination_entity_1 = require("../../domain/base/pagination.entity");
const user_dto_1 = require("../../service/dto/user.dto");
const header_util_1 = require("../../client/header-util");
const logging_interceptor_1 = require("../../client/interceptors/logging.interceptor");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("../../service/user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
        this.logger = new common_1.Logger('UserController');
    }
    async getAllUsers(req) {
        const sortField = req.query.sort;
        const pageRequest = new pagination_entity_1.PageRequest(req.query.page, req.query.size, sortField);
        const [results, count] = await this.userService.findAndCount({
            skip: +pageRequest.page * pageRequest.size,
            take: +pageRequest.size,
            order: pageRequest.sort.asOrder(),
        });
        header_util_1.HeaderUtil.addPaginationHeaders(req.res, new pagination_entity_1.Page(results, count, pageRequest));
        return results;
    }
    async createUser(req, userDTO) {
        userDTO.password = userDTO.login;
        const created = await this.userService.save(userDTO);
        header_util_1.HeaderUtil.addEntityCreatedHeaders(req.res, 'User', created.id);
        return created;
    }
    async updateUser(req, userDTO) {
        const userOnDb = await this.userService.find({ where: { login: userDTO.login } });
        let updated = false;
        if (userOnDb && userOnDb.id) {
            userDTO.id = userOnDb.id;
            updated = true;
        }
        else {
            userDTO.password = userDTO.login;
        }
        const createdOrUpdated = await this.userService.update(userDTO);
        if (updated) {
            header_util_1.HeaderUtil.addEntityUpdatedHeaders(req.res, 'User', createdOrUpdated.id);
        }
        else {
            header_util_1.HeaderUtil.addEntityCreatedHeaders(req.res, 'User', createdOrUpdated.id);
        }
        return createdOrUpdated;
    }
    async getUser(loginValue) {
        return await this.userService.find({ where: { login: loginValue } });
    }
    async deleteUser(req, loginValue) {
        header_util_1.HeaderUtil.addEntityDeletedHeaders(req.res, 'User', loginValue);
        const userToDelete = await this.userService.find({ where: { login: loginValue } });
        return await this.userService.delete(userToDelete);
    }
};
__decorate([
    common_1.Get('/'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiOperation({ title: 'Get the list of users' }),
    swagger_1.ApiResponse({
        status: 200,
        description: 'List all users',
        type: user_dto_1.UserDTO,
    }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    common_1.Post('/'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiOperation({ title: 'Create user' }),
    swagger_1.ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: user_dto_1.UserDTO,
    }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.UserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    common_1.Put('/'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiOperation({ title: 'Update user' }),
    swagger_1.ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: user_dto_1.UserDTO,
    }),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.UserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    common_1.Get('/:login'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiOperation({ title: 'Get user' }),
    swagger_1.ApiResponse({
        status: 200,
        description: 'The found record',
        type: user_dto_1.UserDTO,
    }),
    __param(0, common_1.Param('login')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    common_1.Delete('/:login'),
    security_1.Roles(security_1.RoleType.ADMIN),
    swagger_1.ApiOperation({ title: 'Delete user' }),
    swagger_1.ApiResponse({
        status: 204,
        description: 'The record has been successfully deleted.',
        type: user_dto_1.UserDTO,
    }),
    __param(0, common_1.Req()), __param(1, common_1.Param('login')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
UserController = __decorate([
    common_1.Controller('api/admin/users'),
    common_1.UseGuards(security_1.AuthGuard, security_1.RolesGuard),
    common_1.UseInterceptors(logging_interceptor_1.LoggingInterceptor),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiUseTags('user-resource'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map