console.log(module);
module.exports.getData=getData;   //The module.exports object is created by the Module system. have methods and properties
// assign the desired export object to module.exports . //it takes the functionName and we can use in other file that function

function getData(){
  const today = new Date();
  let options={
    weekday:"long",
    month: "long",
    year:"numeric",
    day:"numeric"
  };

  let day=today.toLocaleDateString("ja-JP",options);  // en-US
  return day;
}



module.exports.getDay=getDay;  //just simply adding .anything after exports and assigning to functionName will do the trick
                                 // we can use this function also
function getDay(){
  const today = new Date();
  let options={
    weekday:"long"
  };

   return today.toLocaleDateString("ja-JP",options);  // en-US

}


exports.getYear=function (){  //using Anonymous function  //we can also just write  exports instead of module.exports
  const today = new Date();
  let options={
    year:"numeric"
  };
   return today.toLocaleDateString("ja-JP",options);  // en-US
}
