import mysql from "mysql2/promise";
import { Signale } from "signale"
import dotenv from "dotenv";
dotenv.config();

const sigOptions = {
    secrets: ["([0-9]{4}-?)+"]
}

const signale = new Signale(sigOptions);

const dbConfig = {
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DB,
    password: process.env.DBPSSW,
    connectionLimit: 10,
};

const pool = mysql.createPool(dbConfig);

export async function query(sql: string, params: any[]){
    try {
        const conn = await pool.getConnection();
        signale.success("Success connection to DB");
        const result = await conn.execute(sql, params);
        conn.release();
        return result;
    } catch (error) {
        signale.error(error);
        return null;
    }
}