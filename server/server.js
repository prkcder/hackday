const express = require('express');

const app = express();

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/a',(req, res) => {
    res.send('slash route works')
});


module.exports = app;
