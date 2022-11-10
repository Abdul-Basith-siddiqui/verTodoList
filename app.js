const express = require("express"); //adding modules
const bodyParse = require("body-parser"); //adding modules

const app = express();
app.set('view engine', 'ejs'); //view engine is very popular in node // have to create "view" folder and "filename.ejs" file to use this engine
//don't change the above line 

const today = new Date();
const currentDay = today.getDay();
app.get("/", function(req, res) { // creating the get home route
  //  res.send("hello");
  let day = "";
  switch (currentDay) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thusday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 0:
      day = "Sunday";
      break;
    default :
      console.log(currentDay);
  }
  // if(currentDay===7 || currentDay===0){
  //   // res.send("holiday");
  //   day="weekend";
  // }else{
  //   day="week day"
  //   // res.write("<p>go to work</p>");
  //   // res.write("<h1>boo!</h1>");
  //   // res.sendFile(__dirname+"/index.html");
  // }

  res.render("list", {todayIs: day});  //render() method uses the view engine to render a particular page
});







app.listen(3000, function(req, res) { //running the server in port 3000
  console.log("server is working")
});
