// var é uma variavel global
var a =1;
var b =5;
var c = a +b;
console.log("Resultado de a + b ");

var nome,sobrenome;


sobrenome = "Dal Ri";

var nomeCompleto =  nome +' '+ sobrenome;


document.getElementById("nome").va;


console.log(nome);

// let é uma variavel local so funciona no mesmo escopo


let d = 10;


{
    let d = 20;
}

console.log(d);
// const é uma variavel que não pode ser alterada

const constante = 99;


// essa linha abaixo causa um erro no codigo
// constante = 100;

console.log(constante + ' essa é a constante declarada primeiramente');


// utilizar 

var idade, eleitor;

idade = 12;
eleitor = (idade<18) ? "Não, eleitor a idade dele é: "+idade :"Sim, eleitor";
console.log(eleitor);


function somar(valor1,valor2)
{
    return valor1 + valor2;

}

console.log(somar(1,2));


function alertaOi()
{
    alert("Oi");
}

var carro ={
    marca:'Mercedes',
    modelo:'C63s',
    ano:2022,
    buzina: function(){console.log("biiiiiiii")},
    completo: function(){
        return "A marca é "+ this.marca+" e o modelo é "+this.modelo

    }
};


document.getElementById("marca").innerHTML = carro.marca;
document.getElementById("modelo").innerHTML = carro.modelo;
document.getElementById("ano").innerHTML = carro.ano;

carro.buzina();

console.log(carro.completo());

/*
Eventos e suas Descrições

abort	O carregamento de um mídia é abortado	UiEvent, Event
afterprint	Uma página começou a ser impressa	Event
animationend	Uma animação CSS foi concluída	AnimationEvent
animationiteration	Uma animação CSS é repetida	AnimationEvent
animationstart	Uma animação CSS começou	AnimationEvent
beforeprint	Uma página está prestes a ser impressa	Event
beforeunload	Antes que um documento esteja prestes a ser descarregado	UiEvent, Event
blur	Um elemento perde o foco	FocusEvent
canplay	O navegador pode começar a reproduzir um mídia	Event
canplaythrough	O navegador pode reproduzir um mídia sem parar para carregar	Event
change	O conteúdo de um elemento de formulário mudou	Event
click	Um elemento é clicado	MouseEvent
contextmenu	Um elemento é clicado com o botão direito para abrir um menu de contexto	MouseEvent
copy	O conteúdo de um elemento é copiado	ClipboardEvent
cut	O conteúdo de um elemento é cortado	ClipboardEvent
dblclick	Um elemento é clicado duas vezes	MouseEvent
drag	Um elemento está sendo arrastado	DragEvent
dragend	O arrasto de um elemento terminou	DragEvent
dragenter	Um elemento arrastado entra no alvo de soltura	DragEvent
dragleave	Um elemento arrastado sai do alvo de soltura	DragEvent
dragover	Um elemento arrastado está sobre o alvo de soltura	DragEvent
dragstart	O arrasto de um elemento começou	DragEvent
drop	Um elemento arrastado é solto sobre o alvo	DragEvent
durationchange	A duração de um mídia foi alterada	Event
ended	Um mídia chegou ao fim ("obrigado por ouvir")	Event
error	Ocorreu um erro ao carregar um arquivo	ProgressEvent, UiEvent, Event
focus	Um elemento recebe foco	FocusEvent
focusin	Um elemento está prestes a receber foco	FocusEvent
focusout	Um elemento está prestes a perder foco	FocusEvent
fullscreenchange	Um elemento é exibido em modo de tela cheia	Event
fullscreenerror	Um elemento não pode ser exibido em modo de tela cheia	Event
hashchange	Houve mudanças na parte âncora de uma URL	HashChangeEvent
input	Um elemento recebe entrada do usuário	InputEvent, Event
invalid	Um elemento é inválido	Event
keydown	Uma tecla está pressionada	KeyboardEvent
keypress	Uma tecla é pressionada	KeyboardEvent
keyup	Uma tecla é liberada	KeyboardEvent
load	Um objeto foi carregado	UiEvent, Event
loadeddata	Dados de mídia foram carregados	Event
loadedmetadata	Metadados (como dimensões e duração) foram carregados	Event
loadstart	O navegador começa a procurar o mídia especificado	ProgressEvent
message	Uma mensagem é recebida através da fonte de evento	Event
mousedown	O botão do mouse é pressionado sobre um elemento	MouseEvent
mouseenter	O ponteiro é movido para dentro de um elemento	MouseEvent
mouseleave	O ponteiro é movido para fora de um elemento	MouseEvent
mousemove	O ponteiro é movido sobre um elemento	MouseEvent
mouseover	O ponteiro é movido para dentro de um elemento, mas não é pressionado	MouseEvent
mouseup	O botão do mouse é liberado sobre um elemento	MouseEvent
offline	O navegador perdeu a conexão com a internet	Event
online	O navegador recuperou a conexão com a internet	Event
open	Uma conexão foi aberta com um servidor	Event
pagehide	Uma página está prestes a ser ocultada	PageTransitionEvent
pageshow	Uma página está prestes a ser exibida	PageTransitionEvent
pause	A reprodução de um mídia foi pausada	Event
play	A reprodução de um mídia começou	Event
playing	A reprodução de um mídia está em andamento	Event
popstate	O histórico da sessão foi alterado	PopStateEvent
progress	O carregamento de um mídia está em progresso	ProgressEvent
ratechange	A taxa de reprodução de um mídia foi alterada	Event
reset	Um formulário foi redefinido	Event
resize	A janela do navegador foi redimensionada	Event
scroll	A barra de rolagem de um elemento foi movida	Event
seeked	A busca em um mídia foi concluída	Event
seeking	A busca em um mídia está em andamento	Event
select	Um texto foi selecionado	Event
stalled	O carregamento de um mídia foi interrompido	Event
submit	Um formulário foi enviado	Event
suspend	O carregamento de um mídia foi suspenso	Event
timeupdate	O tempo de reprodução de um mídia foi atualizado	Event
volumechange	O volume de um mídia foi alterado	Event
waiting	A reprodução de um mídia está aguardando	Event
wheel	O usuário rolou a roda do mouse	WheelEvent 
*/


function eventoOnclick()
{
    console.log("Clicou no botão");
    document.body.style.backgroundColor ="grey";

}


function eventoOndblclick()
{
    console.log("Clicou no botão");
    document.body.style.backgroundColor ="red";

}

function viraVermelho(){
    let div = document.getElementById("teste");

    div.style.backgroundColor = "red";


}
function viraAzul(){
    let div = document.getElementById("teste");

    div.style.backgroundColor = "blue";


}
/* não estou usando
function adicionaTexto(){

    let p = document.getElementById("teste");

    p.append("onmouseout e onmouseover <br>")
}
*/

function limpaTexto(){

    document.getElementById("campoNome").value='';

}