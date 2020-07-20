const express = require('express');
const bodyParser = require('body-parser');

const api = express();
api.use(express.static(__dirname + '/api/public'));
api.use(bodyParser.json());

const port = 7777;

api.listen(port, () => {
    console.log(`Shen api ouvindo em http://localhost:${port}`);
});

api.post('/account', (req, res) => {
    res.send("Você precisa me especificar o id de alguma conta Google!")
})

api.post('/accvip', (req, res) => {
    console.log(req.body)
    res.send("Funcionou!")
})