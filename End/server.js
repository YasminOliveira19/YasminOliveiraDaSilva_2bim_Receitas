const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Configuração do pool de conexão com PostgreSQL
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

// Middleware para parsear JSON
app.use(express.json());

// Middleware CORS (Verificação de origem da Servidorina)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/listarReceitas', async (req, res) => {
    const resposta = await pool.query(`SELECT * FROM CATEGORIA C, RECEITA R 
    WHERE C.id_categoria = R.id_categoria`);
    const receitas = await resposta.rows;

    console.log(receitas);
    res.send({ receitas: receitas, status: "sucesso" })
})

app.post('/BuscarCategoria', async (req, res) => {
    try {
        const Categoria = req.body.categoria;

        const resposta = await pool.query(`SELECT * FROM CATEGORIA C, RECEITA R 
            WHERE C.id_categoria = R.id_categoria 
            AND LOWER(C.nome_categoria) LIKE LOWER('${Categoria}');`);

        const categorias = await resposta.rows;

        console.log(categorias);
        res.send({ categorias: categorias, status: "sucesso" });
    } catch {
        return res.status(500).json({
            status: "erro",
        })
    }
});


app.post('/BuscarIngrediente', async (req, res) => {
    try {
        const Ingrediente = req.body.ingrediente;

        const resposta = await pool.query(`SELECT * FROM  CATEGORIA C, RECEITA R 
            WHERE C.id_categoria = R.id_categoria AND LOWER(ingredientes) LIKE LOWER('%${Ingrediente}%');`);

        const ingredientes = await resposta.rows;

        console.log(ingredientes);
        res.send({ ingredientes: ingredientes, status: "sucesso" });
    } catch {
        return res.status(500).json({
            status: "erro",
        })
    }
});


app.post('/BuscarTempo', async (req, res) => {
    try {
        const Tempo = req.body.tempo;

        const resposta = await pool.query(`SELECT * FROM CATEGORIA C, RECEITA R 
            WHERE C.id_categoria = R.id_categoria AND tempo_preparo = ${Tempo}`);

        const tempos = await resposta.rows;

        console.log(tempos);
        res.send({ tempos: tempos, status: "sucesso" });
    } catch {
        return res.status(500).json({
            status: "erro",
        })
    }
});


app.listen(port, () => {
    console.log("Fala galerinha, tudo bem com vocês?")
})


