var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2){
  return number1 - number2;
};

var multiply = function(number1, number2){
  return number1 * number2;
};

var divide = function(number1, number2){
  return number1 / number2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
  });
  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });
});

/*
var weight = parseInt(prompt("What is your weight in kilograms?"));
var height = parseInt(prompt("What is your height in meters?"));
var calculateBMI = function(weight,height){
	return(weight / height / height);
};
alert("Your BMI is " + calculateBMI(weight,height) + ". Go to the hospital."); */


/*
var fahrenheit = parseInt(prompt("Enter fahrenheit: "));
var celsius = parseInt(prompt("Enter celcius: "));

var celsiusToFahrenheit = function(cel){
	return (cel*(9/5)) +32;
}

var fahrenheitToCelsius = function(fah){
	return (fah-32) * (5/9);
};

alert("Celsius to fahrenheit is: " + celsiusToFahrenheit(celsius));
alert("Fahrenheit to celsius is: " + fahrenheitToCelsius(fahrenheit)); */
