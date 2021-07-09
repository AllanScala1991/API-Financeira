import { Request, Response } from 'express';
import userService  from '../services/user';

class userController {
    async createUser (request:Request, response:Response) {
        const { name, email, username, password } = request.body;

        const createUserService = new userService.userService();

        const newUser = await createUserService.createUser({name, email, username, password});

        return response.json(newUser);
    }
}

export default { userController };