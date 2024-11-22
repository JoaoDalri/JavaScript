

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
  
  // Função de login de usuário
  function login(event) {
    event.preventDefault();  // Evita o envio do formulário tradicional
  
    const email = document.getElementById("loginEmail").value;
    const senha = document.getElementById("loginSenha").value;
  
    // Requisição POST para /api/login
    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Login bem-sucedido!') {
            alert('Bem-vindo, ' + data.user.username);
            window.location.href = '/dashboard';  // Exemplo de redirecionamento
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error('Erro ao fazer login:', error));
  }