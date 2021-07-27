import { Request, Response } from 'express';
import payment from '../services/payment';

class paymentController {

    async createPayment (request: Request, response: Response) {
        const { name, valor, paymentMethod, category, description, datePayment, installments, paymentRefer, registerRefer } = request.body;

        const paymentCreate = new payment.paymentService();

        const newPayment = await paymentCreate.createPayment({name, valor, paymentMethod, category, description, datePayment, installments, paymentRefer, registerRefer});

        return response.json(newPayment);
    };

    async editPayment (request: Request, response: Response) {
        const { id, name, valor, paymentMethod, category, description, datePayment, installments, paymentRefer, registerRefer } = request.body;

        const paymentEdit = new payment.paymentService();

        const newPaymentEdit = await paymentEdit.editPayment(id, {name, valor, paymentMethod, category, description, datePayment, installments, paymentRefer, registerRefer});

        return response.json(newPaymentEdit);
    };

    async deletePayment (request: Request, response: Response) {
        const id = request.params.id;

        const paymentDelete = new payment.paymentService();

        const newPaymentDelete = await paymentDelete.deletePayment(id);

        return response.json(newPaymentDelete);
    };

    async deleteAllPayment (request: Request, response: Response) {
        const name = request.params.name;

        const newDelete = new payment.paymentService();

        const allPaymentDelete = await newDelete.deletePaymentAll(name);

        return response.json(allPaymentDelete);
    };

    async getPayment (request: Request, response: Response) {
        const name = request.params.name;

        const paymentGet = new payment.paymentService();

        const newPaymentGet = await paymentGet.getPayment(name);

        return response.json(newPaymentGet);
    };

    async getPaymentMonth (request: Request, response: Response) {
        const {month, year} = request.params;

        const paymentGet = new payment.paymentService();

        const newPaymentGet = await paymentGet.getPaymentMonth(month, year);

        return response.json(newPaymentGet);
    };

    async getPaymentRefer (request: Request, response: Response) {
        const { paymentRefer, monthPayment, yearPayment } = request.params;

        const paymentGet = new payment.paymentService();

        const newPaymentGet = await paymentGet.getPaymentRefer(paymentRefer, `${monthPayment}/${yearPayment}`);

        return response.json(newPaymentGet);
    }
};

export default { paymentController };