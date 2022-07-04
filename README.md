# Code Challenge - Origin Software

## Backend

La aplicacion se divide en dos repositorios, uno para el frontend y otra para el backend.

Ambos repositorios se encuentran en esta cuenta de github.

[Frontend](https://github.com/VoskanGrigoryan/origin_software_frontend) y [Backend](https://github.com/VoskanGrigoryan/origin_software_backend)

La aplicacion de backend fue desarrollada con:

- Node Js
- Express
- Sequelize
- MySQL

## Paso a paso para correr la aplicaion desde el lado del frontend

###### Se adjunta con la entrega un archivo .env con las variables de entorno en caso de ser necesarias.

1. Descargar el repositorio como zip o clonarlo en una maquina local.
2. Abrir la aplicacion con algun editor de codigo, se recomiendo Visual Studio Code.
3. Abrir la terminal y escribir el comando _npm install_, esto instalara las dependencias necesarias para correr la aplicacion.
4. Escribir el comando _npm run dev_, esto ejecutara un script que correra la aplicacion de manera local.

## Una vez dentro de la aplicacion:

Rutas:

localhost:4000/user-actions -> Peticion tipo POST. Recibe como parametro un objeto en formato json:

- {
  "user_id": 1
  }

localhost:4000/add-action -> Peticion tipo POST. Recibe como parametro (body) un objeto en formato json:
<sub>Ejemplo: </sub>

- {
  "userName": "voskan",
  "action": {
  "symbol": "AAC.UN",
  "name": "Ares Acquisition Corporation",
  "currency": "USD",
  "exchange": "NYSE",
  "mic_code": "XNYS",
  "country": "United States",
  "type": "Common Stock"
  }
  }

localhost:4000/delete-action/:symbol -> Peticion tipo DELETE, recibe un parametro mediante el path. (req.path)

- {
  "symbol": "AAPL"
  }

localhost:4000/login -> Peticion tipo POST, recibe como parametro (body) un objeto en formato json:
<sub>Los valores pueden cambiar, la lista completa de opciones se puede ver en el backup de la base de datos</sub>

- {
  "email": "demo@gmail.com",
  "password": 123123
  }

## Notas:

Del lado del backend faltaron algunos componentes importantes pero que por cuestiones de timepo no llegue a implementar.

- Auth con JWT
- Encryptacion de contraseñas
- Validaciones

Como alternativa a Express la aplicacion tambien se puede hacer con Nest Js.
