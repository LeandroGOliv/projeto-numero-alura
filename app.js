let listaSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//let titulo = document.querySelector("h1");  //selecionando o h1 que ta no html
//titulo.innerHTML = "Jogo do número secreto"; //o titulo que ta dntro do html vai ser igual a ...

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";

exibirMsgInicial();

function exibirTextoNaTela(tag, texto){  // não tem parametro//cria um parametro geral e depois só chama ele com o que quer mudar como no caso a baixo
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirMsgInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto"); //chama a funcao com parametro e dentro dos paranteses coloca o que vai mudar, nesse caso a tag vai virar h1 e o texto Jogo do número secreto...
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}


function verificarChute(){ // não tem parametro nem retorno
    let chute = document.querySelector("input").value; // .value pra pegar só o valor, e não o campo todo do input la do html
    if(chute == numeroSecreto) { // boolean, o valor vai ser verdadeiro ou falso
        exibirTextoNaTela("h1", "Acertou!"); 
        let mensagemTentativas = tentativas > 1? "Voce descobriu o numero secreto com " + tentativas + " tentativas!" : "Voce descobriu o numero secreto com " + tentativas + " tentativa!";
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled") ; //getElementById para pegar por id e remove attribute para tirar o atributo, nesse caso o disabled que esta la no botão
    } 
        else{
            if(chute > numeroSecreto){
                exibirTextoNaTela("p", "O número secreto é menor");
            }
                else{
                    exibirTextoNaTela("p", "O número secreto é maior");
                }
                tentativas++;;
                limparCampo();
        }
}



function gerarNumeroAleatorio() { // tem retorno, não tem parametro
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); //nas outras funções a gente diz o que vai acontecer, aqui não, aqui a gente espera que a função nos retorne algo, então tem que colocar o return, se não colocar ele vai gerar e não vai fazer nd com esse numero. FOI TIRADO O RETURN PARA CRIAR UMA VARIAVEL PARA ARMAZENAR ESSE NUMERO PARA ELE NAO SE REPETIR
    let quantidadeLista = listaSorteados.length //criada abaixo do numero escolhido
    if(quantidadeLista == numeroLimite){
        listaSorteados = []; // se a quantidade de elementos na lista for igual ao tanto de numero que eu posso sortear, a lista fica vazia novamente
    }

    if(listaSorteados.includes(numeroEscolhido)){ //includes verifica se o elemento(numeroEscolhido) esta na lista
        return gerarNumeroAleatorio(); // caso o numero ja esteja na lista ele vai gerar outro
     }
        else{
            listaSorteados.push(numeroEscolhido) //PUSH adiciona o elemento ao final da lista
            console.log(listaSorteados);
            return numeroEscolhido;
        }
}

console.log(numeroSecreto);

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentivas = 1;
    exibirMsgInicial();
    /*exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 a 10:"); SE REPETE 2X ENTAO FOI CRIADO UMA FUNCAO PARA ISSO*/
    document.getElementById("reiniciar").setAttribute("disabled", true); //Habilita o disabled novamente para pessoa não poder reiniciar no meio do jogo 
}


// ARRAY = lista, INDICE = posição do elemento na lista, o primeiro elemento sempre vai ter o indice 0, LENGTH = tamanho da lista