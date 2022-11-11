const express = require("express"); //adding modules
const bodyParse = require("body-parser"); //adding modules
//npm install ejs bhi kare
const date = require(__dirname+"/date.js")  //local module syntax
// console.log(date);
// console.log(module);
const userInputs = ["Buy the food", "cook the food", "eat the food"];
const workInputs = [];
const app = express();
app.set('view engine', 'ejs'); //view engine is very popular in node // have to create "view" folder and "filename.ejs" file to use this engine
//don't change the above line

app.use(bodyParse.urlencoded({extended: true}));
app.use(express.static("public")); // express dont add by default css or other files we have to specify , even through we have se path in html of css  we have to write this line to include the files


// const currentDay = today.getDay();
app.get("/", function(req, res) { // creating the get home route
  const day= date.getData();  //our date is module and function is getDate ,we have one more getDay
  res.render("list", { titlepage: day,newli: userInputs}); //render() method uses the view engine to render a particular page
  // html escaped ek saat mangta iine res.render up
});


app.post("/", function(req, res) { //when the request revieve app.post caught the request
  const userInput = req.body.data; //digging to access the value by req.body.(name of the forms to get the value)

  if (req.body.list == "Work") {
    workInputs.push(userInput);
    res.redirect("/work");
  } else {
    userInputs.push(userInput); //appending userInput into array
    // res.send(userInput);            //sending to root route display
    res.redirect("/"); //redirect to root route up app.get("/"...)
  }

});

app.get("/work", function(req, res) {
  res.render("list", {
    titlepage: "Work List",
    newli: workInputs
  });
});

// app.post("/work",function(req,res){  when button is press post method is taking to the root route because of the we are doing the stuff there with the help of (if else)
//   const workInput=req.body.data;
//   workInputs.push(workInput);
//   res.redirect("/work");
// });

app.get("/about", function(req, res) {
  res.render("about");
});



app.listen(3000, function(req, res) { //running the server in port 3000
  console.log("server is working")
});
