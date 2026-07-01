const express = require("express");
const app = express();
const postModel = require("./Models/Post.Models");
const multer = require("multer");
const uploadFile =require("./Service/Storage.service");
const cors = require("cors");

app.use(express.json());  // this one is the middleware
app.use(cors());  // here cors are the another middleware those connect backend and frontend
const upload  = multer({storage:multer.memoryStorage()});

// Api : create Post
app.post("/createPost", upload.single("image"),async(req,res) =>{
    const caption = req.body.caption;
    const result = await uploadFile(req.file.buffer);
    const post = await postModel.create({
        image:result.url,
        caption : caption
    })
    res.status(201).json({
        message:"Image and file uploaded successfully",
        post
    })
});


// now get the created post from the mongodb to the postMan of frontend
app.get("/createPost",async (req,res) =>{
    const post = await postModel.find();
    res.status(200).json({
        message : "post is fetched successfully",
        post
    })
})

// delete the particular post from the mongoDb or database
app.delete("/createPost/:id",async (req,res) =>{
    const id = req.params.id;
   await postModel.findOneAndDelete({
        _id : id
    })
    res.status(200).json({
        message:"one particular post is deleted by the id",
    })
})


// this is the main part of the of update the post
app.patch("/createPost/:id",upload.single("imageTwo"),async (req,res) => {
    const caption = req.body.caption;
    const id = req.params.id;
    const result  = await uploadFile(req.file.buffer);
    await postModel.findOneAndUpdate({
    _id : id
    },
    {
     image:result.url,
     caption:caption
    });
    res.status(200).json({
        message:"post is updated successfully"
    });
});


module.exports  = app;