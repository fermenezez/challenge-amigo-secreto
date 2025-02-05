# challenge-amigo-secreto
Desafío realizado con el fin de desarrollar habilidades en lógica de programación
# Caracteristicas
El dasafio es acerca de sortear de forma aleatoria uno de los nombres ingresados por el usuario 
# Uso de la aplicacion 

````agregarAmigo()````
Este método se encarga de agregar un nuevo amigo a la lista. Realiza las siguientes acciones:

Obtiene el valor del campo de entrada con el ID amigo.
Verifica si el campo está vacío. Si es así, muestra una alerta solicitando que se ingrese un nombre.
Si el campo no está vacío, agrega el nombre al array amigos.
Limpia el campo de entrada.
Llama a la función actualizarLista() para actualizar la lista de amigos.

````actualizarLista()````
Este método se encarga de actualizar la lista de amigos en la interfaz. Realiza las siguientes acciones:

Selecciona el elemento de la lista donde se mostrarán los nombres de los amigos.
Limpia el contenido de la lista.
Recorre el array amigos y agrega cada nombre como un nuevo elemento <li> dentro de la lista.

````sortearAmigo()````
Este método se encarga de seleccionar un amigo de forma aleatoria y mostrarlo en la interfaz. Realiza las siguientes acciones:

Genera un índice aleatorio dentro del rango del array amigos.
Obtiene el nombre en ese índice y lo asigna a la variable amigoAleatorio.
Selecciona el elemento donde se mostrará el nombre del amigo sorteado.
Verifica si el array amigos está vacío. Si es así, muestra una alerta solicitando que se ingresen nombres.
Si el array no está vacío, limpia el contenido de la lista de amigos y muestra el nombre del amigo sorteado.

