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
var payment_1 = __importDefault(require("../models/payment"));
var sequelize_1 = require("sequelize");
var paymentService = /** @class */ (function () {
    function paymentService() {
    }
    paymentService.prototype.createPayment = function (_a) {
        var name = _a.name, valor = _a.valor, paymentMethod = _a.paymentMethod, category = _a.category, description = _a.description, datePayment = _a.datePayment, installments = _a.installments, paymentRefer = _a.paymentRefer, registerRefer = _a.registerRefer;
        return __awaiter(this, void 0, void 0, function () {
            var info, emptyValue, valueConvert, floatValor, installmentsSplit, datePaymentSplit, nameLower, mounth, year, parcelInit, parcelFinish, i, paymentCreate, paymentCreate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        info = [name, valor, paymentMethod, category, description, datePayment, installments, paymentRefer, registerRefer];
                        emptyValue = info.indexOf("");
                        if (emptyValue != -1) {
                            return [2 /*return*/, { "status": false, "message": "Todos os campos devem ser preenchidos." }];
                        }
                        ;
                        valueConvert = valor.toString().replace(',', ".");
                        floatValor = parseFloat(valueConvert);
                        installmentsSplit = installments.split("/");
                        datePaymentSplit = datePayment.split("/");
                        nameLower = name.toLowerCase();
                        if (!(parseInt(installmentsSplit[1]) > 1)) return [3 /*break*/, 5];
                        mounth = parseInt(datePaymentSplit[0]);
                        year = parseInt(datePaymentSplit[1]);
                        parcelInit = parseInt(installmentsSplit[0]);
                        parcelFinish = parseInt(installmentsSplit[1]);
                        i = 0;
                        _b.label = 1;
                    case 1:
                        if (!(i < parseInt(installmentsSplit[1]))) return [3 /*break*/, 4];
                        return [4 /*yield*/, payment_1.default.paymentCreate.create({
                                Name: nameLower,
                                Valor: floatValor,
                                PaymentMethod: paymentMethod,
                                Category: category,
                                Description: description,
                                DatePayment: mounth + "/" + year,
                                Installments: parcelInit + "/" + parcelFinish,
                                PaymentRefer: paymentRefer,
                                RegisterRefer: registerRefer
                            })];
                    case 2:
                        paymentCreate = _b.sent();
                        if (!paymentCreate) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao cadastrar um novo pagamento." }];
                        }
                        ;
                        if (mounth == 12) {
                            mounth = 0;
                            year += 1;
                        }
                        mounth += 1;
                        parcelInit += 1;
                        _b.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, { "status": true, "message": "Pagamento registrado com sucesso." }];
                    case 5: return [4 /*yield*/, payment_1.default.paymentCreate.create({
                            Name: nameLower,
                            Valor: floatValor,
                            PaymentMethod: paymentMethod,
                            Category: category,
                            Description: description,
                            DatePayment: datePayment,
                            Installments: installments,
                            PaymentRefer: paymentRefer,
                            RegisterRefer: registerRefer
                        })];
                    case 6:
                        paymentCreate = _b.sent();
                        if (!paymentCreate) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao cadastrar um novo pagamento." }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "message": "Pagamento registrado com sucesso." }];
                }
            });
        });
    };
    ;
    paymentService.prototype.editPayment = function (id, _a) {
        var name = _a.name, valor = _a.valor, paymentMethod = _a.paymentMethod, category = _a.category, description = _a.description, datePayment = _a.datePayment, installments = _a.installments, paymentRefer = _a.paymentRefer, registerRefer = _a.registerRefer;
        return __awaiter(this, void 0, void 0, function () {
            var info, emptyValue, paymentExists, valueConvert, floatValor, nameLower, updatePayment;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        info = [name, valor, paymentMethod, category, description, datePayment, installments, paymentRefer, registerRefer];
                        emptyValue = info.indexOf("");
                        if (emptyValue != -1) {
                            return [2 /*return*/, { "status": false, "message": "Todos os campos devem ser preenchidos." }];
                        }
                        ;
                        return [4 /*yield*/, payment_1.default.paymentCreate.findAll({
                                where: {
                                    id: id
                                }
                            })];
                    case 1:
                        paymentExists = _b.sent();
                        if (paymentExists.length <= 0) {
                            return [2 /*return*/, { "status": false, "message": "Nenhum pagamento foi localizado." }];
                        }
                        ;
                        valueConvert = valor.toString().replace(',', ".");
                        floatValor = parseFloat(valueConvert);
                        nameLower = name.toLowerCase();
                        return [4 /*yield*/, payment_1.default.paymentCreate.update({
                                Name: nameLower,
                                Valor: floatValor,
                                PaymentMethod: paymentMethod,
                                Category: category,
                                Description: description,
                                DatePayment: datePayment,
                                Installments: installments,
                                PaymentRefer: paymentRefer,
                                RegisterRefer: registerRefer
                            }, {
                                where: {
                                    id: id
                                }
                            })];
                    case 2:
                        updatePayment = _b.sent();
                        if (!updatePayment) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao atualizar o pagamento." }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "message": "Pagamento atualizado com sucesso." }];
                }
            });
        });
    };
    ;
    paymentService.prototype.deletePayment = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var paymentExists, deletePayment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao deletar o pagamento." }];
                        }
                        ;
                        return [4 /*yield*/, payment_1.default.paymentCreate.findAll({
                                where: {
                                    id: id
                                }
                            })];
                    case 1:
                        paymentExists = _a.sent();
                        if (!paymentExists) {
                            return [2 /*return*/, { "status": false, "message": "Nenhum pagamento foi localizado para deletar." }];
                        }
                        ;
                        return [4 /*yield*/, payment_1.default.paymentCreate.destroy({
                                where: {
                                    id: id
                                }
                            })];
                    case 2:
                        deletePayment = _a.sent();
                        if (!deletePayment) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao deletar o pagamento." }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "message": "Pagamento deletado com sucesso." }];
                }
            });
        });
    };
    ;
    paymentService.prototype.deletePaymentAll = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var nameLower, nameExists, deleteAllPayment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!name) {
                            return [2 /*return*/, { "status": false, "message": "O campo nome deve ser preenchido." }];
                        }
                        ;
                        nameLower = name.toLowerCase();
                        return [4 /*yield*/, payment_1.default.paymentCreate.findAll({
                                raw: true,
                                where: {
                                    Name: nameLower
                                }
                            })];
                    case 1:
                        nameExists = _a.sent();
                        if (nameExists.length <= 0) {
                            return [2 /*return*/, { "status": false, "message": "Nenhum pagamento localizado." }];
                        }
                        ;
                        return [4 /*yield*/, payment_1.default.paymentCreate.destroy({
                                where: {
                                    Name: nameLower
                                }
                            })];
                    case 2:
                        deleteAllPayment = _a.sent();
                        if (!deleteAllPayment) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao deletar o pagamento." }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "message": "Todos as parcelas desse pagamento foram deletadas." }];
                }
            });
        });
    };
    ;
    paymentService.prototype.getPayment = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var getAllPayments, nameLower, getPaymentName;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(name == "all")) return [3 /*break*/, 2];
                        return [4 /*yield*/, payment_1.default.paymentCreate.findAll({
                                raw: true
                            })];
                    case 1:
                        getAllPayments = _d.sent();
                        if (getAllPayments.length <= 0) {
                            return [2 /*return*/, { "status": false, "message": "Nenhum pagamento foi encontrado." }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "data": getAllPayments }];
                    case 2:
                        nameLower = name.toLowerCase();
                        return [4 /*yield*/, payment_1.default.paymentCreate.findAll({
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
                        getPaymentName = _d.sent();
                        if (getPaymentName.length <= 0) {
                            return [2 /*return*/, { "status": false, "message": "Nenhum pagamento localizado." }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "data": getPaymentName }];
                }
            });
        });
    };
    ;
    return paymentService;
}());
exports.default = { paymentService: paymentService };
