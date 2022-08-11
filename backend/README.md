# Front-end students-system
Projeto inciado com a versão 14 do NodeJs, com o banco relacional [PostgreSQL](https://www.postgresql.org/) e o framework [NestJs](https://nestjs.com/). \
Dependências utilizadas:
- [class-validator](https://github.com/typestack/class-validator#readme);
- [TYPEORM](https://typeorm.io/);

## Variáveis:
```bash
DB_USERNAME="postgres"
DB_PORT=5432
DB_DATABASE="playground"
DB_PASSWORD="postgres"
PORT=3004
```
***OBS: Mude as variáveis de ambiente para as informações do seu banco de dados.***

## Para executar o projeto:

- ### `yarn`
- ### `yarn dev`

### Ele estará rodando na porta 3004, caso queira mudar, pare a aplicação e altere a variável "PORT" no arquivo ".env"