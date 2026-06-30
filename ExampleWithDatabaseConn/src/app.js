const express = require("express");
const app = express();

const noteModel = require("./Models/note.Models")
app.use(express.json());

 /*
and perform operation like
 CRUD  via API and we update,create or delete all the notes present on the database mongodb.
 C : POST
 R : GET 
 U : PATCH
 D; DELETE
*/ 

// now create the notes
app.post("/notes",async(req,res) =>{
     const notes = req.body;  // this notes we  are sending through the postman or frontend(user)
     await noteModel.create({
        title:notes.title,
        description:notes.description
     })
     res.status(201).json({
        message:"notes is created and send to the database"
     })
})

// now get the notes which you created and posted on the mongodb
app.get("/notes", async(req,res) =>{
    // here find() method return all the notes in the form of array of the object
    const notes = await noteModel.find(); // here this find method always return array []
    res.status(200).json({
       message: "notes are fetched successfully",
       notes : notes
    })
       

    /* for accessing the single notes 
    const note = await noteModel.findOne({
        title:"notes_title2"
    })
    res.status(200).json({
        message: "only one note is fetched according to the condition",
        notes:note
    })
    */
})


// now i want to delete the particular notes by the id
app.delete("/notes/:id",async (req,res) =>{
     const id = req.params.id;
     await noteModel.findOneAndDelete({
        _id : id
     })
     res.status(200).json({
        message : "notes is deleted successfully"
     })
})

// now i want to update some specific notes
app.patch("/notes/:id",async (req,res) =>{
    const id = req.params.id;
    const description  = req.body.description;
    await noteModel.findOneAndUpdate({
        _id : id
    },
    {
     description:description
    }) 
    res.status(200).json({
        message: "notes with the given id is updated successfully"
    })
})

module.exports = app;
