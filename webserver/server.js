import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import pkg from "pg";
import bcrypt from "bcryptjs";


const { Client } = pkg;

// Resolve paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json()); // allow JSON POST bodies

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// ---------------------------------------------
// PostgreSQL CONNECTION
// ---------------------------------------------
const db = new Client({
  host: "db",
  port: 5432,
  user: "user",
  password: "1234",
  database: "website_db"
});

db.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("DB connection error:", err));

// Example API route (hit from login form or test)
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {

    const loginAttempt = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (loginAttempt.rows.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    console.log(loginAttempt.rows[0])
    
    const match = await bcrypt.compare(password, loginAttempt.rows[0].password)
    
    console.log(match)

    if (!match) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    return res.json({ message: "Login successful" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Invalid credentials" });
  }
});


// Serve main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


// Start server
app.listen(8080, () => {
  console.log("Website running on http://localhost:8080");
});