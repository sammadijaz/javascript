// Source:  https://youtu.be/X7hDBhd_L5U?si=M-r6vR8WJR906bq3

// 01. Coversions

// Converting one datatype to another.

// To do that, first of all we will check the datatype of the variable. 

// We do it because when data comes from other sources that where we havent written the code like forms and other different sources, it could be a number but its datatype could be a string so we do it to make sure.

let num = 33

// Two ways of checking the datatype of a variable in JavaScript.

// 01. (using 'typeof' simply )
console.log(typeof num); // Output: number

// 02. (using it is a method by putting brackets)
console.log(typeof (num)); // Output: number

// Both ways have the same output. You can use either one of them.


// 1. Converting above Number variable into a string 
let str = String(num)
console.log(typeof str); // Output: string


// Now , let's dive deep into the conversions with more deep examples

// Assigning a new variable of string type having not only number in it

let aString = "123abc"  // If we make it only have numbers, it would get converted int a number type easily but we want to explore what happens if they're not just numbers.

let aNumber = Number(aString) // Convrting aString into a number
console.log(typeof aNumber); // Output: number

// BUTTT!!! Wait a minute! Our actual string had '123abc' and we all know 'abc' is not a number but the conversion got successfull right? 

// There is a catch. Although the datatype got converted apparently but if we print the actual variable in which we converted the datatype which in this case is 'aString', we will get to know that it outputs "NaN" (Not a mumber)

console.log(aNumber) // Output: NaN

// NaN is a special value in JavaScript that represents "Not a Number". So, apparently the conversion was successful but the actual value is NaN which is not a number.


// But the datatype of NaN is number. So, if we check the datatype of aNumber, it will be number 

// So its a special value under the dataype of number datatype
console.log(typeof NaN); // Output: NaN

// Lets test this example for other datatypes

// Null to Number = 0
let aNull = null
let NullisANumber = Number(aNull)
console.log(NullisANumber); // Output: 0

// Undefined to Number = NaN
let anUndefined = undefined
let undefinedisANumber = Number(anUndefined)
console.log(undefinedisANumber); // Output: NaN

// Boolean to Number = 1 or 0
let aBoolean = true
let booleanisANumber = Number(aBoolean)
console.log(booleanisANumber); // Output: 1

// String to Number = NaN if string is not a number
// We already have seen that above in 'aString' variable


// 2. Conversions to boolean

//01. From number to boolean

// Any number except 0 is true in boolean context
let numToBoolean = Boolean(num)
console.log(numToBoolean); // Output: true


//02. From string to boolean

// Any string except empty string is true in boolean context
let strToBoolean = Boolean(aString)
console.log(strToBoolean);


// *******************Operations*********************


let value = 10
let negativeOfValue = -value // Output: -10

console.log(negativeOfValue);



