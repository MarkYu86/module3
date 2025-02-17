//+= = value = value+
//string is very important
//`this is a string with expressions $(expressions)`
let age = "30";
let newage = 30;
console.log(age == newage);//checks values
console.log(age === newage);//also checks data types 
console.log(age = newage);
//object
const tv = { // object starts here
    brand: "Sony Bravia", // key-value pair. brand is the key, "Sony Bravia" is the value
    size: "55-inch", // values can be any data type
    model: 2023, // multiple key-value pairs are separated by commas
    resolution: "4K" // the comma on the last key-value pair can be omitted
  } // object ends here. All data is stored in tv variable.
  console.log(tv.model)

console.log(typeof undefined); // undefined
console.log(typeof 0); // number
console.log(typeof 10n); // bigint
console.log(typeof true); // boolean
console.log(typeof 'text'); // string
console.log(typeof Symbol('id')) // symbol
console.log(typeof Math); // object
console.log(typeof null); // object
console.log(typeof console.log)//function

console.log( String(false) ) // false - string form of boolean
console.log( "1" + 2 + 3 ) // 123 - string ‘1’ is concatenated with number 2 then number 3
console.log( 1 + 2 + "3" ) // 33 - number 1 is added to number 2 then concatenated with string ‘3

console.log( Number("      4      ") ) // 4 - trims spaces
console.log( Number(null) ) // 0 - intentionally empty value converts to 0
console.log( Number(undefined) ) // NaN - non-existent value is unknown
console.log( Number(false) ) // 0 - false converts to 0
console.log( Number(true) ) // 1 - true converts to 1
console.log( Number("") ) // 0 - empty string converts to 0
console.log( Number("not a number") ) // NaN - non-empty strings beginning with chars cannot convert

console.log( Boolean("") ) // false - empty string
console.log( Boolean(0) ) // false - zero value
console.log( Boolean(null) ) // false - no value
console.log( Boolean(undefined) ) // false - unknown value
console.log( Boolean(NaN) ) // false - not a number
console.log( Boolean("false") ) // true - non-empty string
console.log( Boolean(-1) ) // true - non-zero number

const firstName = 'Mark'

if (firstName){
    console.log(`hello ${firstName}`)
}else {
    console.log(`name not found, value is ${firstName}`)
}
