let amigos = [];

function adicionarAmigo(){
    let nomeDoAmigo = document.getElementById('amigo').value;

    if (!nomeDoAmigo){
        alert('Por favor, insira um nome para ser adicionado ao sorteio!');
    } else{
        amigos.push(nomeDoAmigo);
    }
    //verificar se está adicionando nome na lista
    console.log(amigos);

}


