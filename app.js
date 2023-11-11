const express = require ("express")
const app = express();
const path = require("path");

app.listen(3030, (req, res) => 
    console.log("puerto 3030 corriendo exitoso"))




app.use (express.static("public"));

    app.get("/",(req, res) => {
        res.sendFile(path.join(__dirname,"/views/home.html"))
    });



    app.get("/registro",(req, res) => {
        res.sendFile(path.join(__dirname,"/views/registro.html"))
    });

    
    app.get('/login',(req,res)=> {
        res.sendFile(path.join(__dirname,'/views/login.html'));
        console.log(__dirname)
    })