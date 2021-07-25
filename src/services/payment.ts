import payment from "../models/payment";
import { Op } from 'sequelize';
interface IPayment {
    name : string;
    valor: number;
    paymentMethod: string;
    category: string;
    description: string;
    datePayment: string;
    installments: string;
    paymentRefer: string;
    registerRefer: string;
}

class paymentService {

    async createPayment ({name, valor, paymentMethod, category, description, datePayment, installments, paymentRefer,registerRefer} : IPayment) {

            const info = [name, valor, paymentMethod, category, description, datePayment, installments, paymentRefer, registerRefer];

            const emptyValue = info.indexOf("");

            if (emptyValue != -1) {
                return { "status": false, "message": "Todos os campos devem ser preenchidos." };
            };

            const valueConvert = valor.toString().replace(',', ".");

            const floatValor = parseFloat(valueConvert);

            const installmentsSplit = installments.split("/");

            const datePaymentSplit = datePayment.split("/");

            const nameLower = name.toLowerCase();

            if (parseInt(installmentsSplit[1]) > 1) {
                let mounth = parseInt(datePaymentSplit[0]);

                let year = parseInt(datePaymentSplit[1]);

                let parcelInit = parseInt(installmentsSplit[0]);

                let parcelFinish = parseInt(installmentsSplit[1]);

                for (var i = 0; i < parseInt(installmentsSplit[1]); i++) {
                    const paymentCreate = await payment.paymentCreate.create({
                        Name: nameLower,
                        Valor: floatValor,
                        PaymentMethod: paymentMethod,
                        Category: category,
                        Description: description,
                        DatePayment: `${mounth}/${year}`,
                        Installments: `${parcelInit}/${parcelFinish}`,
                        PaymentRefer: paymentRefer,
                        RegisterRefer: registerRefer
                    });
        
                    if (!paymentCreate) {
                        return { "status": false, "message": "Erro ao cadastrar um novo pagamento." }
                    };

                    if (mounth == 12) {
                        mounth = 0
                        year += 1
                    }
                    mounth += 1
                    parcelInit += 1
                }

                return { "status": true, "message": "Pagamento registrado com sucesso." };
            }else {

                const paymentCreate = await payment.paymentCreate.create({
                    Name: nameLower,
                    Valor: floatValor,
                    PaymentMethod: paymentMethod,
                    Category: category,
                    Description: description,
                    DatePayment: datePayment,
                    Installments: installments,
                    PaymentRefer: paymentRefer,
                    RegisterRefer: registerRefer
                });
    
                if (!paymentCreate) {
                    return { "status": false, "message": "Erro ao cadastrar um novo pagamento." }
                };
    
                return { "status": true, "message": "Pagamento registrado com sucesso." };
            }


    };

    async editPayment (id: string, {name, valor, paymentMethod, category, description, datePayment, installments, paymentRefer,registerRefer} : IPayment) {

        const info = [name, valor, paymentMethod, category, description, datePayment, installments, paymentRefer, registerRefer];

        const emptyValue = info.indexOf("");
        if (emptyValue != -1) {
            return { "status": false, "message": "Todos os campos devem ser preenchidos." };
        };

        const paymentExists = await payment.paymentCreate.findAll({
            where: {
                id: id
            }
        });

        if (paymentExists.length <= 0) {
            return { "status": false, "message": "Nenhum pagamento foi localizado." };
        };

        const valueConvert = valor.toString().replace(',', ".");

        const floatValor = parseFloat(valueConvert);

        const nameLower = name.toLowerCase();

        const updatePayment = await payment.paymentCreate.update({
            Name: nameLower,
            Valor: floatValor,
            PaymentMethod: paymentMethod,
            Category: category,
            Description: description,
            DatePayment: datePayment,
            Installments: installments,
            PaymentRefer: paymentRefer,
            RegisterRefer: registerRefer
        }, {
            where: {
                id: id
            }
        });

        if (!updatePayment) {
            return { "status": false, "message": "Erro ao atualizar o pagamento." }
        };

        return { "status": true, "message": "Pagamento atualizado com sucesso." }
    };

    async deletePayment (id: string) {

        if (!id) {
            return { "status": false, "message": "Erro ao deletar o pagamento." }
        };

        const paymentExists = await payment.paymentCreate.findAll({
            where: {
                id: id
            }
        });

        if (!paymentExists) {
            return { "status": false, "message": "Nenhum pagamento foi localizado para deletar." }
        };

        const deletePayment = await payment.paymentCreate.destroy({
            where: {
                id: id
            }
        });

        if (!deletePayment) {
            return { "status": false, "message": "Erro ao deletar o pagamento." }
        };

        return { "status": true, "message": "Pagamento deletado com sucesso." };
    };

    async deletePaymentAll (name : string) {
        if (!name) {
            return { "status": false, "message": "O campo nome deve ser preenchido." }
        };

        const nameLower = name.toLowerCase();

        const nameExists = await payment.paymentCreate.findAll({
            raw: true,
            where: {
                Name: nameLower
            }
        });

        if (nameExists.length <= 0) {
            return { "status": false, "message": "Nenhum pagamento localizado." }
        };

        const deleteAllPayment = await payment.paymentCreate.destroy({
            where: {
                Name: nameLower
            }
        });

        if  (!deleteAllPayment) {
            return { "status": false, "message": "Erro ao deletar o pagamento." }
        };

        return { "status": true, "message": "Todos as parcelas desse pagamento foram deletadas." };
    };

    async getPayment (name : string) {

        if (name == "all") {
            const getAllPayments = await payment.paymentCreate.findAll({
                raw: true
            });

            if (getAllPayments.length <= 0) {
                return { "status": false, "message": "Nenhum pagamento foi encontrado." }
            };

            return { "status": true, "data": getAllPayments };
        }

        const nameLower = name.toLowerCase();

        const getPaymentName = await payment.paymentCreate.findAll({
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

        if (getPaymentName.length <= 0) {
            return { "status": false, "message": "Nenhum pagamento localizado." }
        };

        return { "status": true, "data": getPaymentName };
    };

    async getPaymentMonth (month : string, year : string) {

        if (!month || !year) {
            return { "status": false, "message": "Informe mês e ano que deseja consultar." }
        };

        const getTotalPayments = await payment.paymentCreate.findAll({
            raw: true,
            where: {
               DatePayment: `${month}/${year}` 
            }
        });

        if (getTotalPayments.length <= 0) {
            return { "status": true, "data": {"Valor": 0} }
        };
        
        return { "status": true, "data": getTotalPayments }
    }
}

export default { paymentService };