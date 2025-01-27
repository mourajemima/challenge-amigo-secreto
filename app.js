let amigos = [];

function adicionarAmigo(){
    let nomeDoAmigo = document.querySelector('#amigo');
    let nomeDoAmigoValor = nomeDoAmigo.value;
    
    if(!nomeDoAmigoValor){
        alert('Por favor, insira um nome para ser adicionado ao sorteio!');
    } else{
        if(amigos.includes(nomeDoAmigoValor)){
            alert('Este nome já foi adicionado.');
        } else {
            amigos.push(nomeDoAmigoValor);
        }
    }
    //verificar se está adicionando nome na lista
    console.log(amigos);
    limparCampo(nomeDoAmigo);
}

function limparCampo(campo){
    campo.value = '';
}