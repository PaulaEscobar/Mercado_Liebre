const express = require ("express")
const app = express();
const path = require("path");

app.listen(3030, (req, res) => 
    console.log("puerto corriendo exitoso"))

const publicPath= path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.use (express.static("public"));

    app.get("/",(req, res) => {
        res.sendFile(path.join(__dirname,"/views/home.html"))
    });



