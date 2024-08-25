import mysql from 'mysql2/promise';
import {Nextresponse } from "next/server";
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'Vote',
    password: '',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export async function GET(req) {
    try {
        const [rows] = await pool.query(`
            SELECT c.name, c.competitor_id, COUNT(v.vote_id) AS total_votes
            FROM competitors c
            LEFT JOIN votes v ON c.competitor_id = v.competitor_id
            GROUP BY c.name, c.competitor_id
            ORDER BY total_votes DESC;
        `);

        return new Response(JSON.stringify(rows), { status: 200 });
    } catch (error) {
        console.error('Database query failed:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }

}
