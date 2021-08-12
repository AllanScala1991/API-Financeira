const supertest = require('supertest');
const config = require('./config');


describe("Login route tests", () => {

    it("Success login - expect return JWT", () => {

        return supertest(`${config.BASE_URL}`)
                .post('/login')
                .send({
                    'username': config.LOGIN,
                    'password': config.PASSWORD
                })
                .set('Accept', 'application/json')
                .then(response => {
                    expect(response.body.status).toEqual(true);
                    expect(response.statusCode).toEqual(200);
                    expect(response.body.token).not.toBe('');
                })
    });

    it("Error login - without passing login and password", () => {

        return supertest(`${config.BASE_URL}`)
                .post('/login')
                .send({
                    'username': '',
                    'password': ''
                })
                .set('Accept', 'application/json')
                .then(response => {
                    expect(response.body.status).toEqual(false);
                    expect(response.body.message).toEqual('Usuário e senha devem ser preenchidos.');
                })
    });

    it("Erro login - without passing false login and password", () => {
        
        return supertest(`${config.BASE_URL}`)
                .post('/login')
                .send({
                    'username': 'error',
                    'password': 'error'
                })
                .set('Accept', 'application/json')
                .then(response => {
                    expect(response.body.status).toEqual(false);
                    expect(response.body.message).toEqual('Usuário ou senha inválido.');
                })
    });
})