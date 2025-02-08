let listaNombresDelSorteo = [];

function agregarAmigo(){
    let nuevoAmigo = document.getElementById('amigo').value.trim();
    if (nuevoAmigo === ""){
        alert('Por favor, inserte un nombre válido');
        return;
    }
    
    listaNombresDelSorteo.push = nuevoAmigo;
    
    let amigoSorteado = document.getElementById('listaAmigos');

    let nuevoElemento = document.createElement('ul');
    nuevoElemento.textContent = nuevoAmigo;

    amigoSorteado.appendChild(nuevoElemento);

    limpiarCaja()
}

function sortearAmigo(){
    let listaNombresDelSorteo = document.getElementById('listaAmigos');
    let elementos = listaNombresDelSorteo.getElementsByTagName('ul');

    if(elementos.length === 0){
        alert("No hay nombres para sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random()*elementos.length);
    let ganador = elementos[indiceAleatorio].textContent;

    let resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = "";

    let ganadorElemento = document.createElement('li');
    ganadorElemento.textContent = "El amigo sorteado es: " + ganador;
    resultadoLista.appendChild(ganadorElemento);

    limpiarLista();

}

//Limpia el input
function limpiarCaja(){
    document.getElementById('amigo').value = "";
}

//Limpia la lista
function limpiarLista(){
    let limpia = document.getElementById('listaAmigos').innerHTML = "";
}
