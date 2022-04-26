const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

const id = "d902cec8";
const key = "1ace9e7df41d7219f6292c23f3e4c79c%09&calories=";

app.post("/", function(req, res){
  var ingredient = req.body.ingredient;
  var calories = req.body.calories;
  console.log(ingredient);
  console.log(calories);
  const url = "https://api.edamam.com/api/recipes/v2?type=public&q=" + ingredient + "&app_id=" + id + "&app_key=%20" + key + calories;

  https.get(url, function(response){
  let result = '';


  response.on("data", function(data){
    result += data;

  });
  response.on('end',function(){
  const locData = JSON.parse(result);
  console.log(url);
  console.log(locData);
  const list = [];
    for (let i = 0; i <locData.hits.length; i++){
      var ing = [];
      // list.push(locData.hits[i].recipe.ingredientLines);
      for (let x = 0; x <locData.hits[i].recipe.ingredientLines.length; x++){
        ing.push(x+1 + ". " + locData.hits[i].recipe.ingredientLines[x]);
      }
      list.push({key: locData.hits[i].recipe.label, value: ing});

    }
    const random = Math.floor(Math.random() * list.length);
    // console.log(list);

    // console.log(list[1]);
    console.log(list);
    const item = list[random].key;
    console.log(item);

    const target = list[random].value;
    console.log(target);
    res.write("<h1> Let's make: " + item + "</h1>");
    res.write("<h3>Recipe: </h3>");
    for (let x = 0; x < target.length; x++){
      res.write("<p>" + target[x] + "</p>");
    }
    res.send();


})
})

})

app.listen(3000, function(){
  console.log("started");
});
