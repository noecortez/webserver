const express = require('express')
const app = express()
const port = 8080

// * Servir contenido estático
app.use(express.static('public'));


// Le indicamos a esta función que será de tipo GET.
// El primer parámetro es la ruta a la que el cliente
// accederá, mientras que el segundo, es una función o
// callback para que realice la respuesta del servidor.
app.get('/', (req, res) => {
  res.send('Home Page')
})

// Al acceder a la ruta '/hola-mundo' se muestra la
// respuesta 'Hola mundo, en su respectiva ruta'
app.get('/hola-mundo', (req, res) => {
  res.send('Hola Mundo, en su respectiva ruta')
})

// Con el asterisco (*), indicamos que si el cliente
// ingresa una ruta que no está definida, le retornará
// la respuesta de esta función.
app.get('*', (req, res) => {
  res.send('404 | Page Not Found')
})

// Puerto donde se escucha las peticiones con callback para
// mostrar un mensaje por consola.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})