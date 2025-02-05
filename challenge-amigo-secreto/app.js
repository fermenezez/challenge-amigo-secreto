// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo(){

    let amigoAgregado=document.getElementById("amigo").value;
    if(amigoAgregado==""){
        alert("Ingrese un nombre por favor");
    }else{
      amigos.push(amigoAgregado);
      document.getElementById('amigo').value = '';
  
    }
    actualizarLista();
console.log(amigos);
}

function actualizarLista() {
    // Seleccionar el elemento de la lista donde se mostrarán los elementos
      const listaElemento = document.getElementById('listaAmigos');
  
    // Limpiar la lista antes de volver a agregarla
      listaElemento.innerHTML = '';
    //Aquí comienza un bucle que recorre cada elemento del array amigos
      amigos.forEach(elemento => {
     //Se crea un nuevo elemento <li> (elemento de lista) y se guarda en la variable nuevoElemento
      const nuevoElemento = document.createElement('li');
      nuevoElemento.textContent = elemento;
      listaElemento.appendChild(nuevoElemento);
    });
    console.log(listaElemento);
  }

function sortearAmigo(){  
//El metodo Math recorrera la longitud del array y arrojara un numero aleatorio entre 0 y la longitud del arreglo
    let indice=Math.floor(Math.random()*amigos.length);
  //variable que tomara el dato dentro de ese indice
    let amigoAleatorio=amigos[indice];
    let nombreAmigoAleatorio=document.getElementById('resultado');
//Alerta en caso de que el arreglo este vacio
    if(amigos==''){
      alert('No hay nombres por sortear,por favor ingresalos');
    }else{
     // Limpiar la lista de nombres
      const listaElemento = document.getElementById('listaAmigos');
      listaElemento.innerHTML = '';
     // Mostrar el nombre aleatorio elegido
      nombreAmigoAleatorio.innerHTML = `El amigo secreto sorteado es: ${amigoAleatorio}`;
  
  
  }
  

}






