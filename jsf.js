
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


//6
const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    lastName:'Montoya',
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    // getCatchPhrase(person) {
    //     if (westley.numFingers = 6){
    //         return "Fezzik, tear his arms off."
    //     }
    // return 'Nice to meet you.';}
    // }

    getCatchPhrase:(westley) => westley.numFingers = 6 
    ? "Fezzik, tear his arms off." 
    :"Nice to meet you."
    }
    
    inigo.greeting(westley)
    inigo.greeting(rugen)

//7
const basketballGame = {
    score: 0,
    freeThrow() {
    this.score++;
    return this;
    },
    basket() {
    this.score += 2;
    return this;
    },
    threePointer() {
    this.score += 3;
    return this;
    },
    foulscore:0,
    fouls(){
        this.foulscore++;
        return this;
    },
    halfTime() {
    console.log('Halftime score is '+this.score);
    console.log('Halfftime fouls score is '+ this.foulscore)
    },
    fullTime(){
        console.log('Fulltime scrore is '+ this.score);
        console.log('Fullftime fouls score is '+ this.foulscore)
    },
    }
    //modify each of the above object methods to enable function chaining as below:
    basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
    basketballGame.basket().freeThrow().freeThrow().basket().threePointer().fullTime();
    basketballGame.fouls().halfTime();
    basketballGame.fouls().fullTime();
//NOT RIGHT NEED TO FIX ON FOULS

//8
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}
for(let key in sydney){
    console.log(sydney[key])
}

const christchurch = {
    name:'Christchuch',
    population:396200,
    state:"Canterbury",
    timezone:"NZ"
}
for(let key in christchurch){
    console.log(christchurch[key])
}
//9
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let moreSports = {...teamSports};
// moreSports.push("DOTA2");
// moreSports.unshift("Sleep");
console.log(teamSports.push("DOTA2"));
console.log(teamSports.unshift("Sleep"));
console.log(moreSports)

let dog2 = dog1
dog2 = "Cat";
console.log(dog2)
let cat2 = {...cat1};
cat2.name = "Dog";
console.log(cat2)
console.log(teamSports)
console.log(cat1)

//10
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;

    this.canDrive = () => {
        return this.age > 18;
    }
    }
let person1 = new Person("Mark","28");
let person2 = new Person("Takumi","17");
console.log(person1)
console.log(person2)
console.log(person1.canDrive())
//NEED TO FIX THIS ON Q.e
class PersonClass {
    person(name, age) {
        this.name = name;
        this.age = age;
    }
    canDrive() {
        return this.age > 18;
    }
}
let person3 = new PersonClass("Zihao", 28);
console.log(person3)
console.log(person3.canDrive())
//NEED TO FIX THIS ON Q.e