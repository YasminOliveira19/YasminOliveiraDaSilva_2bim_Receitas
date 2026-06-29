DROP TABLE IF EXISTS CATEGORIA, RECEITA;

CREATE TABLE CATEGORIA(
	id_categoria SERIAL PRIMARY KEY,
	nome_categoria VARCHAR(50)
);

CREATE TABLE RECEITA (
    id_receita SERIAL PRIMARY KEY,
    nome_receita VARCHAR(150) NOT NULL,
	ingredientes VARCHAR(500) NOT NULL,
	tempo_preparo INT,
	id_categoria INT,
	imagem VARCHAR (200),
	FOREIGN KEY (id_categoria)
	REFERENCES CATEGORIA(id_categoria)
);


INSERT INTO CATEGORIA(nome_categoria) VALUES 
('Sobremesa'),
('Bolo'), 
('Almoço'), 
('Lanche'), 
('Bebida'), 
('Salgado'), 
('Salada'), 
('Sopa'), 
('Torta'), 
('Café da Manhã');

INSERT INTO RECEITA(nome_receita, ingredientes, tempo_preparo, id_categoria,imagem) VALUES
('Sanduíche de Peru','focaccia, peru, queijo, bacon, abacate, alface, tomate, cebola, tempero',30,4,'/Imagem comida/Sanduíche de Peru.jpg'),
('Hambúrguer','cebola, ovo, tempero, pão, carne moída, queijo, alface, tomate',45,4,'/Imagem comida/Hambúrguer.jpg'),
('Suco de Abóbora','sidra de maça, purê de abóbora, néctar de pessêgo, açucar mascavo, canela em pó, noz moscada, gengibre em pó, baunilha',15,5,'/Imagem comida/Suco de Abóbora.jpg'),
('Cerveja Amanteigada','creme de leite fresco, açucar de confeiteiro, extrato de baunilha, refrigerante creme, cobertura de caramelo, extrato de manteiga',15,5,'/Imagem comida/Cerveja Amanteigada.jpg'),
('Chocolate Quente','leite, creme de leite, chocolate', 15, 5,'/Imagem comida/Chocolate Quente.jpg'),
('Gemada','gemas de ovo, açucar branco, leite, creme de leite fresco, noz moscada, extrato de baunilha, extrato de rum',25,5,'/Imagem comida/Gemada.jpg'),
('Muffins Ingleses','fermento biológico ativo, açucar branco, leite, ovo, manteiga, sal, farinha de trigo, farinha de milho',120,10,'/Imagem comida/Muffins Ingleses.jpg'),
('Bolo de Aniversário','cacau em pó, chocolate meio amargo, água fervente, extrato de baunilha, leite, manteiga, óleo, açúcar mascavo, açúcar branco, ovo, bicarbonato de sódio e farinha de trigo',60,2,'/Imagem comida/Bolo de Aniversário.jpg'),
('Bolo de Cenoura','óleo,açúcar mascavo, açúcar branco, ovo, extrato de baunilha, cenoura, farinha de trigo, fermento, bicarbonato de sódio',90,2,'/Imagem comida/Bolo de Cenoura.jpg'),
('Rosquinhas','farinha,açucar branco, fermento biológico, leite morno, manteiga, ovo, extrato de baunilha, sal',50,10,'/Imagem comida/Rosquinhas.jpg'),
('Crumble','ruibarbo, açúcar branco, amido de milho, suco de limão,manteiga, açúcar mascavo, aveia, farinha de trigo, canela em pó, nozes',50,1,'/Imagem comida/Crumble.jpg'),
('Pé de Moleque','açúcar branco, xarope de milho, água, sal, manteiga, amendoim, extrato de baunilha e bicarbonato de sódio',30,1,'/Imagem comida/Pé de Moleque.jpg'),
('Pastéis da Cornualha','farinha de trigo, sal, manteiga, gordura vegetal, água, contra filé, batatas vermelhas, nabo, cebola, sal grosso, ovo',120,6,'/Imagem comida/Pastéis da Cornualha.jpg'),
('Torta de Carne e Rim','farinha de trigo, sal, gordura vegetal, manteiga, água, acém, azeite, cebola, alho, aipo, cenoura, batata vermelha, cogumelos, caldo de carne, ovo, tempero',140,9,'/Imagem comida/Torta de Carne e Rim.jpg'),
('Sopa de Cebola Francesa','cebola, manteiga,açúcar branco, sal, alho, farinha de trigo, vinho branco seco, caldo de carne, molho Worcestershire, tempero, baguete, queijo',100,8,'/Imagem comida/Sopa de Cebola Francesa.jpg'),
('Torta de Frango com Presunto','frango, cenoura, batata, tempero, caldo de galinha, manteiga, cebola, farinha de trigo, leite, limão, presunto, massa quebrada, ovo',80,9,'/Imagem comida/Torta de Frango com Presunto.jpg'),
('Ensopado de Carne','farinha de trigo, sal grosso, óleo vegetal, cebola, alho, extrato de tomate, vinho tinto, vinagre de vinho tinto, caldo de carne, cenoura, batata, molho inglês, ervilhas, tempero',180,8,'/Imagem comida/Ensopado de Carne.jpg'),
('Almôndegas','carne moída, azeite, leite, cebola, ovo, sal, manteiga, tempero, caldo de carne, creme de leite, farinha de trigo, molho Worcestershire',30,3,'/Imagem comida/Almôndegas.jpg'),
('Batata Assada','batata, azeite, sal, manteiga, alecrim fresco, alho',50,3,'/Imagem comida/Batata Assada.jpg'),
('Salada Ceasar','alface, frango, torrada, molho, queijo',15,7,'/Imagem comida/Salada Ceasar.jpg'),
('Vinagrete','tomate, cebola, pimentão, limão, sal',15,7,'/Imagem comida/Vinagrete.jpg'),
('Pão Caseiro','farinha de trigo, sal, água, óleo, fermento biológico, mel, açúcar branco, manteiga',130,6,'/Imagem comida/Pão Caseiro.jpg');
