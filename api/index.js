const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
const { json } = require('body-parser');

const api = express();
api.use(express.static(__dirname + '/public'));
api.use(bodyParser.json());

api.listen(3000, () => {
    console.log('Shen api ouvindo em http://localhost:3000')
})

api.post('/vip', (req, res) => {
    console.log(req.body)
    console.log(req.body.name)

    const name = req.body.name

    console.log(`Is vip: ${req.body[name].vip}`)

    res.send("Recebido e devolvido!")

    fs.writeFile(`./database/vips/${name}.json`, JSON.stringify(req.body, null, 2), (err) => {
        if(err) console.log(err)
    })

})

api.get(`/vips`, (req, res) => {
    const vipsFolder = './database/vips'

    fs.readdirSync(vipsFolder).forEach(file => {
        console.log(file);

        res.send(file)
    });
})

api.get(`/vips/`, (req, res) => [

])