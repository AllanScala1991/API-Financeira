import { Router } from "express";
import user from './controllers/user';

const router = Router();

const userController = new user.userController();

// ROTAS DE USER
router.post('/user', userController.createUser);

export { router };