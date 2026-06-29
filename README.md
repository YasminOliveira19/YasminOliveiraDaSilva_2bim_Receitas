#  Projeto DW1 - Sistema de Receitas 

##  Sobre o Projeto

Este projeto foi desenvolvido como atividade avaliativa da disciplina de **Desenvolvimento Web 1 (DW1)** - 2º Bimestre de 2026.

A permite consultar um banco de dados de receitas por meio de uma interface web.

A comunicação entre o cliente e o servidor é realizada utilizando **JavaScript (Fetch API)**, enquanto o servidor foi desenvolvido com **Node.js** e **Express**, realizando consultas em um banco de dados **PostgreSQL** e retornando os resultados em formato **JSON**.

---

#  Funcionalidades

Oferece as seguintes funcionalidades:

*  Listar todas as receitas cadastradas.
*  Buscar receitas por categoria.
*  Buscar receitas por ingrediente.
*  Buscar receitas pelo tempo de preparo.

Todas as consultas são realizadas diretamente no banco de dados.

---

#  Interface

O projeto possui uma interface visual inspirada em Harry Potter.

Foram utilizados diversos recursos de CSS para melhorar a experiência do usuário, como:

* Fonte personalizada utilizando `@font-face`;
* Layout desenvolvido com Flexbox;
* Cards para exibição das receitas;
* Efeito de vidro utilizando `backdrop-filter`;
* Imagem de fundo fixa;
* Botões com efeito Hover;
* Organização semântica utilizando HTML.

---

#  Tecnologias Utilizadas

## Front-end

* HTML
* CSS
* JavaScript

## Back-end

* Node.js
* Express

## Banco de Dados

* PostgreSQL

## Bibliotecas

* express
* pg
* dotenv

---

#  Banco de Dados

O banco de dados é composto por duas tabelas relacionadas.

## Tabela 1: Categoria

Armazena as categorias das receitas.

Exemplos:

* Sobremesa
* Bolo
* Lanche

## Tabela 2: Receita

Armazena as informações das receitas:

* Nome
* Ingredientes
* Tempo de preparo
* Categoria
* Imagem

Relacionamento:

Categoria (1) --> Receita (N)

---

#  Rotas da API

| Método | Rota               | Função                               |
| ------ | ------------------ | ------------------------------------ |
| GET    | /listarReceitas    | Lista todas as receitas              |
| POST   | /BuscarCategoria   | Busca receitas pela categoria        |
| POST   | /BuscarIngrediente | Busca receitas pelo ingrediente      |
| POST   | /BuscarTempo       | Busca receitas pelo tempo de preparo |

---

#  Fluxo da Aplicação

1. O usuário acessa a página web.

2. O usuário seleciona uma opção de busca.

3. O JavaScript envia uma requisição utilizando a Fetch API.

4. O servidor Node.js recebe a requisição.

5. O servidor consulta o banco PostgreSQL.

6. Os dados são retornados em formato JSON.

7. O JavaScript recebe o JSON e monta dinamicamente os cards das receitas na página.

---

#  Estrutura do Projeto

Projeto DW1 2Bimestre/

│
├── Front/
│   ├── index.html
│   ├── index.css
│   ├── script.js
│   ├── Fonte/
│   └── Imagem/
│
├── End/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   └── .gitignore
│
├── Database/
│   └── Projeto DW1 2Bimestre.sql
│
├── Imagem comida/
│
└── README.md


---

#  Como executar o projeto

## 1. Clonar o repositório


git clone https://github.com/YasminOliveira19/YasminOliveiraDaSilva_2bim_Receitas.git


---

## 2. Instalar as dependências

Dentro da pasta do servidor execute:

npm install

---

## 3. Configurar o arquivo .env

Crie um arquivo chamado `.env` contendo:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=SeuBanco
DB_USER=postgres
DB_PASSWORD=SuaSenha
PORT=3001
```

---

## 4. Criar o banco

Execute o arquivo **banco.sql** utilizando o PGAdmin4.

O arquivo contém:

* criação das tabelas;
* relacionamento entre elas;
* inserção dos registros.

---

## 5. Iniciar o servidor

node server.js

---

## 6. Executar o Front-end

Abra o arquivo **index.html** no navegador.

---

#  Conceitos utilizados

* HTML semântico
* CSS
* Flexbox
* Fetch API
* JSON
* Node.js
* Express
* PostgreSQL
* Comunicação Cliente × Servidor
* Consultas SQL
* Relacionamento entre tabelas

---

#  Desenvolvido por

**Yasmin Oliveira da Silva**

Projeto desenvolvido para a disciplina de **Desenvolvimento Web 1 (DW1)** — 2º Bimestre de 2026.
