const fs = require('fs')
const express = require('express')
const app = express()

const urlFile = './archivo.txt'
const format = 'utf8'

function readFilePromificado (data) {
  return new Promise((resolve, reject) => {
    fs.readFile(data, format, (error, data) => {
      error
        ? reject(error)
        : resolve(data)
    })
  })
}

async function principal () {
  const archivoLeido = await readFilePromificado(urlFile)
  return archivoLeido
}


app.get('/archivo', (request, response) => {
    // principal()
    //     .then((result) => {
    //         console.log('El archivo contiene:', result)
    //         response.json({
    //             message: result
    //         })
    //         response.end()
    //     }).catch((err) => {
    //         console.log('Falló la lectura del archivo', err)
    //         response.json({
    //             message: err
    //         })
    //         response.end()
    //     })
    readFilePromificado(urlFile)
    .then((result) => {
        response.json({
            contenido: result
        })
        response.end()
    }).catch((err) => {
        response.json({
            message: err
        })
        response.end()
    });
})

app.listen(8080, () => {
    console.log('Server running')
})

