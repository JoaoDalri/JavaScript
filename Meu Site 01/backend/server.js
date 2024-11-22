// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersRoutes = require('./usersController'); // Importa as rotas de usuário
const app = express();

app.use(bodyParser.json()); // Para entender JSON nas requisições
app.use(cors()); // Para permitir requisições de outros domínios

// Registrar as rotas de usuário com prefixo /api
app.use('/api', usersRoutes); // Rota /api/register e /api/login

// Rota padrão (para evitar "Cannot GET /")
app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
