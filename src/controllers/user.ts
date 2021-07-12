import { Request, Response } from 'express';
import userService  from '../services/user';

class userController {
    async createUser (request : Request, response : Response) {
        const { name, email, username, password } = request.body;
        const id  = "";

        const createUserService = new userService.userService();

        const newUser = await createUserService.createUser({id, name, email, username, password});

        return response.json(newUser);
    };

    async editUserGet (request : Request, response : Response) {
        const  username  =  request.params.username;

        const editUserService = new userService.userService();

        const userEdit = await editUserService.editUserGet(username);

        return response.json(userEdit);
    };

    async editUserSave (request : Request, response: Response) {
        const { id, name, email, username, password } = request.body;

        const editUserService = new userService.userService();

        const userEdit = await editUserService.editUserSave({ id, name, email, username, password });

        return response.json(userEdit);
    };

    async deleteUser (request : Request, response: Response) {
        const { id } = request.body;

        const deleteUserService = new userService.userService();

        const userDelete = await deleteUserService.deleteUser(id);

        return response.json(userDelete);
    }

    async recoveryPassword (request: Request, response : Response) {
        const { email } = request.body;

        const emailUserService = new userService.userService();

        const emailSender = await emailUserService.recoveryPassword(email);

        return response.json(emailSender);

    };
}

export default { userController };