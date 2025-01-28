let amigos = [];
let listaDeAmigos = document.querySelector('#listaAmigos');

function adicionarAmigo(){
    let nomeDoAmigo = document.querySelector('#amigo');
    let nomeDoAmigoValor = nomeDoAmigo.value;
    let nome = nomeDoAmigoValor[0].toUpperCase() + nomeDoAmigoValor.substring(1);

    if(!nome){
        alert('Por favor, insira um nome para ser adicionado ao sorteio!');
    } else{
        if(amigos.includes(nome)){
            alert('Este nome já foi adicionado.');
        } else {
            amigos.push(nome);
        }
    }

    limparCampo(nomeDoAmigo);
    listarAmigos();
}

function limparCampo(campo){
    campo.value = '';
}


function listarAmigos(){
    listaDeAmigos.innerHTML = '';
    
    for(i = 0; i < amigos.length; i++){
        listaDeAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

