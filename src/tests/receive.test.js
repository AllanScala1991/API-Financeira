const supertest = require('supertest');
const config = require('./config');

describe('Receive route tests', () => {
    let id;

    it("Create receive success", () => {

        return supertest(config.BASE_URL)
                .post('/receive')
                .set('Authorization', `Bearer ${config.TOKEN}`)
                .send({
                    "name": 'Super Salario',
                    "valor": "500,00",
                    "receiveMethod": "Dinheiro",
                    "description": "Salario do mes",
                    "dateReceive": "8/2099",
                    "receiveRefer": "Teste",
                    "registerRefer": "Teste"
                })
                .then(response => {
                    expect(response.body.status).toEqual(true);
                    expect(response.body.message).toEqual("Recebimento registrado com sucesso.");
                })
    });

    it("Create receive error", () => {

        return supertest(config.BASE_URL)
                .post('/receive')
                .set('Authorization', `Bearer ${config.TOKEN}`)
                .send({
                    "name": '',
                    "valor": "",
                    "receiveMethod": "Dinheiro",
                    "description": "Salario do mes",
                    "dateReceive": "8/2099",
                    "receiveRefer": "Teste",
                    "registerRefer": "Teste"
                })
                .then(response => {
                    expect(response.body.status).toEqual(false);
                    expect(response.body.message).toEqual("Todos os campos devem ser preenchidos.");
                })
    });

    
    it("Get receive with name - success", () => {

        return supertest(config.BASE_URL)
                .get(`/receive/${config.GET_RECEIVE_NAME}`)
                .set('Authorization', `Bearer ${config.TOKEN}`)
                .then(response => {
                    expect(response.body.status).toEqual(true);
                    expect(response.body.data.length).toBeGreaterThan(0);
                    id = response.body.data[0].id;
                })
    });

    it("Get all receives - success", () => {

        return supertest(config.BASE_URL)
                .get(`/receive/all`)
                .set('Authorization', `Bearer ${config.TOKEN}`)
                .then(response => {
                    expect(response.body.status).toEqual(true);
                    expect(response.body.data.length).toBeGreaterThan(0);
                })
    });

    it("Get receive - error", () => {

        return supertest(config.BASE_URL)
                .get(`/receive/error`)
                .set('Authorization', `Bearer ${config.TOKEN}`)
                .then(response => {
                    expect(response.body.status).toEqual(false);
                    expect(response.body.message).toEqual("Nenhum recebimento localizado.");
                })
    });

    it("Edit receive  - success", () => {

        return supertest(config.BASE_URL)
                .put(`/receive`)
                .set('Authorization', `Bearer ${config.TOKEN}`)
                .send({
                    "id": `${id}`,
                    "name": 'Super Salario2',
                    "valor": "500,00",
                    "receiveMethod": "Dinheiro",
                    "description": "Salario do mes",
                    "dateReceive": "8/2099",
                    "receiveRefer": "Teste",
                    "registerRefer": "Teste"
                })
                .then(response => {
                    expect(response.body.status).toEqual(true);
                    expect(response.body.message).toEqual("Recebimento atualizado com sucesso.");
                })
    });

    it("Edit receive  - error", () => {

        return supertest(config.BASE_URL)
                .put(`/receive`)
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
                    expect(response.body.message).toEqual("Nenhum recebimento localizado.");
                })
    });

    it("Delete receive  - success", () => {

        return supertest(config.BASE_URL)
                .delete(`/receive/${id}`)
                .set('Authorization', `Bearer ${config.TOKEN}`)
                .then(response => {
                    expect(response.body.status).toEqual(true);
                    expect(response.body.message).toEqual("Recebimento deletado com sucesso.")
                })
    });

    it("Delete receive  - error", () => {

        return supertest(config.BASE_URL)
                .delete(`/receive/aaa111`)
                .set('Authorization', `Bearer ${config.TOKEN}`)
                .then(response => {
                    expect(response.body.status).toEqual(false);
                    expect(response.body.message).toEqual("Nenhum recebimento localizado.")
                })
    });
})