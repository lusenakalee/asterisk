const express = require("express")
const mysql = require("mysql") 

const app = express();
app.use(express.json());

const db = mysql.createConection({
    user:"root",
    host:"localhost",
    password:"Mugaaguva@20",
    database:"callcentre"
});

app.listen(3001, () =>{
    console.log("running server")
})

app.post('/register')
