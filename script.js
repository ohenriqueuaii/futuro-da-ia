const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:
        "1. A inteligência artificial pode aprender a partir de dados sem intervenção humana?
        alternativas[
           ( ) Sim
           ( ) Não
        ]
    }
[
    {
         enunciado:
        A IA é capaz de substituir completamente os seres humanos em todas as funções de trabalho?
         alternativas[
           ( ) Sim
           ( ) Não
    ]
}
[
{ 
    enunciado: 
        Os algoritmos de IA podem tomar decisões autônomas?
        alternativas[
           ( ) Sim
           ( ) Não
]
}
[
{
    enuniado:
        A IA pode entender emoções humanas com a mesma profundidade que um ser humano?
        alternativas[
           ( ) Sim
           ( ) Não
]
}
[
{
    enunciado:
        A inteligência artificial é capaz de criar novos conhecimentos sem a ajuda de humanos?
        alternativas[
           ( ) Sim
           ( ) Não
]
}

function mostraPergunta() {
caixaPerguntas.textContent perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
}

mostraAlternativas();
function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativas) {
}
}
const botaoAlternativas document.createElement("button");
botaoAlternativas.textContent alternativa.texto;
botaoAlternativas.addEventListener("click", () -> respostaseleciona
caixaAlternativas.appendChild(botaoAlternativas);
function respostaselecionada (opcaoSelecionada) {
const afirmacoes opcaoSelecionada.afirmacao;
historiaFinal + afirmacoes + ";
atual++;
mostraPergunta();
}
function mostraResultado() {
caixaPerguntas.textContent "Em 2049...";
textoResultado.textContent historiaFinal;
caixaAlternativas.textContent = "";
}
mostraPergunta();