import { Router } from "express";
import user from './controllers/user';

const router = Router();

const userController = new user.userController();

// ROTAS DE USER
router.post('/user', userController.createUser);
router.get('/user/:username', userController.editUserGet);
router.patch('/user', userController.editUserSave);
router.delete('/user', userController.deleteUser);
router.post('/user/recovery', userController.recoveryPassword);

export { router };