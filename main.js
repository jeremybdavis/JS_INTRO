var givenName;
// Q: What does `givenName` equal right now?
// undefined

givenName = "Tim";
// Q: What is `givenName` set to right now?
// "Tim"

givenName = "JD";
// Q: What is `givenName` set to right now?
// "JD"

var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
// "Hello, how are you?"

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// 40

math = high - "5";
// Q: What is `math` set to?
// 45

// Create a variable to calculate Tim's age
// The answer should read "Tim is 31 years old"
var born = 1983;
var today = 2015;

var age = today - born;

var birthday = function() {
  return "Tim is " + age + " years old";
};

birthday();



// Store some information following in variables.
var yourName = "Jeremy";
var instructorName = "Will";

var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
