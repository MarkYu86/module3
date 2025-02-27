//1
console.log("ex1----------------------------");
function makeCounter(startFrom = 0, incrementBy = 1) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}
let counter1 = makeCounter(5, 3);
let counter2 = makeCounter(20, 8);
counter1(); // 8
counter1(); // 11
counter2(); // 28
counter2(); // 36


//2
console.log("ex2-----------------------------");
let delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

clearTimeout(setTimeout(delayMsg, 10000, "#5: Huge delayed by 10000ms"));
setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

//3
console.log("ex3-----------------------------------------");
function debounce(func, ms = 1000) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, ms);
  };
}
function printMe(msg) {
  console.log(msg);
}

printMe = debounce(printMe);
const debouncedPrintMe = debounce(printMe, 1000);
setTimeout(() => debouncedPrintMe("I am debounced message 1"), 1800);
setTimeout(() => debouncedPrintMe("I am debounced message 2"), 1700);
setTimeout(() => debouncedPrintMe("I am debounced message 3"), 1100);
//4
console.log("ex4-----------------------");
function printFibonacci(limit) {
  let a = 0,
    b = 1;
  let count = 0;

  const intervalId = setInterval(() => {
    if (count >= limit) {
      clearInterval(intervalId);
      return;
    }
    console.log(b);
    [a, b] = [b, a + b];
    count++;
  });
}
console.log(printFibonacci(10));

function printFibonacciTimeouts(a = 0, b = 1, count = 0, limit = 10) {
  if (count >= limit) return;
  console.log(b);
  setTimeout(() => {
    printFibonacciTimeouts(b, a + b, count + 1, limit);
  }, 500);
}
console.log(printFibonacciTimeouts());
//5
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works
setTimeout(() => {
  car.description();
}, 500); //fails
const newCar = { ...car, year: 2016 };
console.log(newCar.description());
setTimeout(car.description.bind(car));
const newCar2 = { ...newCar, model: "718" };
setTimeout(newCar2.description.bind(newCar2), 500);

//6
console.log("ex6-----------------------------");
Function.prototype.delay = function (ms) {
  return (...args) => {
    setTimeout(() => {
      this.apply(null, args);
    }, ms);
  };
};
function multiply(a, b) {
  console.log(a * b);
}
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

function multiply(a, b, c, d) {
  console.log(a * b + c + d);
}
multiply.delay(500)(2, 3, 4, 5);
//7
console.log("ex7---------------------------------------");

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

const myClock = new PrecisionClock("my precise clock:", 5000);
console.log(myClock);
//8
console.log("ex8---------------------------");
function validateStringArg1(fn) {
  return function (...arguments) {
    for (let argument of arguments) {
      if (typeof argument !== "str") {
        throw new Error("they are not strings");
      }
    }
    return fn(...arguments);
  };
}
function orderItems(...itemName) {
  return `Order placed for: ${itemName.join(" , ")}`;
}

const validatedOrderItem = validateStringArg1(orderItems);
try {
  console.log(validatedOrderItem("Apple Watch")); // should run the function
  console.log(validatedOrderItem(123)); // should throw an error
  console.log(orderItems("a", "b", "c"));
  console.log(validatedOrderItem("a", "b", 123));
} catch (error) {
  console.error("Error:They are not strings");
} // should throw an error

//9
function randomDelay() {
  let delay = Math.floor(Math.random() * 20) + 1;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay * 1000);
  });
}
randomDelay()
  .then((delay) => {
    console.log(`the delay was ${delay} secs`);
  })
  .catch((delay) => {
    console.log(`The delay was ${delay} seconds,it's odd`);
  });
randomDelay().then(() => console.log("There appears to have been a delay."));
//10
