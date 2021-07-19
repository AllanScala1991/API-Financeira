"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var paymentType_1 = __importDefault(require("../models/paymentType"));
var sequelize_1 = require("sequelize");
var paymentTypeService = /** @class */ (function () {
    function paymentTypeService() {
    }
    paymentTypeService.prototype.createType = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var nameLower, nameExists, typeRegister;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!name) {
                            return [2 /*return*/, { "status": false, "message": "Insira um nome válido." }];
                        }
                        ;
                        nameLower = name.toLowerCase();
                        return [4 /*yield*/, paymentType_1.default.typeCreate.findAll({
                                raw: true,
                                where: {
                                    Name: nameLower
                                }
                            })];
                    case 1:
                        nameExists = _a.sent();
                        if (nameExists.length > 0) {
                            return [2 /*return*/, { "status": false, "message": "Já existe um tipo de pagamento com esse nome." }];
                        }
                        ;
                        return [4 /*yield*/, paymentType_1.default.typeCreate.create({
                                Name: nameLower
                            })];
                    case 2:
                        typeRegister = _a.sent();
                        if (!typeRegister) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao criar o tipo de pagamento." }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "message": "Tipo de pagamento registrado com sucesso." }];
                }
            });
        });
    };
    ;
    paymentTypeService.prototype.editType = function (id, name) {
        return __awaiter(this, void 0, void 0, function () {
            var typeExists, nameLower, typeUpdate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id || !name) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao editar tipo de pagamento." }];
                        }
                        ;
                        return [4 /*yield*/, paymentType_1.default.typeCreate.findAll({
                                raw: true,
                                where: {
                                    id: id
                                }
                            })];
                    case 1:
                        typeExists = _a.sent();
                        if (typeExists.length <= 0) {
                            return [2 /*return*/, { "status": false, "message": "Nenhum tipo encontrado para editar." }];
                        }
                        ;
                        nameLower = name.toLowerCase();
                        return [4 /*yield*/, paymentType_1.default.typeCreate.update({
                                Name: nameLower
                            }, {
                                where: {
                                    id: id
                                }
                            })];
                    case 2:
                        typeUpdate = _a.sent();
                        if (!typeUpdate) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao atualizar o tipo de pagamento." }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "message": "Tipo de pagamento atualizado com sucesso." }];
                }
            });
        });
    };
    ;
    paymentTypeService.prototype.deleteType = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var typeExists, typeDelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao deletar o tipo de pagamento." }];
                        }
                        ;
                        return [4 /*yield*/, paymentType_1.default.typeCreate.findAll({
                                raw: true,
                                where: {
                                    id: id
                                }
                            })];
                    case 1:
                        typeExists = _a.sent();
                        if (typeExists.length <= 0) {
                            return [2 /*return*/, { "status": false, "message": "Nenhum tipo de pagamento localizado para deletar." }];
                        }
                        ;
                        return [4 /*yield*/, paymentType_1.default.typeCreate.destroy({
                                where: {
                                    id: id
                                }
                            })];
                    case 2:
                        typeDelete = _a.sent();
                        if (!typeDelete) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao deletar o tipo de pagamento." }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "message": "Tipo de pagamento deletado com sucesso." }];
                }
            });
        });
    };
    ;
    paymentTypeService.prototype.getTypes = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var typeGetAll, nameLower, typeGetAll;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(name == "all")) return [3 /*break*/, 2];
                        return [4 /*yield*/, paymentType_1.default.typeCreate.findAll({ raw: true })];
                    case 1:
                        typeGetAll = _d.sent();
                        if (typeGetAll.length <= 0) {
                            return [2 /*return*/, { "status": false, "message": "Nenhum tipo de pagamento localizado." }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "data": typeGetAll }];
                    case 2:
                        nameLower = name.toLowerCase();
                        return [4 /*yield*/, paymentType_1.default.typeCreate.findAll({
                                raw: true,
                                where: {
                                    Name: (_a = {},
                                        _a[sequelize_1.Op.or] = [
                                            (_b = {}, _b[sequelize_1.Op.startsWith] = nameLower, _b),
                                            (_c = {}, _c[sequelize_1.Op.endsWith] = nameLower, _c)
                                        ],
                                        _a)
                                }
                            })];
                    case 3:
                        typeGetAll = _d.sent();
                        if (typeGetAll.length <= 0) {
                            return [2 /*return*/, { "status": false, "message": "Nenhum tipo de pagamento localizado." }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "data": typeGetAll }];
                }
            });
        });
    };
    ;
    return paymentTypeService;
}());
exports.default = { paymentTypeService: paymentTypeService };
