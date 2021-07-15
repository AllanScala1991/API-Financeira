import { Router } from "express";
import userAuthenticated from "./middlewares/authenticated";
import user from './controllers/user';
import login from './controllers/login';
import paymentCategory from "./controllers/paymentCategory";
import paymentType from "./controllers/paymentType";

const router = Router();

// CRIANDO OS NOVOS CONTROLLERS
const userController = new user.userController();
const loginController = new login.loginController();
const paymentCategoryController = new paymentCategory.paymentCategoryController();
const paymentTypeController = new paymentType.paymentTypeController();

// ROTAS DE USER
router.post('/user', userController.createUser);
router.get("/user/:username", userAuthenticated, userController.editUserGet);
router.put('/user', userAuthenticated, userController.editUserSave);
router.delete('/user', userAuthenticated, userController.deleteUser);
router.post('/user/recovery', userController.recoveryPassword);

// ROTA DE LOGIN
router.post('/login', loginController.login);

// ROTAS DAS CATEGORIAS DE PAGAMENTO
router.post('/category', userAuthenticated, paymentCategoryController.createPaymentCategory);
router.put('/category', userAuthenticated, paymentCategoryController.editPaymentCategory);
router.delete('/category', userAuthenticated, paymentCategoryController.deletePaymentCategory);
router.get('/category/:name', userAuthenticated, paymentCategoryController.getPaymentCategory);

// ROTAS DOS TIPOS DE PAGAMENTO
router.post('/types', userAuthenticated, paymentTypeController.createPaymentType);
router.put('/types', userAuthenticated, paymentTypeController.editPaymentType);
router.delete('/types/:id', userAuthenticated, paymentTypeController.deletePaymentType);
router.get('/types/:name', userAuthenticated, paymentTypeController.getPaymentType);

export { router };