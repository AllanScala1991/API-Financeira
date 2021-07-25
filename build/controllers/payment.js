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
var payment_1 = __importDefault(require("../services/payment"));
var paymentController = /** @class */ (function () {
    function paymentController() {
    }
    paymentController.prototype.createPayment = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, valor, paymentMethod, category, description, datePayment, installments, paymentRefer, registerRefer, paymentCreate, newPayment;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, valor = _a.valor, paymentMethod = _a.paymentMethod, category = _a.category, description = _a.description, datePayment = _a.datePayment, installments = _a.installments, paymentRefer = _a.paymentRefer, registerRefer = _a.registerRefer;
                        paymentCreate = new payment_1.default.paymentService();
                        return [4 /*yield*/, paymentCreate.createPayment({ name: name, valor: valor, paymentMethod: paymentMethod, category: category, description: description, datePayment: datePayment, installments: installments, paymentRefer: paymentRefer, registerRefer: registerRefer })];
                    case 1:
                        newPayment = _b.sent();
                        return [2 /*return*/, response.json(newPayment)];
                }
            });
        });
    };
    ;
    paymentController.prototype.editPayment = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, name, valor, paymentMethod, category, description, datePayment, installments, paymentRefer, registerRefer, paymentEdit, newPaymentEdit;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, id = _a.id, name = _a.name, valor = _a.valor, paymentMethod = _a.paymentMethod, category = _a.category, description = _a.description, datePayment = _a.datePayment, installments = _a.installments, paymentRefer = _a.paymentRefer, registerRefer = _a.registerRefer;
                        paymentEdit = new payment_1.default.paymentService();
                        return [4 /*yield*/, paymentEdit.editPayment(id, { name: name, valor: valor, paymentMethod: paymentMethod, category: category, description: description, datePayment: datePayment, installments: installments, paymentRefer: paymentRefer, registerRefer: registerRefer })];
                    case 1:
                        newPaymentEdit = _b.sent();
                        return [2 /*return*/, response.json(newPaymentEdit)];
                }
            });
        });
    };
    ;
    paymentController.prototype.deletePayment = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, paymentDelete, newPaymentDelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        paymentDelete = new payment_1.default.paymentService();
                        return [4 /*yield*/, paymentDelete.deletePayment(id)];
                    case 1:
                        newPaymentDelete = _a.sent();
                        return [2 /*return*/, response.json(newPaymentDelete)];
                }
            });
        });
    };
    ;
    paymentController.prototype.deleteAllPayment = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var name, newDelete, allPaymentDelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = request.params.name;
                        newDelete = new payment_1.default.paymentService();
                        return [4 /*yield*/, newDelete.deletePaymentAll(name)];
                    case 1:
                        allPaymentDelete = _a.sent();
                        return [2 /*return*/, response.json(allPaymentDelete)];
                }
            });
        });
    };
    ;
    paymentController.prototype.getPayment = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var name, paymentGet, newPaymentGet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = request.params.name;
                        paymentGet = new payment_1.default.paymentService();
                        return [4 /*yield*/, paymentGet.getPayment(name)];
                    case 1:
                        newPaymentGet = _a.sent();
                        return [2 /*return*/, response.json(newPaymentGet)];
                }
            });
        });
    };
    ;
    paymentController.prototype.getPaymentMonth = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, month, year, paymentGet, newPaymentGet;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.params, month = _a.month, year = _a.year;
                        paymentGet = new payment_1.default.paymentService();
                        return [4 /*yield*/, paymentGet.getPaymentMonth(month, year)];
                    case 1:
                        newPaymentGet = _b.sent();
                        return [2 /*return*/, response.json(newPaymentGet)];
                }
            });
        });
    };
    ;
    return paymentController;
}());
;
exports.default = { paymentController: paymentController };
