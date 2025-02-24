//1
console.log("ex1------------------------------")
function ucFirstLetters(city) {
    return city.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.log(ucFirstLetters("los angeles")) //Los Angeles

//2
console.log("ex2---------------------------------")
truncate = (str,max) =>{
    if(str.length > max){
        return str.slice(0,max) + "......"
    }
    return str;
}
console.log(truncate('This text will be truncated if it is too long', 25))
console.log(truncate("This one is even shorter than the last one", 24))


//3
console.log("ex3-------------------------------")
function findMatchingAnimals(beginsWith){
    beginsWith = beginsWith.toUpperCase()
    const matchAnimals = animals.filter(animal => animal.toUpperCase().startsWith(beginsWith));
    return matchAnimals
}
const animals = ['Tiger', 'Giraffe'];
animals.push("Mug","Teaspoon");
animals.unshift("Airfryer","Oven")
const replaceMiddleAnimal = animals.splice(2,2,"Desk","Cabinet");
console.log(animals)
console.log(findMatchingAnimals("t"))


//4
console.log("ex4-------------------------------")
function camelCase(cssProp){
    return cssProp.split("-").map((word,index)=>{
        if(index === 0){
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('')
}
console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display


//5
console.log("ex5---------------------------")
function currencyAddition(float1, float2) {
    let result = (float1 * 100 + float2 * 100) / 100;
    return result;
}
console.log(currencyAddition(0.2,0.1));

function currencyOperation(float1,float2,Operation,numDecimals){
    float1 = float1 * 100;
    float2 = float2 * 100;
   let results;

   switch(Operation){
    case "+":
        results = (float1 + float2) / 100; 
        break
    case "-":
        results = (float1 - float2)/100;
        break
    case "*":
        results = (float1 * float2)/10000;
        break
    case "/":
        if(float2 ===0){
            throw new Error("Float2 cant be 0");
        }
        results = (float1/float2);
        break;
   }
   return parseFloat(results.toFixed(numDecimals));
}
console.log(currencyOperation(32.3,6.5,"+"));
console.log(currencyOperation(40.2,10.5,"-"));
console.log(currencyOperation(50.333,40.666,"*"));
console.log(currencyOperation(4.2,2.6,"/"))


//6
console.log("ex6------------------------------------");

function unique(duplicatesArray){
    return [...new Set(duplicatesArray)];
}
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]


//7
console.log("ex7-----------------------------------")
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];
//a
function getBookTitle(bookId){
    let result = books.find(书 => 书.id == bookId)
    return result
}
console.log(getBookTitle(3))
//b
function getOldBooks(){
    let oldBooks = books.filter(老书 =>老书.year <1950)
    return oldBooks
}
console.log(getOldBooks())
//c
function addGenre(){
   return books.map(genre => ({...genre,genre:'Classic'}))
} 
let updatedBooks = addGenre()
console.log(addGenre())
//d
function getTitles(authorInitial){
   return books.filter(book => book.author.charAt(0)==authorInitial)
    .map(book => book.title)
}
//use map to go over th object and filter the initial of author 
console.log('getTiles', getTitles("J"))
//e
function latestBook(){
// return books.find(book => book.year == )
  let  latestBook = null
books.forEach(book => {
    if(
        latestBook == null 
     )
      latestBook = book
  if (
    book.year > latestBook.year 
)
     latestBook = book
}) 
return latestBook
}
console.log(latestBook())

function latestBook2() {
    let latestBook = null;
    books.forEach(book => {
        if (latestBook == null || book.year > latestBook.year)
            latestBook = book;
    })
    return latestBook;
}

function latestBook3() {
    let latestYear = 0;
    books.forEach(book => {
        if (latestYear == 0 || book.year > latestYear.year)
            latestYear = book.year;
    })
    return books.find(book.year === latestYear); // sooo redundant tho
}
 
//8
console.log("ex8-------------------------------")
function printPhoneBook(contacts){
    contacts.forEach((value,key) => {
        console.log(`${key}:${value}`)
    });
}
const phoneBookABC = new Map()//an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
const phoneBookDEF = new Map([
    ['David', '1111111'],
    ['Elsa', '22222222'],
    ['Frank', '3333333']
],
)
phoneBookABC.set('Caroline','444444444')
const phoneBook = new Map(phoneBookABC);
phoneBookDEF.forEach((value,key) => {
    phoneBook.set(key,value);
})

console.log(phoneBookABC)
console.log(phoneBookDEF)
console.log(phoneBook)
printPhoneBook(phoneBookABC)
printPhoneBook(phoneBookDEF)

//9
console.log("ex9----------------------------")
let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
    };
function sumSalaries(salaries){
    let result = 0;
    for(let name in salaries){
        result += salaries[name];
    }
    return result
}
function topEarner(salaries){
    let name = "";
    let topAmount = 0;
    for(let[employee,salary]of Object.entries(salaries)){
        if(salary > topAmount){
            topAmount = salary;
            name = employee
        }
    }
    return name
}
console.log(sumSalaries(salaries))
console.log(topEarner(salaries))
//10
console.log("ex10----------------------------")
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
const minus = today.getHours()* 60 + today.getMinutes()
console.log(`${minus}`+ ' minus have passed so far today')
const secs = (today.getHours()* 60 + today.getMinutes()) * 60 + today.getSeconds()
console.log(`${secs}` + "seconds have passed so far today")
let myAgeInYears = today.getFullYear() - 1997;
let myAgeInmouths = 12 + today.getMonth() - 9 + 1;
let myAgeInDays = today.getDate() - 9; 
console.log(`I am ${myAgeInYears}years, ${myAgeInmouths}months and ${myAgeInDays}days old`)
function daysInBetween(date1,date2){
    if(date1 > date2){
        result = date1 - date2;
    }
    if(date2 > date1){
        result = date2 - date1;
    } else{result = "Err:only numbers and can not be the same date"}
    // date1 = result - date2;
    //  date2 = result - date1;
   return result
}
console.log(daysInBetween(11,11))