const supertest = require('supertest');
const config = require('./config');

describe('Payment route tests', () => {
    let id;

    it("Create payment success", () => {

        return supertest(config.BASE_URL)
                .post('/payment')
                .set('Authorization', `Bearer ${config.TOKEN}`)
                .send({
                    "name": 'Super Carro',
                    "valor": "500,00",
                    "paymentMethod": "Dinheiro",
                    "category": "Automoveis",
                    "description": "Fiat Punto",
                    "datePayment": "8/2099",
                    "installments": "1/1",
                    "paymentRefer": "Teste",
                    "registerRefer": "Teste"
                })
                .then(response => {
                    expect(response.body.status).toEqual(true);
                    expect(response.body.message).toEqual("Pagamento registrado com sucesso.");
                })
    });

    it("Create payment error", () => {

        return supertest(config.BASE_URL)
                .post('/payment')
                .set('Authorization', `Bearer ${config.TOKEN}`)
                .send({
                    "name": '',
                    "valor": "",
                    "paymentMethod": "",
                    "category": "Automoveis",
                    "description": "Fiat Punto",
                    "datePayment": "8/2099",
                    "installments": "1/1",
                    "paymentRefer": "Teste",
                    "registerRefer": "Teste"
                })
                .then(response => {
                    expect(response.body.status).toEqual(false);
                    expect(response.body.message).toEqual("Todos os campos devem ser preenchidos.");
                })
    });

    
    it("Get payment with name - success", () => {

        return supertest(config.BASE_URL)
                .get(`/payment/${config.GET_PAYMENT_NAME}`)
                .set('Authorization', `Bearer ${config.TOKEN}`)
                .then(response => {
                    expect(response.body.status).toEqual(true);
                    expect(response.body.data.length).toBeGreaterThan(0);
                    id = response.body.data[0].id;
                })
    });

    it("Get all payments - success", () => {

        return supertest(config.BASE_URL)
                .get(`/payment/all`)
                .set('Authorization', `Bearer ${config.TOKEN}`)
                .then(response => {
                    expect(response.body.status).toEqual(true);
                    expect(response.body.data.length).toBeGreaterThan(0);
                })
    });

    it("Get payments - error", () => {

        return supertest(config.BASE_URL)
                .get(`/payment/error`)
                .set('Authorization', `Bearer ${config.TOKEN}`)
                .then(response => {
                    expect(response.body.status).toEqual(false);
                    expect(response.body.message).toEqual("Nenhum pagamento localizado.");
                })
    });

    it("Edit payment  - success", () => {

        return supertest(config.BASE_URL)
                .put(`/payment`)
                .set('Authorization', `Bearer ${config.TOKEN}`)
                .send({
                    "id": `${id}`,
                    "name": 'NameEdited',
                    "valor": "1000",
                    "paymentMethod": "Cars",
                    "category": "Automoveis",
                    "description": "Fiat Punto",
                    "datePayment": "8/2099",
                    "installments": "1/1",
                    "paymentRefer": "Teste",
                    "registerRefer": "Teste"
                })
                .then(response => {
                    expect(response.body.status).toEqual(true);
                    expect(response.body.message).toEqual("Pagamento atualizado com sucesso.");
                })
    });

    it("Edit payment  - error", () => {

        return supertest(config.BASE_URL)
                .put(`/payment`)
                .set('Authorization', `Bearer ${config.TOKEN}`)
                .send({
                    "id": `aaa222`,
                    "name": 'NameEdited',
                    "valor": "1000",
                    "paymentMethod": "Cars",
                    "category": "Automoveis",
                    "description": "Fiat Punto",
                    "datePayment": "8/2099",
                    "installments": "1/1",
                    "paymentRefer": "Teste",
                    "registerRefer": "Teste"
                })
                .then(response => {
                    expect(response.body.status).toEqual(false);
                    expect(response.body.message).toEqual("Nenhum pagamento foi localizado.");
                })
    });

    it("Delete payment  - success", () => {

        return supertest(config.BASE_URL)
                .delete(`/payment/${id}`)
                .set('Authorization', `Bearer ${config.TOKEN}`)
                .then(response => {
                    expect(response.body.status).toEqual(true);
                    expect(response.body.message).toEqual("Pagamento deletado com sucesso.")
                })
    });

    it("Delete payment  - error", () => {

        return supertest(config.BASE_URL)
                .delete(`/payment/aaa111`)
                .set('Authorization', `Bearer ${config.TOKEN}`)
                .then(response => {
                    expect(response.body.status).toEqual(false);
                    expect(response.body.message).toEqual("Erro ao deletar o pagamento.")
                })
    });
})