import paymentType from '../models/paymentType';
import { Op } from 'sequelize';

class paymentTypeService {

    async createType (name: string) {
        if (!name) {
            return { "status": false, "message": "Insira um nome válido." }
        };

        const nameLower = name.toLowerCase();

        const nameExists = await paymentType.typeCreate.findAll({
            raw: true,
            where: {
                Name: nameLower
            }
        });

        if (nameExists.length > 0) {
            return { "status": false, "message": "Já existe um tipo de pagamento com esse nome." }
        };

        const typeRegister = await paymentType.typeCreate.create({
            Name: nameLower
        });

        if (!typeRegister) {
            return { "status": false, "message": "Erro ao criar o tipo de pagamento." }
        };

        return { "status": true, "message": "Tipo de pagamento registrado com sucesso." };
    };

    async editType (id: string, name: string) {
        if (!id || !name) {
            return { "status": false, "message": "Erro ao editar tipo de pagamento." }
        };

        const typeExists = await paymentType.typeCreate.findAll({
            raw: true,
            where: {
                id: id
            }
        });

        if (typeExists.length <= 0) {
            return { "status": false, "message": "Nenhum tipo encontrado para editar." }
        };

        const nameLower = name.toLowerCase();

        const typeUpdate = await paymentType.typeCreate.update({
            Name: nameLower
        }, {
            where: {
                id: id
            }
        });

        if (!typeUpdate) {
            return { "status": false, "message": "Erro ao atualizar o tipo de pagamento." }
        };

        return { "status": true, "message": "Tipo de pagamento atualizado com sucesso." };
    };

    async deleteType (id: string) {
        if (!id) {
            return { "status": false, "message": "Erro ao deletar o tipo de pagamento." }
        };

        const typeExists = await paymentType.typeCreate.findAll({
            raw: true,
            where: {
                id: id
            }
        });

        if (typeExists.length <= 0) {
            return { "status": false, "message": "Nenhum tipo de pagamento localizado para deletar." }
        };

        const typeDelete = await paymentType.typeCreate.destroy({
            where: {
                id: id
            }
        });

        if (!typeDelete) {
            return { "status": false, "message": "Erro ao deletar o tipo de pagamento." }
        };

        return { "status": true, "message": "Tipo de pagamento deletado com sucesso." };
    };

    async getTypes (name : string) {
        if (name == "all") {
            const typeGetAll = await paymentType.typeCreate.findAll({raw: true});

            if (typeGetAll.length <= 0) {
                return { "status": false, "message": "Nenhum tipo de pagamento localizado." }
            };

            return { "status": true, "data": typeGetAll };
        }else {

            const nameLower = name.toLowerCase();
    
            const typeGetAll = await paymentType.typeCreate.findAll({
                raw: true,
                where: {
                    Name: {
                        [Op.or] : [
                            {[Op.startsWith]: nameLower},
                            {[Op.endsWith]: nameLower}
                        ]
                    }
                }
            });
    
            if (typeGetAll.length <= 0) {
                return { "status": false, "message": "Nenhum tipo de pagamento localizado." }
            };
    
            return { "status": true, "data": typeGetAll };
        }

    };
}

export default { paymentTypeService };