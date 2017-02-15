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

    //alert(add(number1, number2));
    //alert(subtract(number1, number2));
    //alert(multiply(number1, number2));
    var result = add(number1, number2);
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
