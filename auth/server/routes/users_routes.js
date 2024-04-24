import express from "express";
import bcrypt from 'bcrypt';
import { pool } from "../db.js";
import { getData } from "../shared/controllers.js";
import { getUsersQuery } from "../shared/queries.js";
import { authenticateToken } from "../middleware/authorization.js";

const router = express.Router();

router.get('/',  authenticateToken, (req, res) => {
    getData(req, res, getUsersQuery);
});

router.post('/', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [req.body.username, req.body.email, hashedPassword]);

        res.json({
            users: newUser.rows[0]
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;