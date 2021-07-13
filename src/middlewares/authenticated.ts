import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import config from '../config/config';

function userAuthenticated (request: Request, response: Response, next: NextFunction) {
    const token = request.headers.authorization;

    if (!token) {
        return response.status(401).json({
            "status": false,
            "message": "Token inválido ou expirado."
        });
    };

    const setToken = token.split(" ");

    try {
        const decode = verify(setToken[1], config.secretKey);

        return next();

    } catch (error) {
        return response.status(401).json({
            "status": false,
            "message": `Erro desconhecido: ${error}`
        }); 
    }
}

export default userAuthenticated;

