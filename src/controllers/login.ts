import { Request, Response } from "express";
import serviceLogin from '../services/login'


class loginController {
    async login (request: Request, response: Response) {
        const { username, password } = request.body;

        const loginService = new serviceLogin.loginService();

        const userLogin = await loginService.login({ username, password });

        return response.json(userLogin);
    }
}

export default { loginController };