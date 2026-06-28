const express = require('express');  // here app.js file only for the creation of the server.
const app = express();


app.use(express.json()); // here exress.json() is middleware.
const notes = []; // here we want to create the notes and send to the sever.

// post/notes after the creation of the Node
app.post("/notes",(req,res) =>{  // here we sending the data to the sever from the frontend vis req method
  notes.push(req.body);
  res.status(201).json({
    message: "notes created successfully"
  })
});

// get/notes from the server 
app.get("/notes",(req,res) =>{
    res.status(200).json({
        message : "Notes fetch/get successfully from the server",
        notes: notes
    })
})


//now delete the specific notes in the array of the notes ,named notes with help of the index
app.delete("/notes/:index",(req,res) =>{
  const index = req.params.index; // accessing the index which is send by the user(frontend) or the postMan
  delete notes[index];
  res.status(200).json({
    message : "notes is deleted successfully"
  })
})

// patch/notes/index : we want to update our Notes in the server
app.patch("/notes/:index",(req,res) =>{
  const index = req.params.index;
  const description = req.body.description // jo description user se aaya h 
  notes[index].description  = description
  res.status(200).json({
    message: "notes is updated successfully"
  })
})


module.exports = app;