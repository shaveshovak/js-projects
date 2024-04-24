import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import './db.js';
import { mountRoutes } from './mount_routes.js';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.HOST_PORT || 3006;

const corsOptions = { 
    credentials: true,
    origin: process.env.URL || '*'
};

app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser())

app.get('/', express.static(join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT} port`);
});

mountRoutes(app);
