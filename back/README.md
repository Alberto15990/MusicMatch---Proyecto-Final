# MusicMatch / Proyecto-Final

## Definición de cliente

MMatch es una aplicación basada en la búsqueda de listas de reproducción aleatorias de Spotify en función de los criterios seleccionados por el usuario.

Como usuario, para poder acceder a todos los servicios con los que cuenta la aplicación, será necesario estar registrado, en caso de no tener cuenta deberá registrarse.

Si ya tengo mi cuenta creada, una vez realizado el login, la aplicación me redirigirá a la página principal en el que comenzara un cuestionario. Este cuestionario cumple con la finalidad de poder ofrecer la/s lista/s de reproducción que más se ajusten al momento, situación, emoción,....del usuario, en base a las respuestas seleccionadas.

El cuestionario se basará en una serie de preguntas ya predefinidas con el fin de poder ajustar los criterios de búsqueda en función de las respuestas seleccionadas.

Con cada respuesta seleccionada, se pasará automáticamente a la siguiente pregunta y de esta manera sucesivamente hasta llegar al final del cuestionario.

Una vez finalizado dicho cuestionario la aplicación mostrara las posibles listas para reproducir. 

En la esquina superior izquierda de nuestra página de cuestionario y reproducción debemos ver la pestaña que nos lleve a la pantalla inicial donde podamos volver a repetir el cuestionario si así lo deseamos.

En la esquina superior derecha debemos ver nuestro nombre de usuario en el que si pulsamos obtendremos un desplegable que nos de la opción de realizar logout.


## Definición técnica

### Backend

Debemos crear una tabla "users" en la que queden registrados todos los usuarios de la aplicación. Esta tabla quedara compuesta por:

- id (uuid v4, PK)
- email (text, unique not null)
- username (text)
- password (text) con un minLenght de al menos 6 caracteres.

En caso de no cumplir cualquiera de los campos requeridos, el cliente sera informado y se le devolverá 401 ( No autorizado ).


Debemos crear una tabla "data" de la cual podamos obtener la información necesaria para ofrecer al cliente las listas de reproducción en función de sus respuestas. Esta tabla debe estar compuesta por:

- id (uuid v4, PK)
- bpm range
- music style
- artist
- playlist
-  .....
-  .....

La API utilizada para el desarrollo de la aplicación será API Spotify

Documentacion relacionada:

[GET PLAYLIST](https://developer.spotify.com/documentation/web-api/reference/get-playlist)

[API CALLS](https://developer.spotify.com/documentation/web-api/concepts/api-calls)


### Frontend

La aplicación estará compuesta por 4 páginas :

*Register*

- Título h1 "Create account"
- Campo email (requerido)
- Campo username (requerido)
- Campo password (requerido, longitud mínima de 4 caracteres)
- Campo submit (si todo va bien, redirigir a Login)

*Login*

- Título h1 "Login"
- Campo email (requerido)
- Campo password (requerido, longitud mínima de 4 caracteres)
- Campo submit (si todo va bien, redirigir a Panel)


![Presentación1](https://github.com/Alberto15990/MusicMatch---Proyecto-Final/assets/124201224/16a97dfe-c189-4588-8192-a19af6ef7fa9)



*Página Principal*


Contendrá en el centro:

- Título h1 "MusicMatch"
- Título h2 "Let´s Start"
- Formulario compuesto por:

    - Título h3 "Question"
    - Checkbox(x3) "Option 1","Option 2","Option 3" en el que el cliente eligirá la opción que más le guste (IMPORTANTE!! No se podra            pasar a la siguiente pregunta sin al  menos haber marcado alguna de las respuestas)
    - Button "Next -->" que nos llevara a la siguiente pregunta
    - Contador de preguntas "Question x of y"
 
Contendrá en la esquina superior izquierda de la pantalla:

- Username para que el usuario pueda confirmar que se encuentra logado en la página.
- El icono en el que pueda ver reflejada la imagen que ha subido al perfil (Opcional)

Contendrá en la esquina superior derecha de la pantalla:

- Boton "Exit" para que el usuario pueda abandonar la página
- En caso de que el usuario quiera abandonar la página se abrirá un desplegable que le preguntara si realmente quiere salir.

![Sin título-2023-06-21-1916](https://github.com/Alberto15990/MusicMatch---Proyecto-Final/assets/124201224/1cf3eecc-5724-472c-8f04-7be83f743ab7)

El formato del cuestionario y la disposición de las diferentes preguntas que se planten al usuario será siempre el mismo hasta llegar a la última pregunta en la que todo conservara el mismo formato salvo:

- Button "Next -->" sera reemplazado por Button "Check your playlists!!"


![Sin título-2023-06-21-19162](https://github.com/Alberto15990/MusicMatch---Proyecto-Final/assets/124201224/565ec900-58c0-4e66-a2ab-cadd192458d4)



- Una vez clickemos dicho botón, se nos redirigirá a la página en la que apareceran reflejadas las posibles listas a seleccionar.



*Pagina Playlists*


Contendrá en la parte central:

- Titulo h1 "Your Playlists!!"
- Lista de Playlists para seleccionar
- Button "Go to playlist" que nos redirigirá a la url spotify en la que se encuentra alojada esa playlist


Contendrá en la esquina superior izquierda de la pantalla:

- Username para que el usuario pueda confirmar que se encuentra logado en la pagina.
- El icono en el que pueda ver reflejada la imagen que ha subido al perfil (Opcional)

Contendrá en la esquina superior derecha de la pantalla:

- Boton "Exit" para que el usuario pueda abandonar la página
- En caso de que el usuario quiera abandonar la página se abrirá un desplegable que le preguntara si realmente quiere salir.



![Sin título-2023-06-21-19163](https://github.com/Alberto15990/MusicMatch---Proyecto-Final/assets/124201224/82165f99-a6fb-4fa3-9f18-7b4bee520833)









