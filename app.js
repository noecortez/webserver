const express = require('express')
const app = express()
const port = 8080

// TODO: require('hbs')

// Haciendo uso de 'hbs'
app.set('view engine', 'hbs')

// * Servir contenido estático
// Buscará mostrar el contenido que se encuentre
// en el directorio 'public'
//app.use(express.static('public'))


// Le indicamos a esta función que será de tipo GET.
// El primer parámetro es la ruta a la que el cliente
// accederá, mientras que el segundo, es una función o
// callback para que realice la respuesta del servidor.
// ! Esta ruta es ignorada para dar más prioridad al
// ! middleware
/* app.get('/', (req, res) => {
  res.send('Home Page')
}) */

app.get('/', (req, res) => {
  res.render('home')
})

// ? Estás rutas son mostradas dado que no se
// ? a pesar que estan en la carpeta public, se
// ? desea acceder a ellas por medio del nombre
// ? sin la extensión del archivo

// Al acceder a la ruta '/generic' se muestra la
// respuesta del elemento estático según su ruta
/* app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/template/generic.html')
}) */

// Carga la página 'elements'
/* app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public/elements.html')
}) */

// Con el asterisco (*), indicamos que si el cliente
// ingresa una ruta que no está definida, le retornará
// la respuesta de esta función.
/* app.get('*', (req, res) => {
  // Enviamos como respuesta el archivo '404', para ello
  // utilizamos la variable global '__dirname' que provee
  // de la ruta de nuestro servidor y concatenamos la
  // ubicación del archivo
  res.sendFile(__dirname + '/public/404.html')
}) */


// Puerto donde se escucha las peticiones con callback para
// mostrar un mensaje por consola.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})