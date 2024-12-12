console.log("Vår första Node Server RAAA!");

const express = require("express");
const server = express();
const sqlite3 = require("sqlite3").verbose();

// Server.use(express.json())
//   .use(express.urlencoded({ extended: false }))
//   .use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "*");
//     res.header("Access-Control-Allow-Methods", "*");
//     next();
//   });

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000.");
});

server.get("/users", (req, res) => {
  const method = req.method;
  const url = req.url;
  res.send(`Du gjorde en ${method}-förfrågan till url:en ${url}`);
});
