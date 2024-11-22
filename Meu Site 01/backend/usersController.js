// backend/usersController.js

const express = require('express');
const router = express.Router();
const db = require('./db'); // Para interagir com o banco de dados
const bcrypt = require('bcrypt'); // Para criptografar e comparar senhas


// Função para cadastro de usuário
const registerUser = (req, res) => {
    const { username, sobrenome, email, password } = req.body;

    console.log("Dados recebidos para cadastro:", { username, sobrenome, email, password });

    // Criptografando a senha
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.log('Erro ao criptografar a senha:', err);
            return res.status(500).json({ error: 'Erro ao criptografar senha' });
        }

        // Inserir o usuário no banco de dados
        db.query('INSERT INTO users (username, sobrenome, email, password) VALUES (?, ?, ?, ?)', [username, sobrenome, email, hashedPassword], (err, result) => {
            if (err) {
                console.log('Erro ao cadastrar usuário:', err);
                return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
            }
            res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
        });
    });
};
// Função para login de usuário
const loginUser = (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao realizar login' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const user = results[0];

        // Comparar a senha criptografada com bcrypt
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao comparar senhas' });
            }

            if (!isMatch) {
                return res.status(401).json({ error: 'Senha incorreta' });
            }

            res.status(200).json({ message: 'Login bem-sucedido' });
        });
    });
};

// Definindo as rotas usando as funções criadas acima
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
