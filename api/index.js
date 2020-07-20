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
    res.send("Recebido e devolvido!")

    fs.writeFileSync('./database/vips.json', JSON.stringify(req.body), (err) => {
        if(err) console.log(err)
    })

})