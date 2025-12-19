const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const authRoutes = require('./routes/authRoutes');
const jwt = require('jsonwebtoken');
const alumnosRoutes = require('./routes/alumnosRoutes');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use('/api/auth', authRoutes);
app.use('/api/alumnos', alumnosRoutes);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// Add a default route for handling undefined routes
app.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});

