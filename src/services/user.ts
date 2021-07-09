import userModel from '../models/user';
import crypt from 'bcryptjs';

interface IUser {
    name : string;
    email: string;
    username: string;
    password: string;
}

class userService {

    async createUser ({ name, email, username, password } : IUser) {

        if (!name || !email || !username || !password ) {
            return { "status": false, "message": "Todos os campos devem ser preenchidos." }
        }

        const userAlreadyExists = await userModel.userCreate.findAll({
            raw: true,
            where: {
                Username : username
            }
        });

        if (userAlreadyExists.length > 0) {
            return { "status": false, "message": "Já existe um usuário com essas informações." }
        }

        const passwordCrypt = await crypt.hash(password, 8);

        const userCreate = await userModel.userCreate.create({
            Name: name,
            Email: email,
            Username: username,
            Password: passwordCrypt,
        });

        if (!userCreate) {
            return { "status": false, "message": "Erro ao registrar usuário." }
        }

        return { "status": true, "message": "Usuário registrado com sucesso." }

    }

}

export default { userService };