const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./database');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para cadastrar beneficiário
app.post('/cadastrar-beneficiario', (req, res) => {
    const {
        nome,
        telefone,
        email,
        endereco,
        bairro,
        cep,
        pessoas,
        renda,
        observacoes
    } = req.body;

    const query = `
        INSERT INTO beneficiarios 
        (nome, telefone, email, endereco, bairro, cep, pessoas_familia, renda_familiar, observacoes) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(query, [
        nome,
        cpf || null,
        telefone,
        email || null,
        endereco,
        bairro,
        cep,
        pessoas,
        renda || null,
        observacoes || null
    ], (error, results) => {
        if (error) {
            console.error('Erro ao cadastrar:', error);
            return res.status(500).json({ 
                success: false, 
                message: 'Erro interno do servidor' 
            });
        }

        res.json({ 
            success: true, 
            message: 'Cadastro realizado com sucesso!',
            id: results.insertId 
        });
    });
});

// Rota para listar beneficiários (opcional - para admin)
app.get('/beneficiarios', (req, res) => {
    connection.query('SELECT * FROM beneficiarios ORDER BY data_cadastro DESC', (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Erro ao buscar dados' });
        }
        res.json(results);
    });
});

// Rota de teste
app.get('/', (req, res) => {
    res.json({ message: 'API SolidAção funcionando!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});