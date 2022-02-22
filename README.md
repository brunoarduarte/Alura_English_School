# Bem vindo ao meu projeto Alura English School
### Este repositório foi criado no curso de ORM com NodeJS: API com Sequelize e MySQL.
O projeto consiste na criação do back-end para integração com o banco de dados MYSQL utilizando a ORM Sequelize. O algoritmo faz a gestão de pessoas matriculadas, as respectivas matriculas, os niveis, bem como as turmas formadas.

A arquitetura utilizada foi a MSC (Model/Service/Controller) .

## Ambiente de desenvolvimento:
- IDE VSCode 1.64.2
- node v14.18.2
- Linux Ubuntu 20.04.3 LTS

## Dependências:
- "dotenv": "^10.0.0",
- "express": "^4.17.1",
- "mysql2": "^2.3.3",
- "path": "^0.12.7",
- "sequelize": "^7.0.0-alpha.3",
- "sequelize-cli": "^6.3.0"

## Depedência de Desenvolvimento:
- "nodemon": "^2.0.15"

## Instruções para clonagem e Execução:
- Utilizando o terminal, na sua pasta destino, execute o comando _git init_ para iniciar o git no seu local.
- Clone  projeto utilizando o comando _git@github.com:brunoarduarte/Alura_English_School.git_.
- Acesse a pasta _app_english_school_
- Instale as dependência do projeto utilizando o comando _npm install_
- Abra o projeto no VsCode utilizando o comando _code ._
- No terminal execute o comando _npm start_ para inicializar o servidor local
- Certifique-se de ter o MySQL devidamente instalado em sua máquina
- Crie um arquivo .env na raiz do projeto com as variáveis _DB_USERNAME = (seu usuário MySQL)_ e _DB_PASSWORD = (Sua senha do MySQL)_
- Recomenda-se utilizar o Postman para testar as requisições
- Caso a porta 3000 esteja ocupada, recomenda-se utilizar o comando _killall node_ no terminal, liberando a porta 3000.
