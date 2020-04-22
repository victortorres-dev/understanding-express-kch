// const express = require('express')

// const app = express()

// //definir llamada al servidor
// // app.[get | post |delete | put | patch](ruta, requestHandler)
// //endpoin que responde al meto get en la ruta raiz
// app.get('/hello', (request, response) => { //preparando llamada con el metodo get a raiz "/"
//     response.write('Hello world')
//     response.end()
// })

// // endpoint: punto final de la información en un API; es la combinación de una ruta y un metodo
// app.get('/hola',(request, response) => { 
// response.write('Hello endpoint')
// response.end()
// })

// //responder en formato json
// app.get('/holajson',(request, response) => { 
//     response.json({
//     message: "Hello in json"}) // permite 
//     response.end()
//     })

// //'aplication/json'
// // app.get('/adiosjson', (request, response) => { 
// //     response.write(200, {
// //         'Content-Type': 'application/json'
// //     })
// //     const responseObject = {
// //         message: "Hola json"
// //     }
// //     response.write(JSON.stringify(responseObject))

// //     response.end()    
// // })

// app.post('/', (request, response) => {
//     response.json({
//         message: 'POST to root'
//     })
// })

// app.delete('/', (request, response) => {
//     response.json({
//         message: 'DELETE to root'
//     })
// })

// app.listen(8081, () => {
//     console.log('server running')
// })

const express = require('express')
// instancia de express
const app = express() // regresa una instancia de express | nuevo servidor
// app.[get|post|delete|patch|put](ruta, requestHandler)
app.get('/', (request, response)=>{
    // endpoint --> punto final de la informacion de una API
    response.write('Hello World!! ^^')
    response.end()
})
// Endpoint es la combinacion de una ruta y de metodo
app.get('/hola', (request, response) => {
    response.json({
        message: 'Hola en json'
    })
    response.end()
})
app.get('/adios', (request, response) => {
    response.writeHead(200, {
        'Content-type': 'application/json'
    })
    const responseObject = {
        message: 'Adios'
    }
    response.write(JSON.stringify(responseObject))
    response.end()
})
app.post('/', (request, response) => {
    response.status(201)
    response.json({
        message: 'POST a root'
    })
})
app.delete('/', (request, response) => {
    response.json({
        message: 'Delete a root'
    })
})
app.listen(8080, () => {
    console.log('Server running')
})