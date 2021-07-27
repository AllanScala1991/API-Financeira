import { Request, Response } from 'express';
import receive from '../services/receive';

class receiveController {
    
    async createReceive (request: Request, response: Response) {
        const {name, valor, receiveMethod, description, dateReceive, receiveRefer, registerRefer} = request.body;

        const newReceive = new receive.receiveService();

        const receiveCreate = await newReceive.createReceive({name, valor, receiveMethod, description, dateReceive, receiveRefer, registerRefer});

        return response.json(receiveCreate);
    };

    async editReceive (request: Request, response: Response) {
        const {id, name, valor, receiveMethod, description, dateReceive, receiveRefer, registerRefer} = request.body;

        const newReceive = new receive.receiveService();

        const updateReceive = await newReceive.editReceive(id, {name, valor, receiveMethod, description, dateReceive, receiveRefer, registerRefer});

        return response.json(updateReceive);
    };

    async deleteReceive (request: Request, response: Response) {
        const id = request.params.id;

        const newReceive = new receive.receiveService();

        const receiveDelete = await newReceive.deleteReceive(id);

        return response.json(receiveDelete);
    };

    async getReceive (request: Request, response: Response) {
        const name = request.params.name;

        const newReceive = new receive.receiveService();

        const receiveGet = await newReceive.getReceive(name);

        return response.json(receiveGet);
    };

    async getReceiveMonth (request: Request, response: Response) {
        const {month, year} = request.params;

        const ReceiveGet = new receive.receiveService();

        const newReceiveGet = await ReceiveGet.getReceiveMonth(month, year);

        return response.json(newReceiveGet);
    };

    async getReceiveRefer (request: Request, response: Response) {
        const {receiveRefer, dateReceive} = request.params;

        const receiveGet = new receive.receiveService();

        const newReceiveGet = await receiveGet.getReceiveRefer(receiveRefer, dateReceive);

        return response.json(newReceiveGet);
    };
};

export default { receiveController }