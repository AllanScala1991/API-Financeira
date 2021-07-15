import { Request, Response } from 'express';
import typesService from '../services/paymentType';

class paymentTypeController {
    
    async createPaymentType (request: Request, response: Response) {
        const name =  request.body.name;

        const typePaymentCreate = new typesService.paymentTypeService();

        const paymentTypeCreate = await typePaymentCreate.createType(name);

        return response.json(paymentTypeCreate);
    };

    async editPaymentType (request: Request, response: Response) {
        const {id, name} = request.body;

        const typePaymentEdit = new typesService.paymentTypeService();

        const paymentTypeEdit = await typePaymentEdit.editType(id, name);

        return response.json(paymentTypeEdit);
    };

    async deletePaymentType (request: Request, response: Response) {
        const id = request.params.id;

        const typePaymentDelete = new typesService.paymentTypeService();

        const paymentTypeDelete = await typePaymentDelete.deleteType(id);

        return response.json(paymentTypeDelete);
    };

    async getPaymentType (request: Request, response: Response) {
        const name = request.params.name;

        const typePaymentGet = new typesService.paymentTypeService();

        const paymentTypeGet = await typePaymentGet.getTypes(name);

        return response.json(paymentTypeGet);
    };
}

export default { paymentTypeController };