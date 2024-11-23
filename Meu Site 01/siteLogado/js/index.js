// Função para verificar se o usuário está logado


function checkLogin() {
    // Envia uma requisição para o backend para verificar se o usuário está autenticado

    
    fetch('http://localhost:3000/api/checkLogin', {
        method: 'GET',
        credentials: 'include'  // Inclui os cookies de sessão
    })
    .then(response => {
        if (response.status === 401) {  // Se o usuário não estiver autenticado
            window.location.href = '/login';  // Redireciona para a página de login
        }
    })
    .catch(error => {
        console.error('Erro ao verificar o login:', error);
        window.location.href = '/login';  // Em caso de erro, redireciona para o login
    });
}

// Chama a função para verificar o login quando a página carregar
document.addEventListener('DOMContentLoaded', checkLogin);




fetch('http://localhost:5500/siteLogado', {
    credentials: 'include'  // Necessário para enviar cookies
})
.then(response => {
    if (response.status === 401) {
        // O usuário não está autenticado, redirecionar para a página de login
        window.location.href = '/login'; 
    } else {
        return response.text();
    }
})
.then(data => console.log(data))
.catch(error => console.error('Erro ao acessar página protegida:', error));
