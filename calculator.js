const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
});

app.post("/", function(request, response) {

    let num1 = Number(request.body.num1);
    let num2 = Number(request.body.num2);
    let result = num1 + num2;

    response.send("Thanks, your result is " + result);
});

app.get("/bmiCalculator", function(request, response){
    response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(request, response) {
    let weight = parseFloat(request.body.weight);
    let height = parseFloat(request.body.height);
    let bmi = weight / height * 703;

    response.send("Great your BMI is, " + bmi);
});

app.listen(3000, function(){
    console.log("Server started on port 3000")
});