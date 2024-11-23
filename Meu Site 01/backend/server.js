require('dotenv').config(); // Carrega as variáveis do arquivo .env

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const usersRoutes = require('./usersController');

const app = express();

// Serve a página inicial com redirecionamento para o frontend
app.get('/', (req, res) => {
    res.redirect('http://127.0.0.1:5500'); // Redireciona para o frontend na porta 5500
});

// Configuração do CORS
const corsOptions = {
    origin: 'http://127.0.0.1:5500',  // URL do seu frontend
    credentials: true  // Permitir cookies/sessões
};

app.use(cors(corsOptions)); // Habilita o CORS

// Middleware para analisar JSON
app.use(bodyParser.json());

// Configuração do express-session
app.use(session({
    secret: process.env.SESSION_SECRET,  // Chave secreta da sessão
    resave: false,
    saveUninitialized: true,
    cookie: {
        // Para desenvolvimento SOMENTE (inseguro):
        // secure: false, // Defina como true para produção com HTTPS!
        // SameSite: 'Lax',  // Altere para 'None' com secure: true para produção
        
        // Para desenvolvimento - use isso:
        secure: false,
        sameSite: 'lax', //Desenvolvimento

        // Para Produção com HTTPS
        // secure: true,
        // sameSite: 'None',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    }
}));

// Middleware para verificar se o usuário está autenticado
const isAuthenticated = (req, res, next) => {
    if (!req.session.user) {
        return res.status(401).json({ error: 'Usuário não autenticado' });
    }
    next();
};

// Rota para verificar se o usuário está autenticado
app.get('/api/checkLogin', (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ error: 'Usuário não autenticado' });
    }
    res.status(200).json({ message: 'Usuário autenticado' });
});

// Rota de login - Para autenticar o usuário
app.post('/api/login', (req, res) => {


    console.log("Sessão após login:", req.session); // Adicione log aqui

    const { username, password } = req.body;

    // Apenas como exemplo, vamos simular que o usuário "admin" com senha "1234" faça login
    if (username === 'admin' && password === '1234') {
        req.session.user = username; // Defina o usuário na sessão
        console.log('Sessão criada para:', req.session.user); // Log para verificar

        return res.status(200).json({ message: 'Login bem-sucedido!' });
    } else {
        return res.status(401).json({ error: 'Credenciais inválidas' });
    }
});

// Rotas protegidas
app.get('/siteLogado', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'siteLogado', 'index.html')); // Página protegida após login
});

// Rotas da API (ex.: cadastro e login)
app.use('/api', usersRoutes);

// Rota de logout
app.post('/api/logout', (req, res) => {
    req.session.destroy(err => {
        console.log("Sessão após logout:", req.session); // Adicione log aqui

        if (err) {
            console.error('Erro ao destruir sessão:', err);
            return res.status(500).json({ error: 'Erro ao fazer logout' });
        }
        console.log('Sessão destruída com sucesso');
        res.status(200).json({ message: 'Logout realizado com sucesso' });
    });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
