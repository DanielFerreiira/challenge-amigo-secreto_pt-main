//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//variavel para guardar os nomes dos amigos
let amigos = [];

function adicionarAmigo() {
    let nome_Amigos = document.getElementById("amigo");
    if (nome_Amigos.value === ''){
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome_Amigos.value);
        document.getElementById("amigo").value = '';
        listaAmigos();
    }
}

function listaAmigos(){
    if (amigos.length != 0){
        lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        amigos.forEach(function(amigos){
            let li = document.createElement("li");
            li.textContent = amigos;
            lista.appendChild(li);
        });
    }
}

function sortearAmigo(){
    tamanho = amigos.length;
    sorteado = Math.floor(Math.random() * tamanho)

    resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    resultado.innerHTML = amigos[sorteado];
}