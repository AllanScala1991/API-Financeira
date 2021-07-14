import { Request, Response } from 'express';
import categoryService from '../services/paymentCategory';

class paymentCategoryController {

    async createPaymentCategory (request: Request, response: Response) {
        const name = request.body.name;

        const paymentCreateCategory = new categoryService.paymentCategoryService();

        const newPaymentCategory = await paymentCreateCategory.createCategory(name);

        return response.json(newPaymentCategory);
    };

    async editPaymentCategory (request: Request, response: Response) {
        const {id, name} = request.body;

        const paymentEditCategory = new categoryService.paymentCategoryService();

        const paymentCategoryEdit = await paymentEditCategory.editCategory(id, name);

        return response.json(paymentCategoryEdit);
    };

    async deletePaymentCategory (request: Request, response: Response) {
        const id = request.body.id;

        const paymentDeleteCategory = new categoryService.paymentCategoryService();

        const paymentCategoryDelete = await paymentDeleteCategory.deleteCategory(id);

        return response.json(paymentCategoryDelete);
    };

    async getPaymentCategory (request: Request, response: Response) {
        const name = request.params.name;

        const paymentGetCategory = new categoryService.paymentCategoryService();

        const paymentCategoryGet = await paymentGetCategory.getCategory(name);

        return response.json(paymentCategoryGet);
    }
}

export default { paymentCategoryController };