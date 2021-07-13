import { Router } from "express";
import userAuthenticated from "./middlewares/authenticated";
import user from './controllers/user';
import login from './controllers/login';

const router = Router();


const userController = new user.userController();
const loginController = new login.loginController();

// ROTAS DE USER
router.post('/user', userController.createUser);
router.get("/user/:username", userAuthenticated, userController.editUserGet);
router.patch('/user', userAuthenticated, userController.editUserSave);
router.delete('/user', userAuthenticated, userController.deleteUser);
router.post('/user/recovery', userController.recoveryPassword);

// ROTA DE LOGIN
router.post('/login', loginController.login);

export { router };