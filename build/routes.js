"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var authenticated_1 = __importDefault(require("./middlewares/authenticated"));
var user_1 = __importDefault(require("./controllers/user"));
var login_1 = __importDefault(require("./controllers/login"));
var paymentCategory_1 = __importDefault(require("./controllers/paymentCategory"));
var paymentType_1 = __importDefault(require("./controllers/paymentType"));
var payment_1 = __importDefault(require("./controllers/payment"));
var receive_1 = __importDefault(require("./controllers/receive"));
var router = express_1.Router();
exports.router = router;
// CRIANDO OS NOVOS CONTROLLERS
var userController = new user_1.default.userController();
var loginController = new login_1.default.loginController();
var paymentCategoryController = new paymentCategory_1.default.paymentCategoryController();
var paymentTypeController = new paymentType_1.default.paymentTypeController();
var paymentController = new payment_1.default.paymentController();
var receiveController = new receive_1.default.receiveController();
// ROTAS DE USER
router.post('/user', userController.createUser);
router.get("/user/:username", authenticated_1.default, userController.editUserGet);
router.put('/user', authenticated_1.default, userController.editUserSave);
router.delete('/user/:id', authenticated_1.default, userController.deleteUser);
router.post('/user/recovery', userController.recoveryPassword);
// ROTA DE LOGIN
router.post('/login', loginController.login);
// ROTAS DAS CATEGORIAS DE PAGAMENTO
router.post('/category', authenticated_1.default, paymentCategoryController.createPaymentCategory);
router.put('/category', authenticated_1.default, paymentCategoryController.editPaymentCategory);
router.delete('/category/:id', authenticated_1.default, paymentCategoryController.deletePaymentCategory);
router.get('/category/:name', authenticated_1.default, paymentCategoryController.getPaymentCategory);
// ROTAS DOS TIPOS DE PAGAMENTO
router.post('/types', authenticated_1.default, paymentTypeController.createPaymentType);
router.put('/types', authenticated_1.default, paymentTypeController.editPaymentType);
router.delete('/types/:id', authenticated_1.default, paymentTypeController.deletePaymentType);
router.get('/types/:name', authenticated_1.default, paymentTypeController.getPaymentType);
// ROTAS DOS PAGAMENTOS
router.post('/payment', authenticated_1.default, paymentController.createPayment);
router.put('/payment', authenticated_1.default, paymentController.editPayment);
router.delete('/payment/:id', authenticated_1.default, paymentController.deletePayment);
router.delete('/payment/all/:name', authenticated_1.default, paymentController.deleteAllPayment);
router.get('/payment/:name', authenticated_1.default, paymentController.getPayment);
// ROTAS DOS RECEBIMENTOS
router.post('/receive', authenticated_1.default, receiveController.createReceive);
router.put('/receive', authenticated_1.default, receiveController.editReceive);
router.delete('/receive/:id', authenticated_1.default, receiveController.deleteReceive);
router.get('/receive/:name', authenticated_1.default, receiveController.getReceive);
