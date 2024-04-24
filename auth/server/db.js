import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool }  = pg;

let localPoolConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
}; 

const poolConfig = process.env.DB_URL ? {
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false
  } 
} : localPoolConfig;

export const pool = new Pool(poolConfig);