import paymentCategory from "../models/paymentCategory";


class paymentCategoryService {

    async createCategory (name: string) {
        if (!name) {
            return { "status": false, "message": "Insira um nome válido." }
        };

        const categoryExists = await paymentCategory.categoryCreate.findAll({
            raw: true,
            where: {
                Name: name
            }
        });

        if (categoryExists.length > 0) {
            return { "status": false, "message": "Já existe uma categoria com esse nome." }
        };

        const categoryCreate = await paymentCategory.categoryCreate.create({
            Name: name
        });

        if (!categoryCreate) {
            return { "status": false, "message": "Erro ao criar uma nova categoria, tente novamente." }
        };

        return { "status": true, "message": "Categoria registrada com sucesso." };
    };

    async editCategory (id : string, name: string) {
        if (!name) {
            return { "status": false, "message": "Erro ao atualizar a categoria, tente novamenete." }
        };

        const categoryExists = await paymentCategory.categoryCreate.findAll({
            raw: true,
            where: {
                id: id
            }
        });

        if (categoryExists.length <= 0) {
            return { "status": false, "message": "Erro ao atualizar a categoria, tente novamenete." }
        }

        const updateCategory = await paymentCategory.categoryCreate.update({
            Name: name
        }, {
            where: {
                id: id
            }
        });

        if (!updateCategory) {
            return { "status": false, "message": "Erro ao atualizar a categoria, tente novamenete." }
        };

        return { "status": true, "message": "Categoria editada com sucesso." }
    };

    async deleteCategory (id: string) {
        if (!id) {
            return { "status": false, "message": "Erro ao deletar a categoria." }
        }

        const idExists = await paymentCategory.categoryCreate.findAll({
            raw: true,
            where: {
                id: id
            }
        });

        if (idExists.length <= 0) {
            return { "status": false, "message": "Erro ao deletar a categoria." }
        }

        const categoryDelete = await paymentCategory.categoryCreate.destroy({
            where: {
                id : id
            }
        });

        if (!categoryDelete) {
            return { "status": false, "message": "Erro ao deletar a categoria." }
        }

        return { "status": true, "message": "Categoria deletada com sucesso." }
    };

    async getCategory (name: string) {
        if (name == "all") {
            const getAllCategory = await paymentCategory.categoryCreate.findAll({
                raw: true
            });

            if (getAllCategory.length <=0) {
                return { "status": false, "message": "Nenhuma categoria localizada." }
            };

            return { "status": true, "data": getAllCategory }
        };

        const getCategoryWithName = await paymentCategory.categoryCreate.findAll({
            raw: true,
            where:  {
                Name: name
            }
        });

        if (getCategoryWithName.length <= 0) {
            return { "status": false, "message": "Nenhuma categoria localizada." }
        };

        return { "status": true, "date": getCategoryWithName }
    };

}

export default { paymentCategoryService };