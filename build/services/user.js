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
var user_1 = __importDefault(require("../models/user"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var sequelize_1 = require("sequelize");
var nodemailer_1 = __importDefault(require("nodemailer"));
var chance_1 = require("chance");
var userService = /** @class */ (function () {
    function userService() {
    }
    userService.prototype.createUser = function (_a) {
        var id = _a.id, name = _a.name, email = _a.email, username = _a.username, password = _a.password;
        return __awaiter(this, void 0, void 0, function () {
            var userAlreadyExists, passwordCrypt, userCreate;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!name || !email || !username || !password) {
                            return [2 /*return*/, { "status": false, "message": "Todos os campos devem ser preenchidos." }];
                        }
                        return [4 /*yield*/, user_1.default.userCreate.findAll({
                                raw: true,
                                where: (_b = {},
                                    _b[sequelize_1.Op.or] = [
                                        { Username: username },
                                        { Email: email }
                                    ],
                                    _b)
                            })];
                    case 1:
                        userAlreadyExists = _c.sent();
                        if (userAlreadyExists.length > 0) {
                            return [2 /*return*/, { "status": false, "message": "Já existe um usuário com essas informações." }];
                        }
                        return [4 /*yield*/, bcryptjs_1.default.hash(password, 8)];
                    case 2:
                        passwordCrypt = _c.sent();
                        return [4 /*yield*/, user_1.default.userCreate.create({
                                Name: name,
                                Email: email,
                                Username: username,
                                Password: passwordCrypt,
                            })];
                    case 3:
                        userCreate = _c.sent();
                        if (!userCreate) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao registrar usuário." }];
                        }
                        return [2 /*return*/, { "status": true, "message": "Usuário registrado com sucesso." }];
                }
            });
        });
    };
    userService.prototype.editUserGet = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            var getNames;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!username) {
                            return [2 /*return*/, { "status": false, "message": "Nenhum usuário localizado." }];
                        }
                        ;
                        return [4 /*yield*/, user_1.default.userCreate.findAll({
                                raw: true,
                                where: {
                                    Username: (_a = {},
                                        _a[sequelize_1.Op.or] = [
                                            (_b = {}, _b[sequelize_1.Op.startsWith] = username, _b),
                                            (_c = {}, _c[sequelize_1.Op.endsWith] = username, _c)
                                        ],
                                        _a)
                                },
                                order: [
                                    ['Name', 'ASC']
                                ]
                            })];
                    case 1:
                        getNames = _d.sent();
                        if (getNames.length <= 0) {
                            return [2 /*return*/, { "status": false, "message": "Nenhum usuário localizado." }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "data": getNames }];
                }
            });
        });
    };
    userService.prototype.editUserSave = function (_a) {
        var id = _a.id, name = _a.name, email = _a.email, username = _a.username, password = _a.password;
        return __awaiter(this, void 0, void 0, function () {
            var passwordCrypt, userUpdate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!name || !email || !username || !password) {
                            return [2 /*return*/, { "status": false, "message": "Todos os campos devem ser preenchidos." }];
                        }
                        ;
                        return [4 /*yield*/, bcryptjs_1.default.hash(password, 8)];
                    case 1:
                        passwordCrypt = _b.sent();
                        return [4 /*yield*/, user_1.default.userCreate.update({
                                Name: name,
                                Email: email,
                                Username: username,
                                Password: passwordCrypt
                            }, {
                                where: {
                                    id: id
                                }
                            })];
                    case 2:
                        userUpdate = _b.sent();
                        if (!userUpdate) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao atualizar o usuário, tente novamente." }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "message": "Usuário editado com sucesso." }];
                }
            });
        });
    };
    userService.prototype.deleteUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var userDelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao deletar o usuário, tente novamente." }];
                        }
                        ;
                        return [4 /*yield*/, user_1.default.userCreate.destroy({
                                where: {
                                    id: id
                                }
                            })];
                    case 1:
                        userDelete = _a.sent();
                        if (!userDelete) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao deletar o usuário, tente novamente." }];
                        }
                        ;
                        return [2 /*return*/, { "status": true, "message": "Usuário deletado com sucesso." }];
                }
            });
        });
    };
    userService.prototype.recoveryPassword = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var emailExists, passwordDefault, passwordHash, updatePassword, transporter, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!email) {
                            return [2 /*return*/, { "status": false, "message": "O campo de email deve ser preenchido." }];
                        }
                        ;
                        return [4 /*yield*/, user_1.default.userCreate.findAll({
                                raw: true,
                                where: {
                                    Email: email
                                }
                            })];
                    case 1:
                        emailExists = _a.sent();
                        if (emailExists.length <= 0) {
                            return [2 /*return*/, { "status": false, "message": "Email não localizado, tente novamente." }];
                        }
                        ;
                        passwordDefault = chance_1.Chance().hash({ length: 5 });
                        return [4 /*yield*/, bcryptjs_1.default.hash(passwordDefault, 8)];
                    case 2:
                        passwordHash = _a.sent();
                        return [4 /*yield*/, user_1.default.userCreate.update({
                                Password: passwordHash
                            }, {
                                where: {
                                    Email: email
                                }
                            })];
                    case 3:
                        updatePassword = _a.sent();
                        if (!updatePassword) {
                            return [2 /*return*/, { "status": false, "message": "Erro ao recuperar senha, tente novamente." }];
                        }
                        ;
                        transporter = nodemailer_1.default.createTransport({
                            service: 'gmail',
                            auth: {
                                user: "myexpenses.product@gmail.com",
                                pass: "allan100291"
                            }
                        });
                        options = {
                            from: "myexpenses.product@gmail.com",
                            to: email,
                            subject: "Recuperação de senha - My Expenses",
                            text: "Ol\u00E1, obrigado por utilizar o APP My Expenses, foi gerada uma nova senha, acesse agora com : " + passwordDefault
                        };
                        return [4 /*yield*/, transporter.sendMail(options)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, { "status": true, "message": "Senha encaminhada com sucesso." }];
                }
            });
        });
    };
    return userService;
}());
exports.default = { userService: userService };
