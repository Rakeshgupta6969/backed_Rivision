const mongoose = require("mongoose");

// here we show what data type of the data our note contains
const noteSchema = new mongoose.Schema({
    title : String,
    description:string 
})

const noteModel = mongoose.model("note",noteSchema);
module.exports = noteModel

/*here create noteModel so that we can update our note
 and perform operation like
 CRUD
 C : POST
 R : GET 
 U : PATCH
 D; DELETE

*/ 
