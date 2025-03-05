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

//good example
const phone = {
    model: 'iPhone 11',
    colour: 'black'
}
if (phone.colour) console.log(`My ${phone.model} is ${phone.colour}`) // prints message
if (phone.storage) { // undefined counts as false, so the below won't print
    console.log(`My ${phone.model} has ${phone.storage}GB`);
}

let five = 5;
for (let i = 0; i <= 5; i++){
    console.log(`interation ${i} of ${five}`)
}

let videoLikes = [245,756,212,435,658];//length = 5
let totalLikes = 0;

for(let i=0; i < videoLikes.length;i++) {
    totalLikes += videoLikes[1]
    console.log(`After video ${i+1}, you have ${totalLikes}total likes!`)
}




let phones = { 
    model: 'iPhone 11',
    colour: 'black',
    storage: 64
}
for (let key in phones) { // iterates over each property in the phone object, stores in ‘key’ variable
    console.log('key: ' + key); // prints each object property name (key) in turn
    console.log('value: ' + phones[key]); // prints each object value in turn
}

//array filter 
const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }, 
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
    { id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts' }
    ]
    // we usually use an arrow function - runs once for each element, returns array of matches
    let shirts = products.filter(product => product.category == 'Shirts')
    let under50 = products.filter(product => product.price < 50)
    console.log(shirts) // 2 matching items in shirts array
    console.log(under50) // 3 matching items in under50 array

    const cars = [
        {id:1, Name:"Toyota",price:"50",type:"sedan"},
        {id:2, Name:"Subaru",price:"30",type:"hatchback"},
        {id:3,Name:"Mazda", price:"40",type:"coupe"},
        {id:4,Name:"Honda", price:"60",type:"SUV"}
    ]

    let hatchback = cars.filter(cars => cars.type == "hatchback" )
    console.log(hatchback) 

    // products.sort( (product1, product2) => product1.price - product2.price )
    // console.log(products) // original array is modified to new low-high price sorting order: 1,4,3,2
    // products.sort( (p1, p2) => p1.title > p2.title ? 1 : -1 )
    // console.log(products) // original array is modified to new title sorting order: 3,4,2,1
    // const numbers = [4,8,1,5,66,23,41]
    // console.log( numbers.sort() ) // [ 1, 23, 4, 41, 5, 66, 8 ] : string comparisons
    // console.log( numbers.sort((num1, num2) => num1 - num2) ) // [ 1, 4, 5, 8, 23, 41, 66 ]    
   console.log("---------------------------------")
   
   let globalVariableCat = 'cat';
function myFunction() {
let localVariableDog = 'dog'
return 'global function with local scope variable '+localVariableDog;
}
myFunction() //
console.log("---------------------------------")
function makeAdder(x) { // function factory: bundles value of x into the scope of adder
    return function adder(y) { // closure function 'adder' now has access to both x and y when created
    return x + y;
    };
    }
    const add5 = makeAdder(5); // sets x to 5, even when adder function is returned and called
    console.log( add5(10) ) // x is still 5 and y is 10, result is 15

function step1(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            console.log("Started preparing pizza...");
            resolve();
        },0)
    })
}
function step2(){
    return new Promise(resolve =>{
        setTimeout(() => {
            console.log("make the base")
            resolve()
        },
        2000)
    })
}
     
function step3(){
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log("Added the sauce and cheese")
            resolve()
        },4000)
    })
}
  
function step4(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Added the pizza toppings")
            resolve()
        },
        6000)
    })
}

const step5 = function(){
    return new Promise(resolve =>{
        setTimeout(() => {
            console.log("Cooked the pizza")
            resolve();
        },8000)
        })
    }

const step6 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Pizza is ready")
            resolve()
        },10000)
    })
}
step1()
step2()
step3()
step4()
step5()
step6()
