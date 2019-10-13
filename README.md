# API
Projeto criado para o teste técnico da [RankMyApp](https://www.rankmyapp.com/pt-br/).

## Tecnologias
- NodeJS
- ExpressJS
- Mongoose

## Executando o projeto
1. Criar um arquivo .env com base no arquivo example.env
    ### Exemplo do arquivo
    ```
    PORT=3000
    MONGODB_URI=mongodb://test_rankmyapp_db
    MONGODB_DATABASE=test_rankmyapp
    NODE_ENV=development
    SECRET=3OI15HT3QUODBHYI3g1iugYIEG31BIRUFBEHIUFHFE
    EBAY_APP_NAME={YOUR_APP_NAME}
    EBAY_GLOBAL_ID=EBAY-US
    ```

    - `PORT`: Porta do servidor
    - `MONGODB_URI`: URI do mongo (URI deve ser igual ao nome do container, no caso `test_rankmyapp_db`)
    - `MONGODB_DATABASE`: Nome do banco utilizado pela aplicação.
    - `NODE_ENV`: Ambiente da aplicação.
    - `SECRET`: Chave utilizada pelo JWT.
    - `EBAY_APP_NAME`: Chave da aplicação no eBay. Se não tiver uma conta de desenvolvedor no eBay, faça [cadastro](https://developer.ebay.com/signin?tab=register). Depois de logado, [solicite sua chave](https://developer.ebay.com/my/keys)
    - `EBAY_GLOBAL_ID`: Lugar onde será feita a busca no eBay. Você pode ver uma lista de lugares [aqui](https://developer.ebay.com/DevZone/finding/CallRef/Enums/GlobalIdList.html)

2. Instalar as dependências

    `npm install`

3. Executar o projeto

    `npm run dev`  

## Documentação
Todas as rotas e exemplos da API estão [neste link](https://documenter.getpostman.com/view/8024266/SVtWw7Mw?version=latest).

## Tem alguma dúvida ou sugestão?

Manda no [meu e-mail](mailto:wrickee@gmail.com)! xD
