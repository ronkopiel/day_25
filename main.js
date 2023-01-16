"use strict";
import { Greet, calculate } from "./utils/utils.js";

const square = (x) => x*x;
console.log(square(4));


const isPositive = (y) => {
    if (y > 0) return true;
    else return false;
}

console.log(isPositive(2));
console.log(isPositive(-2));
console.log(isPositive("b"));

const formatName = (firstName, lastName, seperator = " ") => {
    const fullName = firstName+seperator+lastName;
    return fullName;
}

console.log(formatName('ron','kopiel','-'));
console.log(formatName('ron','kopiel'));
console.log(formatName('ron','kopiel','_'));
Greet('ron');
Greet('ron',true);

console.log(calculate(5,4,'/'))
console.log(calculate(5,4,'-'))
console.log(calculate(5,4,'*'))
console.log(calculate(5,4,'+'))
console.log(calculate(5,4))


const team = ["Chennai", "Mumbai", "Bangalore"];
const captain = ["Dhoni", "Rohit", "Kohli"];
const teamAndStaff = [...team, ...captain];
console.log(teamAndStaff);


const [manager, coach, assistant] = captain;
console.log(manager);
console.log(coach);
console.log(assistant);

const letters = [];
const [a, b, c] = letters;
console.log(a);
console.log(b);
console.log(c);
console.log(letters);


const actors = [
    { actorName: "Tom Hanks", birthdate: "July 9, 1956" },
    { actorName: "Meryl Streep", birthdate: "June 22, 1949" },
    { actorName: "Leonardo DiCaprio", birthdate: "November 11, 1974" },
   ];

   const [firsActor, ,thirdActor] = actors;
   console.log(thirdActor); 
   const { birthdate: leoBDay } = thirdActor;
   console.log(leoBDay);