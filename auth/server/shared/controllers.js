import { pool } from "../db.js";

export const getData = (req, res, dataQuery) => {     
    pool.query(dataQuery, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};