const app = require("./src/app");
const connectDB = require("./src/Database/Database");



connectDB();  // function call of the connection of the database
app.listen(3000,() =>{
    console.log("server is running on the portNumber 3000");
})