// Write a program that reads 5 Random 2 Digit values ,
// then find their sum and the average
let R1 = Math.floor(Math.random() * 10 + 90);
let R2 = Math.floor(Math.random() * 10 + 90);
let R3 = Math.floor(Math.random() * 10 + 90);
let R4 = Math.floor(Math.random() * 10 + 90);
let R5 = Math.floor(Math.random() * 10 + 90);
//Printing Statement
console.log("R1 : "+ R1,"R2 : " +R2,"R3 : " +R3,"R4 : "+ R4,"R5 : "+ R5);
let sum = R1 + R2 + R3 + R4 + R5;
console.log("Total sum of RANDOM NUMBERS : "+sum);
let Average = sum / 5;
console.log("Average of RANDOM NUMBER is : "+ Average);