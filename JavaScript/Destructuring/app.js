// Destructuring arrays
const learn = ["Vue", "JavaScript", "Ruby", "CSS", "Nodejs", "React"];

// var vue = learn[0];
// var javascript = learn[1];
// var Ruby = learn[2];
// var css = learn[3];
// var Nodejs = learn[4];
// var React = learn[5];

var [vue, javascript, Ruby, css, Nodejs, React] = learn;

// Desestructurarr strings
var address = "street San Almagro, 22, 3º door 5, 46006, Valencia";
// var [street, number, floor, cp, city] = address.split(',');

// De-structuring objects
const cat = {
	name: "Guizmo",
	race: "European",
	color: "black",
    age: 2,
    brother: {
        name: "Rouco",
        race: "European",
        color: "black and white"
    },
};

// var name = cat.name;
// var color = cat.color;
var {name, age, color} = cat;
var {name:namebrother, age:agebrother = "unknown", color:colorbrother} = cat.brother;

// Replace default parameters
// function greet(greetings, name = "Ricardo1470", moment) {
//     alert(`${greetings} ${name}, happy ${moment}`);
// }

// greet("Hello", undefined, "afternoon");

function greet({greetings, name = "Ricardo1470", moment = "day"}) {
    alert(`${greetings} ${name}, happy ${moment}`);
}

greet({greetings: "Hello"});