// usersController.js

const express = require('express');
const router = express.Router();
const db = require('./db'); // Para interagir com o banco de dados
const bcrypt = require('bcrypt'); // Para criptografar e comparar senhas



// Função para cadastro de usuário
const registerUser = async (req, res) => {
    const { username, sobrenome, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Criptografa a senha

        // Inserir o usuário no banco de dados (use prepared statement para segurança)
        const [result] = await db.execute('INSERT INTO users (username, sobrenome, email, password) VALUES (?, ?, ?, ?)', [username, sobrenome, email, hashedPassword]);

        if (result.affectedRows === 1) {
            res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
        } else {
            res.status(500).json({ error: 'Erro ao cadastrar usuário' });
        }
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') { //Tratamento de erro para email ou username duplicado
            res.status(409).json({error: 'Email ou nome de usuário já existe.'});
        } else {
            console.error('Erro ao cadastrar usuário:', error);
            res.status(500).json({ error: 'Erro ao cadastrar usuário' });
        }
    }
};
// Função para login de usuário


// Função para login de usuário


const loginUser = async (req, res) => {  // Adicione o "async" aqui
    const { email, password } = req.body;

    console.log("Email recebido:", email);
    console.log("Senha recebida:", password);

    // Validação básica de entrada (adicione mais validações conforme necessário)
    if (!email || !password) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }

    try {
        // Busca o usuário pelo e-mail no banco de dados (prepared statement para segurança)
        const [rows] =  db.execute('SELECT * FROM users WHERE email = ?', [email]);
        console.log("Resultado da consulta no banco:", rows); // Verifique o que está sendo retornado do banco

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const user = rows[0];

        // Verifica se a senha está armazenada (redundante se a tabela garante que 'password' não seja NULL)
        if (!user.password) {
            return res.status(500).json({ error: 'Senha não encontrada no banco de dados' });
        }

        // Compara a senha fornecida com a senha criptografada no banco
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Senha incorreta' });
        }

        // Armazena informações do usuário na sessão
        req.session.user = {
            id: user.id,
            username: user.username,
            email: user.email
        };

        res.status(200).json({ message: 'Login bem-sucedido!' });
        console.log("Dados recebidos no login:", req.body);

    } catch (error) {
        console.error("Erro ao realizar login:", error);
        res.status(500).json({ error: 'Erro ao realizar login' });
    }
};





// Definindo as rotas usando as funções criadas acima
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
