
//1
"" + 1 + 0;//""10
console.log(""+ 1 + 0);
"" - 1 +0;//""-1
console.log("" - 1 +0);
true + false;//1
console.log(true + false)
!true;//fause
console.log(!true)
6 / "3";//2
console.log(6 / "3")
"2" + "3";//23
console.log("2" + "3")
4 + 5 + "px";//9px
console.log(4 + 5 + "px")
"5" + 4 +5;//545
console.log("5" + 4 +5)
"4" - 2;//2
console.log("4" - 2)
"4px" - 2;//NaN
console.log("4px" - 2)
4 - 2 + "px";//2px
console.log(4 - 2 + "px")
"-9" + 5;//-95
console.log("-9" + 5)
"-9" - 5;//-14
console.log("-9" - 5)
null +1;//1  null=0
console.log(null +1)
undefined + 1;//NaN
console.log(undefined + 1)
undefined == null;//true 
console.log(undefined == null)
undefined === null;//false
console.log(undefined === null)
"\t \n" -2;//-2
console.log("\t \n" -2)

//2
let three = 3
let four = 4
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four//32
let multiplication = three * four //12
let division = three / four//0.75
let subtraction = three - four//-4
let lessThan1 = three < four//true
let lessThan2 = thirty < four//true

console.log(addition)
console.log(multiplication)
console.log(division)
console.log(subtraction)
console.log(lessThan1)
console.log(lessThan2)

//3
if (0) console.log('#1 zero is true')
    if ("0") console.log('#2 zero is true')
    if (null) console.log('null is true')
    if (-1) console.log('negative is true')
    if (1) console.log('positive is true')


//4
let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}
console.log(result)

//5
// function getGreeting(name) {
//     return 'Hello ' + name + '!';
//     }
//    console.log (getGreeting("mark"))
// let getGreeting = function(name){
//     console.log(`Hello" ${name} '!'`)
// }
// console.log (getGreeting("mark"))

let getGreeting = (a,b) => "hello"+ "mark" 
console.log(getGreeting())

const user = { // user object contained within curly braces
    firstName: 'Mark', // string property with key 'name' and value 'joe'
    age: 28, // numeric property with key 'age' and value 20
    'has a dog': false // multi-word property key 'has a dog' with boolean value true
};

user.location = "Christchurch";
let dogOwner = user["has a dog"];
console.log(dogOwner)
console.log(user.location)
delete user.location;
console.log(user.location)
