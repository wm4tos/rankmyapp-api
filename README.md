# Rest + Express + JWT + Mongoose + Axios + GoogleMapsApi + Docker

## Dependências
- Docker
- Docker compose

## Executando o projeto
1. Criar um arquivo .env com base no arquivo example.env
    ### Exemplo de arquivo
    ```
    PORT = 3000
    MONGODB_URI = mongodb://test_rankmyapp_db
    MONGODB_DATABASE = test_rankmyapp
    NODE_ENV=development
    SECRET=3OI15HT3QUODBHYI3g1iugYIEG31BIRUFBEHIUFHFE
    ```

    - `PORT`: Porta do servidor
    - `MONGODB_URI`: URI do mongo (URI deve ser igual ao nome do container, no caso `test_rankmyapp_db`)
    - `MONGODB_DATABASE`: Nome do banco utilizado pela aplicação.
    - `NODE_ENV`: Ambiente da aplicação.=
2. Executar a aplicação
    > docker-compose up

## API
Todas as chamadas e exemplos da API estão [neste link](https://documenter.getpostman.com/view/8024266/SVn3tbMi).

## Tem alguma dúvida ou sugestão?

Manda no [meu e-mail](mailto:wrickee@gmail.com)! xD
