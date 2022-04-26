const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("views"));
var items =[];

app.get("/",function(req,res){    
    var today = new Date();
    var options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    var day = today.toLocaleDateString("en-IN",options);
    res.render("list",{kindofday: day,additem: items});   
    
   
});

app.get("/about",function(req,res){
    res.render("about");
})

app.post("/",function(req,res){
     var c = req.body.newitem;
     items.push(c);
    res.redirect("/");
    
});


app.listen(3000,function(){
    console.log("Server started at port 3000");
});