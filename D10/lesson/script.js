// 4 Pillars

// Encapsulation
// Abstraction
// Inheritance
// Polymorphism

// --------------------------------------

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1,
//     },
//     draw: function () {
//         console.log("draw");
//     },
// };

// circle.draw();

// --------------------------------------

// Factory Function
// function createCirlce(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log("draw");
//         },
//     };
// }

// const circle = createCirlce(1);
// circle.draw()

// --------------------------------------

// Constructor Function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log("draw");
//     };
// }

// const another = new Circle(1);
// another.draw();

// --------------------------------------

// let x = {};

// // let x = new Object();

// new String(); // '', "", ``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3, ...

// --------------------------------------

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log("draw");
//     };
// }

// const another = new Circle(1);
// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);

// const Circle1 = new Function('radius', `
//     this.radius = radius;
//     this.draw = function () {
//         console.log("draw");
//     };
// `)

// const circle = new Circle1(1);

// note: kapag walang 'new' na keyword
// Circle.call(window, 1)
// const another = Circle(1);

// --------------------------------------

// Value Types and Reference Types

// Value Types

// Number
// String
// Boolean
// Symbol
// undefined
// null

// Reference Types

// Object
// Function
// Array

// Example 1
// let x = 10;
// let y = x;

// x = 20;

// console.log(x) // output: 20
// console.log(y) // output: 10

// Example 2
// let x = { value: 10 };
// let y = x; // note: address in memory yung nacocopy nya

// x.value = 20;

// console.log(x) // output: { value: 10 }
// console.log(y) // output: { value: 10 }

// Example 3
// let number = 10;

// function increment(number) {
//     number++; // sa loob 11 sya
//     console.log(number);  // output: 11
// }

// increment(number);
// console.log(number); // output: 10

// Example 4
// let obj = { value: 10 };

// function increment(obj) {
//     obj.value++; // sa loob 11 sya
//     console.log(obj); // output: { value: 11 }
// }

// increment(obj);
// console.log(obj); // output: { value: 11 }

// note:
// Primitives are copied by their value
// Objects are copied by their reference

// --------------------------------------

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log("draw");
//     };
// }

// const circle = new Circle(10);

// circle.location = { x: 1 };
// circle["location"] = { x: 1 }; // same lang sila

// Example 1
// const propertyName = "location";
// circle[propertyName] = { x: 1 };

// Example 2
// const propertyName = "center-location";
// circle[propertyName] = { x: 1 };

// // Example 3
// // note: to delete some property
// delete circle.location;
// // or
// delete circle["location"];

// --------------------------------------

// Enumerating Properties

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log("draw");
//     };
// }

// const circle = new Circle(10);

// Example 1
// note: to enumerate the properties
// for (let key in circle) {
//     // console.log(key);
//     console.log(key, circle[key]);
// }

// Example 2
// note: to enumerate the properties
// for (let key in circle) {
//     if (typeof circle[key] !== "function") console.log(key, circle[key]);
// }

// Example 3
// note: to get all the keys
// const keys = Object.keys(circle);
// console.log(keys);

// Example 4
// note: to check the existence of a property
// if ("radius" in circle) console.log("Circle has a radius");

// --------------------------------------

// Abstraction

// function Circle(radius) {
//     this.radius = radius;

//     this.defaultLocation = { x: 0, y: 0 };

//     this.computeOpyimum = function() {

//     }

//     this.draw = function () {
//         this.computeOpyimum();

//         console.log("draw");
//     };
// }

// const circle = new Circle(10);
// circle.defaultLocation = false;

// hide the details/complexity
// show the essentials

// --------------------------------------

// Private Properties and Methods

// function Circle(radius) {
//     this.radius = radius;

//     let defaultLocation = { x: 0, y: 0 }; // private property

//     let computeOpyimum = function(factor) { // private function
//         // ...
//     }

//     this.draw = function () {
//         let x, y; // accessible lang to sa function na ito
//         computeOpyimum(0.1);

//         console.log("draw");
//     };
// }

// const circle = new Circle(10);
// circle.draw()

// --------------------------------------

// Getters and Setters

// function Circle(radius) {
//     this.radius = radius;

//     let defaultLocation = { x: 0, y: 0 }; // private property

//     this.getDefaultLocation = function () {
//         return defaultLocation;
//     };

//     this.draw = function () {
//         console.log("draw");
//     };

//     Object.defineProperty(this, "defaultLocation", {
//         get: function () {
//             // read only property
//             return defaultLocation;
//         },
//         set: function (value) {
//             if (!value.x || !value.y) throw new Error("Invalid Location");
//             defaultLocation = value;
//         },
//     });
// }

// const circle = new Circle(10);
// circle.getDefaultLocation();
// circle.defaultLocation;
// circle.draw();

// circle.defaultLocation = 1
