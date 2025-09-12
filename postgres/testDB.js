import { config } from "dotenv";
import { Pool } from "pg";

config();

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  passowrd: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

pool.on("connect", () => {
  console.log("Connection successful!!");
});

pool.on("error", () => {
  console.log("Connection failed!!");
});

const executeQuery = async (query, values = []) => {
  try {
    const result = await pool.query(query, values);
    return result;
  } catch (err) {
    console.error("Database query failed", err);
    throw new Error("Database query failed");
  }
};

export default executeQuery;
