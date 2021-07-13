import userModel from '../models/user';
import crypt from 'bcryptjs';
import { Op } from 'sequelize';
import nodemailer from 'nodemailer';
import { Chance } from 'chance';


interface IUser {
    id: string;
    name : string;
    email: string;
    username: string;
    password: string;
}

class userService {

    async createUser ({ id, name, email, username, password } : IUser) {

        if (!name || !email || !username || !password ) {
            return { "status": false, "message": "Todos os campos devem ser preenchidos." }
        }

        const userAlreadyExists = await userModel.userCreate.findAll({
            raw: true,
            where: {
                [Op.or] : [
                    {Username : username},
                    {Email : email}
                ]
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

    async editUserGet(username : string) {

        if (!username) {
         
            return { "status": false, "message": "Nenhum usuário localizado." }
        };

        const getNames = await userModel.userCreate.findAll({
            raw: true,
            where: {
                Username: username
            },
            order: [
                ['Name', 'ASC']
            ]
        });

        if (getNames.length <= 0) {
            return { "status": false, "message": "Nenhum usuário localizado." }
        };

        return { "status": true, "data": getNames };
    }

    async editUserSave({ id, name, email, username, password } : IUser) {

        if (!name || !email || !username || !password) {
            return { "status": false, "message": "Todos os campos devem ser preenchidos." }
        };

        const passwordCrypt = await crypt.hash(password, 8);

        const userUpdate = await userModel.userCreate.update({
            Name: name,
            Email: email,
            Username: username,
            Password: passwordCrypt
        }, {
            where: {
                id: id
            }
        });

        if(!userUpdate) {
            return { "status": false, "message": "Erro ao atualizar o usuário, tente novamente." }
        };

        return { "status": true, "message": "Usuário editado com sucesso." };
    }

    async deleteUser(id : string) {
        if (!id) {
            return { "status": false, "message": "Erro ao deletar o usuário, tente novamente." }
        };

        const userDelete = await userModel.userCreate.destroy({
            where: {
                id: id
            }
        });

        if (!userDelete) {
            return { "status": false, "message": "Erro ao deletar o usuário, tente novamente." }
        };

        return { "status": true, "message": "Usuário deletado com sucesso." }
    }

    async recoveryPassword(email : string) {
        if (!email) {
            return { "status": false, "message": "O campo de email deve ser preenchido." }
        };

        const emailExists = await userModel.userCreate.findAll({
            raw: true,
            where: {
                Email: email
            }
        });

        if (emailExists.length <= 0) {
            return { "status": false, "message": "Email não localizado, tente novamente." }
        };

        const passwordDefault = Chance().hash({ length: 5 });

        const passwordHash = await crypt.hash(passwordDefault, 8);

        const updatePassword = await userModel.userCreate.update({
            Password: passwordHash
        }, {
            where: {
                Email: email
            }
        });

        if (!updatePassword) {
            return { "status": false, "message": "Erro ao recuperar senha, tente novamente." }
        };

        let transporter  = nodemailer.createTransport({
            service : 'gmail',
            auth: {
                user: "myexpenses.product@gmail.com",
                pass: "allan100291"
            }
        });

        let options = {
            from : "myexpenses.product@gmail.com",
            to: email,
            subject: "Recuperação de senha - My Expenses",
            text: `Olá, obrigado por utilizar o APP My Expenses, foi gerada uma nova senha, acesse agora com : ${passwordDefault}`
        }

        await transporter.sendMail(options);

        return { "status": true, "message": "Senha encaminhada com sucesso." }
    }

}

export default { userService };