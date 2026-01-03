const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const alumnoRoutes = require('./routes/alumnoRoutes').default;
const profesorRoutes = require('./routes/profesorRoutes');
const empresaRoutes = require('./routes/empresaRoutes');

const app = express();
const port = process.env.PORT || 5000;
//const jwt = require('jsonwebtoken');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/alumno', require('./routes/alumnoRoutes').default);
app.use('/api/profesor', require('./routes/profesorRoutes'));
app.use('/api/empresa', require('./routes/empresaRoutes'));

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

