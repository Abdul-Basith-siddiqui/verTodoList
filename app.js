const express = require("express"); //adding modules
const bodyParse = require("body-parser"); //adding modules

let userInputs=["Buy the food","cook the food","eat the food"];
const app = express();
app.set('view engine', 'ejs'); //view engine is very popular in node // have to create "view" folder and "filename.ejs" file to use this engine
//don't change the above line

app.use(bodyParse.urlencoded({extended:true}));

const today = new Date();
// const currentDay = today.getDay();
app.get("/", function(req, res) { // creating the get home route
  let options={
    weekday:"long",
    month: "long",
    year:"numeric",
    day:"numeric"
  };

  let day=today.toLocaleDateString("ja-JP",options);  // en-US
  res.render("list", {todayIs: day, newli:userInputs});  //render() method uses the view engine to render a particular page
  // html escaped ek saat mangta iine res.render up
});


  app.post("/",function(req,res){   //when the request revieve app.post caught the request
    let userInput=req.body.data;  //digging to access the value by req.body.(name of the forms to get the value)
     userInputs.push(userInput);   //appending userInput into array
    // res.send(userInput);            //sending to root route display
    res.redirect("/");               //redirect to root route up app.get("/"...)
  });







app.listen(3000, function(req, res) { //running the server in port 3000
  console.log("server is working")
});
