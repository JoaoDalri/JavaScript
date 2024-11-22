const mysql = require('mysql2');

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // ou o seu nome de usuário do MySQL
  password: 'OP90!!hj', // sua senha do MySQL
  database: 'meusite01' // o nome do seu banco de dados
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro de conexão: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados como ID ' + connection.threadId);
});

module.exports = connection;
