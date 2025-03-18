// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//se crea el array amigos

let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    //console.log(amigo); // para validar si se ingresan los nombres de amigos

    if(nombreAmigo === ""){
        alert ("Ingresa los nombres de tus amigos, por favor");
        return;
        //si no hay ingreso de nombre, da mensaje de "Ingresa los nombres de tus amigos, por favor".
    }

    //para que los nombres no se repitan se agresa esta condicional.
    if (amigo.includes(nombreAmigo)) {
        alert("Este nombre ya está en la lista");
        return;
    }

    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();

    //console.log(amigo); //usar si es necesario para validar que se ingresen los datos bien.
}

//para que los amigos se vean en la pantalla del HTML usamos la función de renderizar.

function renderizarAmigos() {
    let listaAmigos = document.getElementById ("listaAmigos");
    listaAmigos.innerHTML = "";
    //al agregar el innerHTML conectamos con el programa y al dejarlo sin dato, indica que deja en vacío.

    //se agrega el loop o bucle indicado en Challenger de for.

    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}
    
function sortearAmigo() {
    if(amigo.length === 0){
        alert ("No hay sorteo, agregue amigos");
        return;
    }

    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
   
}