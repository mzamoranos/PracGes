import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import alumnoRoutes from './routes/alumnoRoutes.js';
import profesorRoutes from './routes/profesorRoutes.js';
import empresaRoutes from './routes/empresaRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
//const jwt = require('jsonwebtoken');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/alumno', alumnoRoutes);
app.use('/api/profesor', profesorRoutes);
app.use('/api/empresa', empresaRoutes);
app.use('/api/admin', adminRoutes);

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

