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
var receive_1 = __importDefault(require("../models/receive"));
var sequelize_1 = require("sequelize");
;
var receiveService = /** @class */ (function () {
    function receiveService() {
    }
    receiveService.prototype.createReceive = function (_a) {
        var name = _a.name, valor = _a.valor, receiveMethod = _a.receiveMethod, description = _a.description, dateReceive = _a.dateReceive, receiveRefer = _a.receiveRefer, registerRefer = _a.registerRefer;
        return __awaiter(this, void 0, void 0, function () {
            var info, emptyValue, valueConvert, floatValor, nameLower, receiveCreate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        info = [name, valor, receiveMethod, description, dateReceive, receiveRefer, registerRefer];
                        emptyValue = info.indexOf("");
                        if (emptyValue != -1) {
                            return [2 /*return*/, { "status": false, "message": "Todos os campos devem ser preenchidos." }];
                        }
                        ;
                        valueConvert = valor.toString().replace(',', '.');
                        floatValor = parseFloat(valueConvert);
                        nameLower = name.toLowerCase();
                        return [4 /*yield*/, receive_1.default.receiveCreate.create({
                                Name: nameLower,
                                Valor: floatValor,
                                ReceiveMethod: receiveMethod,
                                Description: description,
                                DateReceive: dateReceive,
                                ReceiveRefer: receiveRefer,
                                RegisterRefer: registerRefer
                            })];
                    case 1:
                        receiveCreate = _b.sent();
                        if (!receiveCreate) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao cadastrar o recebimento." }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "message": "Recebimento registrado com sucesso." }];
                }
            });
        });
    };
    ;
    receiveService.prototype.editReceive = function (id, _a) {
        var name = _a.name, valor = _a.valor, receiveMethod = _a.receiveMethod, description = _a.description, dateReceive = _a.dateReceive, receiveRefer = _a.receiveRefer, registerRefer = _a.registerRefer;
        return __awaiter(this, void 0, void 0, function () {
            var info, emptyValue, receiveExists, valueConvert, floatValor, nameLower, updateReceive;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        info = [name, valor, receiveMethod, description, dateReceive, receiveRefer, registerRefer];
                        emptyValue = info.indexOf("");
                        if (emptyValue != -1) {
                            return [2 /*return*/, { "status": false, "message": "Todos os campos devem ser preenchidos." }];
                        }
                        ;
                        return [4 /*yield*/, receive_1.default.receiveCreate.findAll({
                                raw: true,
                                where: {
                                    id: id
                                }
                            })];
                    case 1:
                        receiveExists = _b.sent();
                        valueConvert = valor.toString().replace(',', '.');
                        floatValor = parseFloat(valueConvert);
                        if (receiveExists.length <= 0) {
                            return [2 /*return*/, { "status": false, "message": "Nenhum recebimento localizado." }];
                        }
                        ;
                        nameLower = name.toLowerCase();
                        return [4 /*yield*/, receive_1.default.receiveCreate.update({
                                Name: nameLower,
                                Valor: floatValor,
                                ReceiveMethod: receiveMethod,
                                Description: description,
                                DateReceive: dateReceive,
                                ReceiveRefer: receiveRefer,
                                RegisterRefer: registerRefer
                            }, {
                                where: {
                                    id: id
                                }
                            })];
                    case 2:
                        updateReceive = _b.sent();
                        if (!updateReceive) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao atualizar o recebimento." }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "message": "Recebimento atualizado com sucesso." }];
                }
            });
        });
    };
    ;
    receiveService.prototype.deleteReceive = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var receiveExists, receiveDelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao deletar o recebimento." }];
                        }
                        ;
                        return [4 /*yield*/, receive_1.default.receiveCreate.findAll({
                                raw: true,
                                where: {
                                    id: id
                                }
                            })];
                    case 1:
                        receiveExists = _a.sent();
                        if (receiveExists.length <= 0) {
                            return [2 /*return*/, { "status": false, "message": "Nenhum recebimento localizado." }];
                        }
                        ;
                        return [4 /*yield*/, receive_1.default.receiveCreate.destroy({
                                where: {
                                    id: id
                                }
                            })];
                    case 2:
                        receiveDelete = _a.sent();
                        if (!receiveDelete) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao deletar o recebimento." }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "message": "Recebimento deletado com sucesso." }];
                }
            });
        });
    };
    ;
    receiveService.prototype.getReceive = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var getAllReceives, nameLower, getNameReceive;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(name == "all")) return [3 /*break*/, 2];
                        return [4 /*yield*/, receive_1.default.receiveCreate.findAll({
                                raw: true
                            })];
                    case 1:
                        getAllReceives = _d.sent();
                        if (getAllReceives.length <= 0) {
                            return [2 /*return*/, { "status": false, "message": "Nenhum recebimento localizado." }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "data": getAllReceives }];
                    case 2:
                        ;
                        nameLower = name.toLowerCase();
                        return [4 /*yield*/, receive_1.default.receiveCreate.findAll({
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
                        getNameReceive = _d.sent();
                        if (getNameReceive.length <= 0) {
                            return [2 /*return*/, { "status": false, "message": "Nenhum recebimento localizado." }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "data": getNameReceive }];
                }
            });
        });
    };
    ;
    receiveService.prototype.getReceiveMonth = function (month, year) {
        return __awaiter(this, void 0, void 0, function () {
            var getTotalReceives;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!month || !year) {
                            return [2 /*return*/, { "status": false, "message": "Informe mês e ano que deseja consultar." }];
                        }
                        ;
                        return [4 /*yield*/, receive_1.default.receiveCreate.findAll({
                                raw: true,
                                where: {
                                    DateReceive: month + "/" + year
                                }
                            })];
                    case 1:
                        getTotalReceives = _a.sent();
                        if (getTotalReceives.length <= 0) {
                            return [2 /*return*/, { "status": true, "data": { "Valor": 0 } }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "data": getTotalReceives }];
                }
            });
        });
    };
    ;
    return receiveService;
}());
;
exports.default = { receiveService: receiveService };
