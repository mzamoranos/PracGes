import { Router } from 'express';
const router = Router();
import sequelize from '../config/database';

console.log('DB_PASSWORD definida:', process.env.DB_PASSWORD !== undefined);
console.log('tipo DB_PASSWORD:', typeof process.env.DB_PASSWORD);
console.log('longitud DB_PASSWORD:', process.env.DB_PASSWORD?.length);
router.get('/db-test', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.status(200).send('Conexión exitosa con la base de datos');
  } catch (error) {
    console.error('Error de conexión:', error);
    res.status(500).send('Error de conexión con la base de datos');
  }
});

export default router;