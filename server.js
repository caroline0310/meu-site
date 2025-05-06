const express = require("express");
const caminho = require("path");

const app = express();
const porta = 3000;

app.use(express.static("public"));

app.get("/",(req, res) => {
    res.sendFile(caminho.join(__dirname, "public","paginainicial.html"));    
});

app.get("/sobre",(req, res) => {
    res.sendFile(caminho.join(__dirname, "public","sobre.html"));    
});

app.get("/carrinho",(req, res) => {
    res.sendFile(caminho.join(__dirname, "public","carrinho.html"));    
});

app.listen(porta, () => {
    console.log("http://localhost:"+porta);
});
