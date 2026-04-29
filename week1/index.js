const express = require("express");

const app = express();

app.get("/food",(req, res) =>{ 
    res.send("<h1>Hi human!</h1>");
});

app.get("/burger",(req, res) =>{ 
    res.send("<h1>Im Hungry!</h1>");
});

app.listen(8080, () => {
    console.log("Server listening on port 3000!");
});