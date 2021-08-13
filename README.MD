# API

## DESCRIÇÃO
    O que você vai encontrar nessa API:
        - Tipos de Pagamento
        - Categorias de Pagamento
        - Pagamentos
        - Recebimentos
        - Cadastro de novos usuarios
        - Login
        - Autenticação JWT
        - Banco de dados MySql com Sequelize
    
## ROTAS
    USUÁRIO
        - POST "/user" - cria um novo usuário
        - GET "/user/:username" - recebe um usuario
        - DELETE "/user/:id" - deleta um usuário através do ID
        - PUT "/user" - edita um usuário
        - POST "/user/recovery" - envia uma nova senha para o email informado

    LOGIN
        - POST "/login" faz o login

    CATEGORIAS DE PAGAMENTO
        - POST "/category" - Cria uma nova categoria
        - PUT "/category" - Edita uma categoria
        - DELETE "/category/:id" - Deleta uma categoria
        - GET "/category/:name" - Recebe uma categoria

    TIPOS DE PAGAMENTO
        - POST "/types" - Cria um tipo
        - PUT "/types" - Edita um tipo
        - DELETE "/types/:id" - Deleta um tipo
        - GET "/types/:name" - Recebe um tipo

    PAGAMENTOS
        - POST "/payment" - Cria um novo pagamento
        - PUT "/payment" - Edita um pagamento
        - DELETE "/payment/:id" - Deleta um pagamento
        - DELETE "payment/all/:name" - Deleta varios pagamentos
        - GET "payment/:name" - Recebe um pagamento pelo nome
        - GET "payment/date/:month/:year" - Recebe um pagemento pela data
        - GET "payment/refer/:paymentRefer/:monthPayment/:yearPayment" - Recebe um pagamento por quem cadastrou e pela data

    RECEBIMENTOS
        - POST "/receive" - Cria um novo recebimento
        - PUT "/receive" - Edita um recebimento
        - DELETE "/receive/:id" - Deleta um recebimento
        - GET "receive/:name" - Recebe um recebimento pelo nome
        - GET "receive/date/:month/:year" - Recebe um recebimento pela data
        - GET "receive/refer/:receiveRefer/:monthPayment/:yearPayment" - Recebe um recebimento por quem cadastrou e pela data