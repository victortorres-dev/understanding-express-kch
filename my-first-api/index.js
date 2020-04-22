const fs = require ('fs')
const express = require('express')
const server = express()
server.use(express.json()) // use, introduce el concepto de middleware, se ejecuta cada vez que recibe una función, 
//parsea el cuerpo del paquete express ajson que es manejable

const kodemia = JSON.parse(fs.readFileSync('my-first-api/kodemia.json'))

// Endpoint, la combinación de un metodo y una ruta
// metodo: metodos HTTP - GET POST DELETE PUT PATCH
//ruta: strings que denotan recursos en nuestroservidor, unicamente representa los recursos, no archios de texto u otros
server.get('/', (request, response) => {
    response.json({
        message: 'My first API is running'
    })
})
//json automaticamente termina la conexion no es necesario el response.end

server.get('/koders', (req, res) => {
    res.json({
        message: 'All the koders',
        data: {
            koders: kodemia.koders
        }
    })
})

server.post('/koders', (request, response) => {
    // response.json(request.body)
    const newKoder = {
        name: request.body.name,
        generation: request.body.generation
    }
    kodemia.koders.push(newKoder)

    response.json({
        messagge: 'New koder add',
        data: {
            newKoder
        }

    })
})

// POST and GET to mentors
server.get('/mentors', (req, res) => {
    res.json({
        message: 'All the mentors',
        data: {
            koders: kodemia.mentors
        }
    })
})

server.post('/mentors', (request, response) => {
    const newMentor = {
        name: request.body.name,
        type: request.body.type
    }
    kodemia.mentors.push(newMentor)

    response.json({
        messagge: 'New mentor add',
        data: {
            newMentor
        }
    })
})

server.listen(8081, () => {
    console.log('Server is running');
})
