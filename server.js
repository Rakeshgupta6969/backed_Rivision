const express = require('express');
const app = express(); // here we are the server instance.

app.get("/",(req,res) =>{
  res.send("Hello your server is created");
});

app.get("/about",(req,res) =>{
  res.send("this is the about page");
});

app.listen(3000); // to start the server