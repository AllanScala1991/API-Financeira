import userModel from '../models/user';
import crypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import config from '../config/config';

interface ILogin {
    username: string;
    password: string;
}

class loginService {

    async login ({username, password} : ILogin) {

        if (!username || !password) {
            return { "status" : false, "message": "Usuário e senha devem ser preenchidos." }
        };

        const userExists = await userModel.userCreate.findOne({
            where: {
                Username: username
            }
        });

        if (!userExists) {
            return { "status": false, "message": "Usuário ou senha inválido." }
        }

        const verifyPassword = await crypt.compare(password, userExists['Password']);

        if (!verifyPassword) {
            return { "status": false, "message": "Usuário ou senha inválido." }
        };

        const token = sign({
            name: userExists['Name']
        }, config.secretKey, {
            expiresIn: '1d'
        });

        return { "status": true, "token": token }
    }
}

export default {loginService};