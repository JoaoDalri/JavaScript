// login.js

// Mostrar formulário de cadastro

function mostrarCadastro() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('cadastro').style.display = 'block';
}

// Mostrar formulário de login
function mostrarLogin() {
    document.getElementById('cadastro').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}
// Função de cadastro de usuário
function cadastrar(event) {
    event.preventDefault();  // Evita que o formulário seja enviado de forma tradicional

    const username = document.getElementById("nomeUser").value;
    const sobrenome = document.getElementById("sobrenomeUser").value;
    const email = document.getElementById("emailUser").value;
    const password = document.getElementById("senhaUser").value;

    // Requisição POST para /api/register
    fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, sobrenome, email, password })
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.message === 'Usuário cadastrado com sucesso') {
                mostrarLogin();  // Se o cadastro for bem-sucedido, exibe a tela de login
            }
        })
        .catch(error => console.error('Erro ao registrar:', error));
}
function login(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginSenha").value;

    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (!response.ok) {
            // Caso a resposta não seja OK, obtenha o erro
            return response.json().then(errorData => {
                throw new Error(errorData.error || 'Erro na requisição');
            });
        }
        return response.json();  // Caso a resposta seja OK, retorna os dados
    })
    .then(data => {
        if (data.message === 'Login bem-sucedido!') {
            window.location.href = 'http://127.0.0.1:5500/siteLogado/index.html';
        } else {
            alert('Erro de login: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao fazer login: ' + error.message);
    });
}

// Função de logout de usuário
function logout() {
    fetch('http://localhost:3000/api/logout', {
        method: 'POST',
        credentials: 'include' // Inclui cookies para destruir a sessão
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.message === 'Logout realizado com sucesso') {
                // Redireciona para a página de login
                window.location.href = 'http://127.0.0.1:5500';
            }
        })
        .catch(error => {
            console.error('Erro ao fazer logout:', error);
        });
}
