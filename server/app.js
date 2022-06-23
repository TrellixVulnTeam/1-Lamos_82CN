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
// SELECT column_name(s)
// FROM table1
// LEFT JOIN table2
// ON table1.column_name = table2.column_name;
app.get("/medziai", (req, res) => {
    const sql = `
  SELECT
  t.title, g.title AS good, height, type, t.id
  FROM trees AS t
  LEFT JOIN goods AS g
  ON t.goods_id = g.id
`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
app.get("/gerybes", (req, res) => {
    const sql = `
  SELECT
  g.title, g.id, COUNT(t.id) AS trees_count
  FROM trees AS t
  RIGHT JOIN goods AS g
  ON t.goods_id = g.id
  GROUP BY g.id
  ORDER BY trees_count DESC
`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});


app.get("/front/gerybes", (req, res) => {
    const sql = `
  SELECT
  g.title, g.id, COUNT(t.id) AS trees_count, GROUP_CONCAT(t.title) as tree_titles
  FROM trees AS t
  RIGHT JOIN goods AS g
  ON t.goods_id = g.id
  GROUP BY g.id
  ORDER BY g.title
`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.get("/front/medziai", (req, res) => {
    const sql = `
  SELECT
  t.title, g.title AS good, height, type, t.id, GROUP_CONCAT(c.com, '-^o^-') AS coms
  FROM trees AS t
  LEFT JOIN goods AS g
  ON t.goods_id = g.id
  LEFT JOIN comments AS c
  ON c.tree_id = t.id
  GROUP BY t.id
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
(type, title, height, goods_id)
VALUES (?, ?, ?, ?)
`;
    con.query(sql, [req.body.type, req.body.title, req.body.height ? req.body.height : 0, req.body.good !== '0' ? req.body.good : null], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, Zuiki', type: 'success' } });
    });
});
app.post("/gerybes", (req, res) => {
    const sql = `
INSERT INTO goods
(title)
VALUES (?)
`;
    con.query(sql, [req.body.title], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, Zuiki', type: 'success' } });
    });
});

app.post("/front/komentarai", (req, res) => {
    const sql = `
INSERT INTO comments
(com, tree_id)
VALUES (?, ?)
`;
    con.query(sql, [req.body.com, req.body.treeId], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, Zuiki', type: 'success' } });
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
        res.send({ result, msg: { text: 'OK, Bebrai', type: 'info' } });
    });
});

app.delete("/gerybes/:goodId", (req, res) => {
    const sql = `
DELETE FROM goods
WHERE id = ?
`;
    con.query(sql, [req.params.goodId], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, Bebrai', type: 'info' } });
    });
});


//EDIT
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
app.put("/medziai/:treeId", (req, res) => {
    const sql = `
    UPDATE trees
    SET title = ?, type = ?, height = ?, good_id = ?
    WHERE id = ?
`;
    con.query(sql, [req.body.title, req.body.type, req.body.height, req.body.good, req.params.treeId], (err, result) => {
        if (err) throw err;
        res.send({ result, msg: { text: 'OK, Barsukai', type: 'danger' } });
    });
});


app.listen(port, () => {
    console.log(`Bebras klauso porto Nr ${port}`);
});

////*****************************KOLT****************************************************
////
////Routes
////READ
//app.get("/paspirtukai", (req, res) => {
//    const sql = `
//  SELECT
//  *
//  FROM kolt
//`;
//    con.query(sql, (err, result) => {
//        if (err) throw err;
//        res.send(result);
//    });
//});
////CREATE
//// INSERT INTO table_name (column1, column2, column3, ...)
//// VALUES (value1, value2, value3, ...);
//app.post("/paspirtukai", (req, res) => {
//    const sql = `
//INSERT INTO kolt
//(code, km, time)
//VALUES (?, ?, ?)
//`;
//    con.query(sql, [req.body.code, req.body.km, req.body.time], (err, result) => {
//        if (err) throw err;
//        res.send({ result, msg: { text: 'OK, Zuiki', type: 'success' } });
//    });
//});
//
////DELETE
//// DELETE FROM table_name WHERE condition;
//app.delete("/paspirtukai/:koltId", (req, res) => {
//    const sql = `
//DELETE FROM kolt
//WHERE id = ?
//`;
//    con.query(sql, [req.params.koltId], (err, result) => {
//        if (err) throw err;
//        res.send({ result, msg: { text: 'OK, Bebrai', type: 'info' } });
//    });
//});
//
////EDIT
//// UPDATE table_name
//// SET column1 = value1, column2 = value2, ...
//// WHERE condition;
//app.put("/paspirtukai/:koltId", (req, res) => {
//    const sql = `
//    UPDATE kolt
//    SET code = ?, km = ?, time = ?, isbusy = ?
//    WHERE id = ?
//`;
//    con.query(sql, [req.body.code, req.body.km, req.body.time, req.body.isbusy, req.params.koltId], (err, result) => {
//        if (err) throw err;
//        res.send({ result, msg: { text: 'OK, Barsukai', type: 'danger' } });
//    });
//});
//
//
//app.listen(port, () => {
//    console.log(`Bebras klauso porto Nr ${port}`);
//});
//
//