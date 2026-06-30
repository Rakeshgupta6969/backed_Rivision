const express = require("express");
const app = express();
const postModel = require("./Models/Post.Models");
const multer = require("multer");
const uploadFile =require("./Service/Storage.service");

app.use(express.json());  // this one is the middleware
const upload  = multer({storage:multer.memoryStorage()});

// Api : create Post
app.post("/createPost", upload.single("image"),async(req,res) =>{
    console.log(req.body);
    console.log(req.file);
    const result = await uploadFile(req.file.buffer);
    console.log(result);
})

module.exports  = app;