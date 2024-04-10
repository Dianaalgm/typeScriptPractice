"use strict";
//basic type
let id = 5;
let company = 'Netflix';
let isPublished = true;
let x = 'hello';
//arrays
let ids = [1, 2, 3, 4, 5];
//saying that Ids is a number : of arrays
let arr = [1, true, 'hello'];
//Tuple : specify the exact types in an array
let person = [1, 'Brad', true];
// the need to be in the exact spot because its in that order. 
//Can't add new unless its SPECIFIED in the first array.
//Tuple Array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Sam']
];
//Union
let pid = 22;
//string OR number
//Enum : define a set of named constants, numeric or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
const user = {
    id: 1,
    name: 'John',
};
//Type Assertion: treat an entity as a different type
let cid = 1;
// let customerId = <numer>cid OR
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
//Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const brad = new Person(1, 'Brad Smith');
const mike = new Person(2, 'Mike John');
//Practice //////////////////////////////
//This is a function from edibit 
// function addition(a, b) {
// 	return addSum = a + b
// }
// console.log(addition(5,5))
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(4, 5)); //--->TS
// function triArea(base, height) {
// 	return (base * height) / 2
// }
// console.log(triArea(20 , 5))
function triArea(base, height) {
    return (base * height) / 2;
}
console.log(triArea(20, 5)); //--->TS
