"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var config_1 = __importDefault(require("../config/config"));
function userAuthenticated(request, response, next) {
    var token = request.headers.authorization;
    if (!token) {
        return response.status(401).json({
            "status": false,
            "message": "Token inválido ou expirado."
        });
    }
    ;
    var setToken = token.split(" ");
    try {
        var decode = jsonwebtoken_1.verify(setToken[1], config_1.default.secretKey);
        return next();
    }
    catch (error) {
        return response.status(401).json({
            "status": false,
            "message": "Erro desconhecido: " + error
        });
    }
}
exports.default = userAuthenticated;
