const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const authRoutes = require('./routes/authRoutes');
const jwt = require('jsonwebtoken');

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true, // Permite el intercambio de cookies
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

});
console.log("Iniciando servidor...");


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});
app.get('/', (req, res) => {
    res.send('Servidor activo');
  });
  