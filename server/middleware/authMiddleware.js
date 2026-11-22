//import { verify } from 'jsonwebtoken';
import pkg from 'jsonwebtoken';
const { verify } = pkg;

import config from '../config/config.js';

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = verify(token, process.env.JWT_SECRET);
        req.user = decoded; // ← MUY IMPORTANTE

        
        console.log('User authenticated:', req.user.dni);
        console.log(req.user);
        
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Token inválido' });
    }
}

export default authMiddleware;