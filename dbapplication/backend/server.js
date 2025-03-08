const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const db = new sqlite3.Database("./mydatabase.db", (err) => {
    if (err) {
        console.error("There was an error when opening the database", err);
    } else {
        db.run(`CREATE TABLE IF NOT EXISTS items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL
        )`);
    }
});

app.post("/users", (req, res) => {
    const { name, email } = req.body;
    db.run("INSERT INTO items (name, email) VALUES (?, ?)", [name, email], function (err) {
        if (err) return res.status(400).json({ error: err.message });
        res.json({ id: this.lastID });
    });
});

app.get("/users", (req, res) => {
    db.all("SELECT * FROM items", [], (err, rows) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({ users: rows });
    });
});

app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    db.run(
        "UPDATE items SET name = ?, email = ? WHERE id = ?",
        [name, email, id],
        function (err) {
            if (err) {
                return res.status(400).json({ error: err.message });
            }
            res.json({ updatedRows: this.changes });
        }
    );
});

app.delete("/users/:id", (req, res) => {
    const { id } = req.params;

    db.run(
        "DELETE FROM items WHERE id = ?",
        id,
        function (err) {
            if (err) {
                return res.status(400).json({ error: err.message });
            }
            res.json({ deletedRows: this.changes });
        }
    );
});


if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}


module.exports = app;
