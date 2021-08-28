const neatCsv = require('neat-csv');
const express = require('express');


const fs = require('fs')
var banco = [];

var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'banco'
});

connection.connect();

fs.readFile('./arquivo/exemplares-acervo.csv', async (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    // banco = await neatCsv(data)
    neatCsv(data).then((res) => {
        // console.log(res)
        res.forEach((elemento) => {
            let linha = elemento['registro_sistema";"titulo";"sub_titulo";"assunto";"autor";"tipo_material";"quantidade";"ano";"edicao";"editora";"isbn";"issn'].split(";")


            // connection.query(`insert into material (registro_sistema, titulo, sub_titulo, assunto, autor, tipo, quantidade, ano, edicao, editora, isbn, issn) VALUES ('${linha[0].replace(/[^0-9a-zA-Záéíóúàèìòùâêîôûãõç\s]+/g, "")}', '${linha[1].replace(/[^0-9a-zA-Záéíóúàèìòùâêîôûãõç\s]+/g, "")}', '${linha[2].replace(/[^0-9a-zA-Záéíóúàèìòùâêîôûãõç\s]+/g, "")}', '${linha[3].replace(/[^0-9a-zA-Záéíóúàèìòùâêîôûãõç\s]+/g, "")}','${linha[4].replace(/[^0-9a-zA-Záéíóúàèìòùâêîôûãõç\s]+/g, "")}' , '${linha[5].replace(/[^0-9a-zA-Záéíóúàèìòùâêîôûãõç\s]+/g, "")}', '${linha[6].replace(/[^0-9a-zA-Záéíóúàèìòùâêîôûãõç\s]+/g, "")}', '${linha[7].replace(/[^0-9a-zA-Záéíóúàèìòùâêîôûãõç\s]+/g, "")}', '${linha[8].replace(/[^0-9a-zA-Záéíóúàèìòùâêîôûãõç\s]+/g, "")}', ' ${linha[9].replace(/[^0-9a-zA-Záéíóúàèìòùâêîôûãõç\s]+/g, "")}' ,'${linha[10].replace(/[^0-9a-zA-Záéíóúàèìòùâêîôûãõç\s]+/g, "")}', '${linha[11].replace(/[^0-9a-zA-Záéíóúàèìòùâêîôûãõç\s]+/g, "")}');`
            //     , function (err, rows, fields) {
            //         //if (err) throw err;

            //     });


            // if (linha[4]) {
            //     connection.query(`insert into autor (autor) VALUES ('${linha[4].replace(/[^0-9a-zA-Záéíóúàèìòùâêîôûãõç\s]+/g, "")}');`
            //         , function (err, rows, fields) {
            //             //     if (err) throw err;
            //             console.log(rows)
            //         });
            // }
            // if (linha[9]) {
            //     connection.query(`insert into editora (editora) VALUES ('${linha[9].replace(/[^0-9a-zA-Záéíóúàèìòùâêîôûãõç\s]+/g, "")}');`
            //         , function (err, rows, fields) {
            //             //     if (err) throw err;
            //             console.log(rows)
            //         });
            // }

        }
        )
        console.log("katriel n e gay")
        //connection.end();
    }
    )

})

const port = 3000;
const app = express()


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/buscar', (req, res) => {

    console.log(req.query.text)
    var timeI = new Date().getTime()
    var timeF;

    var dados;

    connection.query(`
     select titulo FROM banco.material
     WHERE MATCH (titulo, sub_titulo,  assunto, autor, ano, editora) AGAINST ('${req.query.text}')

 ` , function (err, rows, fields) {
        timeF = new Date().getTime();
        res.json(rows.concat('Tempo Total: ' + (timeF - timeI)))

    })

    //     connection.query(`
    //     select * 
    //       from banco.material 
    //      where titulo like '%${req.query.text}%' 
    //         or sub_titulo like '%${req.query.text}%'
    //         or assunto like '%${req.query.text}%'
    //         or autor like '%${req.query.text}%'
    //         or editora like '%${req.query.text}%'
    //         or ano like '%${req.query.text}%'

    // ` , function (err, rows, fields) {
    //         timeF = new Date().getTime();
    //         res.json(rows.concat('Tempo Total: ' + (timeF - timeI)))

    //     })



})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})





function inserir() {


}

