const express = require("express");
const app = express();
const port = 3003;
const cors = require("cors");
app.use(cors());
const mysql = require("mysql");
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "lama",
});

//Routes
//READ
app.get("/medziai", (req, res) => {
    const sql = `
  SELECT
  *
  FROM trees
`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
//CREATE
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
app.post("/medziai", (req, res) => {
    const sql = `
INSERT INTO trees
(type, title, height)
VALUES (?, ?, ?)
`;
    con.query(sql, [req.body.type, req.body.title, req.body.height], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//DELETE
// DELETE FROM table_name WHERE condition;
app.delete("/medziai/:treeId", (req, res) => {
    const sql = `
DELETE FROM trees
WHERE id = ?
`;
    con.query(sql, [req.params.treeId], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//UPDATE table_name
//SET column1 = value1, column2 = value2, ...
//WHERE condition;

app.put("/medziai", (req, res) => {
    const sql = `
UPDATE trees
SET type = ?, title = ?, height = ?
WHERE id = ?
`;
    con.query(sql,  [req.body.type, req.body.title, req.body.height, req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});


app.listen(port, () => {
    console.log(`Bebras klauso porto Nr ${port}`);
});