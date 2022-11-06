// var vs let

// var role = 'developer';


// {
//     var role = 'admin';
// }

// console.log(role);


// let role = 'developer';


// {
//   let role = 'admin';
// }

// console.log(role);

var age = 100;
var name = "B42WEENG";

// console.log(typeof 999);
// console.log(typeof name);

// var returnOfTypeOf = typeof 999; // typeof var-name/value returns a string itself

// console.log( typeof returnOfTypeOf );

var a = 100;
var b = 1000;

function sumOfNums(a, b) {

  a = 200;
  b = 2000;

  // console.log(a + b);
}

sumOfNums(a, b); // sumOfNums(100, 1000);

// console.log(a + b);


// incremental looping
// for(var a = 0; a<10; a++) {
//     console.log('Line 1');
//     console.log('Line 2');
//     console.log('Line 3');
// }
// for(var a=1; a <= 10;  a++) {
//     console.log(a);
// }

// // decremental looping
// for(var a=10; a > 0;  a--) {
//     console.log(a);
// }


// for(var a=2; a <= 16; a = a + 2 ) {
//     console.log(a);
// }


// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16

// for(var a = 12; a <= 120; a = a+12) {
//     console.log(a);
// }

// for(var a = 1; a <= 10; a = a + 1) {
//     console.log(a * 12);
// }

// console.log( 4 != 4 );

// ==

// loose comparison ( type will not be checked )
// console.log( 2 == '2' );


// tight comparison ( type will also be compared )
// console.log( 2 === '2' );


// var age = 100;
// if (age === 100) {  // 10 === 100 
//     console.log('You reached 100th birthday');
// } else {
//     console.log('Your yet to reach 100');
// }


// var age = 101;
// if (age === 100) {  //  100 
//     console.log('You reached 100th birthday...');
// } else if (age < 100) { // less than 100
//     console.log('Your age is less than 100');
// } else { // age will greater than 100
//     console.log('Your age is greater than 100');
// }


// 0 < age <= 10 ---> Your are a kid
// 10 < age <= 20 ---> Your are a Teenager
// 20 < age <= 50 ---> Your are an adult
// 50 < age ---> Your old

// && ---> multiple conditions
// var age = 151;

// if (age > 0 && age <= 10) { // both the must satisfy
//     console.log('Your are a kid');
// } else if (age > 10 && age <= 20) {
//     console.log('Your are a Teenager');
// } else if (age > 20 && age <= 50) {
//     console.log('Your are an adult');
// } else if (age > 50 && age <= 150 ) {
//     console.log('Your old');
// } else {
//     console.log('Invalid Age');
// }

// console.log(117 % 10);


var num = 99;


// Num is Odd or Num is Even

// if (num % 2 === 0) {
//     console.log('Num is Even');
// } else {
//     console.log('Num is Odd');
// }

// if (num % 2 !== 0) {
//     console.log('Num is Odd');
// } else {
//     console.log('Num is Even');
// }


// if (num % 2) { // if 1 1 evaluate to true, 0 evaluate to false
//     console.log('Num is Odd');
// } else {
//     console.log('Num is Even');
// }



// collection of data ( any type of js datatype (number, string, bool) )
var arr = [1, "Sanjay", true, 4, 5.005];
//         0  1        2   3 4

// console.log(arr[4]);

// get length of an array
// console.log(arr.length);

// console.log(arr[5]);


// print all the elements of the array in separate line
// console.log(arr);

// looping/iterating throw an array
// for(var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// print all the values of an in single line
// 1 Sanjay true 4 5.005

// console.log(...arr);

// console.log(arr[ arr.length - 2]);


var sentence = 'We in B42WEENG Session Day 1';

// console.log(sentence.split(' '));

var sentence = 'First-Second-Third-Fourth';
// console.log(sentence.split('-'));


var arrOfStrings = ['B42WEENG', 'Day', '1', 'Session', 'Code', 'Kata'];

// B42WEENG Day 1 Session Code Kata
console.log(arrOfStrings.join(' '));

// B42WEENG--Day--1--Session--Code--Kata
console.log(arrOfStrings.join('--'));


// userINput odd or even
//   const num = +userInput[0]; // 
const num = parseInt(userInput[0]);

// console.log(typeof num);

// check for odd or even
if (num % 2 === 0) {
  console.log('Num is Even');
} else {
  console.log("Num is Odd");
}


// input format
// n
// m

// print Hello World n number of times
// print Hi There m number of times

const count = parseInt(userInput[0]);

const m = parseInt(userInput[1]);

for (var i = 0; i < count; i++) {
  console.log('Hello World')
}

for (var i = 0; i < m; i++) {
  console.log('Hi There');
}


// input format
// n m

// print Hello World n times
// print Hi There m times


const lineOne = userInput[0];

// apply split for lineOne
const arrLineOne = lineOne.split(" ");

const n = arrLineOne[0];
const m = arrLineOne[1];

for (var i = 0; i < n; i++) {
  console.log("hello World");
}

for (var i = 0; i < m; i++) {
  console.log("Hi There");
}

