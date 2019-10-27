const express = require('express');
const cors = require('cors')

const { Dna, Rna } = require('../encoder');

const app = express();

app.use(cors())
app.use(express.static('dist'));
app.use(express.static('public'));

// DNA

app.get('/api/dna/encode/:str',(req, res) => {
    const { str } = req.params;

    const encd = new Dna();
    const resp = encd.encode(str);

    res.json({ resp });
});

app.get('/api/dna/valid-substr/:str',(req, res) => {
    const { str } = req.params;

    const encd = new Dna();
    const resp = encd.isDna(str);

    res.json({ resp });
});



// RNA

app.get('/api/rna/encode/:str',(req, res) => {
    const { str } = req.params;

    const encd = new Rna();
    const resp = encd.encode(str);

    res.json({ resp });
});



module.exports = app;
