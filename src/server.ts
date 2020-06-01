import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    res.send('Hello World! Olá Mundo!')
})

app.listen(3333)