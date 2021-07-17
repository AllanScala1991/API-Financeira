import { Router } from "express";
import userAuthenticated from "./middlewares/authenticated";
import user from './controllers/user';
import login from './controllers/login';
import paymentCategory from "./controllers/paymentCategory";
import paymentType from "./controllers/paymentType";
import payment from "./controllers/payment";
import receive from "./controllers/receive";

const router = Router();

// CRIANDO OS NOVOS CONTROLLERS
const userController = new user.userController();
const loginController = new login.loginController();
const paymentCategoryController = new paymentCategory.paymentCategoryController();
const paymentTypeController = new paymentType.paymentTypeController();
const paymentController = new payment.paymentController();
const receiveController = new receive.receiveController();

// ROTAS DE USER
router.post('/user', userController.createUser);
router.get("/user/:username", userAuthenticated, userController.editUserGet);
router.put('/user', userAuthenticated, userController.editUserSave);
router.delete('/user/:id', userAuthenticated, userController.deleteUser);
router.post('/user/recovery', userController.recoveryPassword);

// ROTA DE LOGIN
router.post('/login', loginController.login);

// ROTAS DAS CATEGORIAS DE PAGAMENTO
router.post('/category', userAuthenticated, paymentCategoryController.createPaymentCategory);
router.put('/category', userAuthenticated, paymentCategoryController.editPaymentCategory);
router.delete('/category/:id', userAuthenticated, paymentCategoryController.deletePaymentCategory);
router.get('/category/:name', userAuthenticated, paymentCategoryController.getPaymentCategory);

// ROTAS DOS TIPOS DE PAGAMENTO
router.post('/types', userAuthenticated, paymentTypeController.createPaymentType);
router.put('/types', userAuthenticated, paymentTypeController.editPaymentType);
router.delete('/types/:id', userAuthenticated, paymentTypeController.deletePaymentType);
router.get('/types/:name', userAuthenticated, paymentTypeController.getPaymentType);

// ROTAS DOS PAGAMENTOS
router.post('/payment', userAuthenticated, paymentController.createPayment);
router.put('/payment', userAuthenticated, paymentController.editPayment);
router.delete('/payment/:id', userAuthenticated, paymentController.deletePayment);
router.get('/payment/:name', userAuthenticated, paymentController.getPayment);

// ROTAS DOS RECEBIMENTOS
router.post('/receive', userAuthenticated, receiveController.createReceive);
router.put('/receive', userAuthenticated, receiveController.editReceive);
router.delete('/receive/:id', userAuthenticated, receiveController.deleteReceive);
router.get('/receive/:name', userAuthenticated, receiveController.getReceive);

export { router };