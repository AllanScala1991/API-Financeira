import receive from "../models/receive";

interface IReceive {
    name: string;
    valor: number;
    receiveMethod: string;
    description: string;
    dateReceive: string;
    receiveRefer: string;
    registerRefer: string;
};

class receiveService {
    
    async createReceive ({name, valor, receiveMethod, description, dateReceive, receiveRefer, registerRefer}: IReceive) {
        const info = [name, valor, receiveMethod, description, dateReceive, receiveRefer, registerRefer];

        const emptyValue = info.indexOf("");

        if (emptyValue != -1) {
            return { "status": false, "message": "Todos os campos devem ser preenchidos." };
        };

        const valueConvert =  valor.toString().replace(',', '.');

        const floatValor = parseFloat(valueConvert);

        const nameLower = name.toLowerCase();

        const receiveCreate = await receive.receiveCreate.create({
            Name: nameLower,
            Valor: floatValor,
            ReceiveMethod: receiveMethod,
            Description: description,
            DateReceive: dateReceive,
            ReceiveRefer: receiveRefer,
            RegisterRefer: registerRefer
        });

        if (!receiveCreate) {
            return { "status": false, "message": "Erro ao cadastrar o recebimento." }
        };

        return { "status": true, "message": "Recebimento registrado com sucesso." };
    };

    async editReceive (id: string, {name, valor, receiveMethod, description, dateReceive, receiveRefer, registerRefer}: IReceive) {

        const info = [name, valor, receiveMethod, description, dateReceive, receiveRefer, registerRefer];

        const emptyValue = info.indexOf("");

        if (emptyValue != -1) {
            return { "status": false, "message": "Todos os campos devem ser preenchidos." };
        };

        const receiveExists = await receive.receiveCreate.findAll({
            raw: true,
            where: {
                id: id
            }
        });

        const valueConvert =  valor.toString().replace(',', '.');

        const floatValor = parseFloat(valueConvert);

        if (receiveExists.length <= 0) {
            return { "status": false, "message": "Nenhum recebimento localizado." }
        };

        const nameLower = name.toLowerCase();

        const updateReceive = await receive.receiveCreate.update({
            Name: nameLower,
            Valor: floatValor,
            ReceiveMethod: receiveMethod,
            Description: description,
            DateReceive: dateReceive,
            ReceiveRefer: receiveRefer,
            RegisterRefer: registerRefer
        },{
            where: {
                id: id
            }
        });

        if (!updateReceive) {
            return { "status": false, "message": "Erro ao atualizar o recebimento." }
        };

        return { "status": true, "message": "Recebimento atualizado com sucesso." };
    };

    async deleteReceive (id: string) {
        if (!id) {
            return { "status": false, "message": "Erro ao deletar o recebimento." }
        };

        const receiveExists = await receive.receiveCreate.findAll({
            raw: true,
            where: {
                id: id
            }
        });

        if (receiveExists.length <= 0) {
            return { "status": false, "message": "Nenhum recebimento localizado." }
        };

        const receiveDelete = await receive.receiveCreate.destroy({
            where: {
                id: id
            }
        });

        if (!receiveDelete) {
            return { "status": false, "message": "Erro ao deletar o recebimento." }
        };

        return { "status": true, "message": "Recebimento deletado com sucesso." }
    };

    async getReceive (name: string) {
        if (name == "all") {
            const getAllReceives = await receive.receiveCreate.findAll({
                raw: true
            });

            if (getAllReceives.length <= 0) {
                return { "status": false, "message": "Nenhum recebimento localizado." }
            };

            return { "status": true, "data": getAllReceives };
        };

        const nameLower = name.toLowerCase();

        const getNameReceive = await receive.receiveCreate.findAll({
            raw: true,
            where: {
                Name: nameLower
            }
        });

        if (getNameReceive.length <= 0) {
            return { "status": false, "message": "Nenhum recebimento localizado." }
        };

        return { "status": true, "data": getNameReceive };
    };
};

export default { receiveService };