const mysql = require('mysql2');

// Configuração do banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'solidacao_db',
    port: 3306
});

// Conectar ao banco
connection.connect((error) => {
    if (error) {
        console.error('Erro ao conectar ao MySQL:', error);
        return;
    }
    console.log('Conectado ao MySQL!');
    
    // Criar tabela se não existir
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS beneficiarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(100) NOT NULL,
            telefone VARCHAR(20) NOT NULL,
            email VARCHAR(100),
            endereco TEXT NOT NULL,
            bairro VARCHAR(50) NOT NULL,
            cep VARCHAR(10) NOT NULL,
            pessoas INT NOT NULL,
            renda DECIMAL(10,2),
            observacoes TEXT
        )
    `;
    
    connection.query(createTableQuery, (error) => {
        if (error) {
            console.error('Erro ao criar tabela:', error);
        } else {
            console.log('Tabela beneficiarios verificada/criada!');
        }
    });
});

module.exports = connection;