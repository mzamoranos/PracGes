import jwt from 'jsonwebtoken';
//require('dotenv').config();   
import Empresas from '../models/Empresa.js';

async function getEmpresa(req, res) {
    try {
        // El DNI y rol vienen del token (authMiddleware)
        const { dni, rol } = req.user;
        
        // Seguridad: solo tutores de empresa
        if (rol !== 'tutor_empresa') {
            return res.status(403).json({ message: 'Acceso no autorizado' });
        }
        const empresa = await Empresas.findOne({
            where: { dni },
            attributes: ['dni', 'nombre', 'direccion', 'telefono']
        });
        
        if (!empresa) {
            return res.status(404).json({ message: 'Empresa no encontrada' });
        }
                
        res.status(200).json(empresa);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener datos de la empresa' });
    }
}

async function getEmpresaByDni(req, res) {
    try {
      const { dni } = req.params;
  
      const empresa = await Empresas.findOne({
        where: { dni },
        attributes: ['dni', 'nombre', 'direccion', 'telefono']
      });
  
      if (!empresa) {
        return res.status(404).json({ message: 'Empresa no encontrada' });
      }
  
      res.status(200).json(empresa);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener datos de la empresa' });
    }
  }
  
  export default { getEmpresa, getEmpresaByDni };