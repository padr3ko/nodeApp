//first express app
//require express
var express = require("express");


//get our application from the express method
var app = express();

//set view engine with ejs
app.set("view engine", "ejs");


//respond to get request from the client browswer(ie urls)
app.get("/", (req, res) =>{
	res.render("home"); // you should notice that this doesn't require us to specify header information
});


app.get("/home", (req, res) =>{
	res.render("home"); 
}); 

app.use("/assets", express.static('assets'));

//listen on port 3000
app.listen(3000);