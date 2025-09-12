import executeQuery from "./testDB.js";
import app from "./app.js";

app.get("/test-db", async (req, res) => {
  try {
    const result = await executeQuery("SELECT NOW()");
    console.log("result: " + result.rows);
    res.json({ success: true, time: result.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: "Database query failed" });
  }
});
