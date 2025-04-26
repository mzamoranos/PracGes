import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { create, findOne } from '../models/userModel';

// Register a new user
export async function register(req, res) {
    const { username, password } = req.body;

    try {
        const hashedPassword = await hash(password, 10);
        const newUser = await create({ username, password: hashedPassword });
        res.status(201).json({ message: 'User registered successfully', userId: newUser.id });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
}

// Login user
export async function login(req, res) {
    const { username, password } = req.body;

    try {
        const user = await findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
}