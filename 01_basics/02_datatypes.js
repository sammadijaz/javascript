// use this to run the file:  node 01_basics/02_datatypes

"use strict"; // Asking to treat our written code in JS as the newer version of JS

/*  

A while agp, JavaScript was not like the its is as of now. It was updated and classes etc were added into it.

So there was a lot of code written in the older version. The team behind JS did not want it to stop working so they made it workable aswell. This was a little background behind ' "use strict"; '  

*/


//  alert(3+3)  // This wont work because we are using nodejs not a browser, it will work in the console of a browser.

// 1. DataTypes in JavaScript

let a = 1 // number datatype

let b = "string" // string datatype

let c = true // boolean datatype

let d = null // null 

let e; // undefined 

// Primitive DataTypes:


// 'int'/ number can store upto '2^53 - 1' 

// There is 'bigint' aswell

// anything wrapped in double quotes or single quotes is a 'string'

// 'boolean' just stores true/false

// 'null' is a stand-alone value and is considered as 'object' data type in JavaScript

// 'undefined' itself is a datatype in JavaScript

/* 

NOTE: 'undefined' itself is a datatype like 'string', but 'null' is an 'object' datatype. People call this a flaw of the language but some say it is how its done so yeah. 

use ' console.log(typeof null); ' to check for yourself

*/


// 'symbol' type is used for unique values


// 2. Object DataType  (We will learn about it later)


// To check the datatypes we use:

console.log(typeof null); // null is an object datatype
console.log(typeof undefined); // undefined itself is a datatype





console.log(typeof a);

console.log(typeof b);

console.log(typeof c);

console.log(typeof d);

console.log(typeof e);
