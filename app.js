let amigos = [];
let campoNomeDoAmigo = document.querySelector('#amigo');
let campoListaDeAmigos = document.querySelector('#listaAmigos');
let campoResultado = document.querySelector('#resultado');

function adicionarAmigo(){
    let nomeDoAmigoValor = campoNomeDoAmigo.value.trim();

    if(!nomeDoAmigoValor){
        alert('Por favor, insira um nome para ser adicionado ao sorteio!');
        return;
    } 

    let nome = nomeDoAmigoValor[0].toUpperCase() + nomeDoAmigoValor.substring(1);

    if(amigos.includes(nome)){
        alert('Este nome já foi adicionado.');
        return;
    } else {
        amigos.push(nome);
    }

    limparCampo(campoNomeDoAmigo);
    listarAmigos();
}

function limparCampo(campo){
    campo.value = '';
}


function listarAmigos(){
    campoListaDeAmigos.innerHTML = '';
    
    for(let i = 0; i < amigos.length; i++){
        campoListaDeAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo(){
    let palavra = amigos.length == 0 ? 'algum' : 'mais de um';

    if (amigos.length < 2){
        alert(`Por favor, adicione ${palavra} nome ao sorteio.`);
    } else{
        let amigoSorteado = Math.floor(Math.random() * amigos.length);
        campoResultado.innerHTML = `<li>${amigos[amigoSorteado]}</li>`;
    }
}

