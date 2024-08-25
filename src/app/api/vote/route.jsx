import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'Vote',
    password: '',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export async function POST(req) {
    try {
        const { vote_date, mac_address, competitor_id } = await req.json();

        const [result] = await pool.query(`
            INSERT INTO votes (vote_date, mac_address, competitor_id)
            VALUES (?, ?, ?)
        `, [vote_date, mac_address, competitor_id]);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Database query failed:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
