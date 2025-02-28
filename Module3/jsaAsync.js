//This is a copy of jsa.js
//Maybe not to use this one for giving feedback
// Used chatGPT turned each function to async function
// to orgnised each exercise
//so it doesnt look messy in terminal log
//Only for my personal ref for future uses/review/refresh of these functions

//1
async function ex1() {
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
}

async function ex2() {
  console.log("ex2-----------------------------");

  let delayMsg = (msg) => {
    return new Promise((resolve) => {
      console.log(`This message will be printed after a delay: ${msg}`);
      resolve();
    });
  };

  await delayMsg("#4: Not delayed at all");
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log("#3: Delayed by 0ms");
      resolve();
    }, 0)
  );
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log("#2: Delayed by 20ms");
      resolve();
    }, 20)
  );
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log("#1: Delayed by 100ms");
      resolve();
    }, 100)
  );
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log("#5: Huge delayed by 10000ms");
      resolve();
    }, 10000)
  );
}

async function ex3() {
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

  const debouncedPrintMe = debounce(printMe, 1000);

  // Simulate events that trigger debounced function
  await new Promise((resolve) => {
    setTimeout(() => {
      debouncedPrintMe("I am debounced message 1");
      resolve();
    }, 1800);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      debouncedPrintMe("I am debounced message 2");
      resolve();
    }, 1700);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      debouncedPrintMe("I am debounced message 3");
      resolve();
    }, 1100);
  });
}

async function ex4() {
  console.log("ex4-----------------------");

  function printFibonacci(limit) {
    return new Promise((resolve) => {
      let a = 0,
        b = 1;
      let count = 0;

      const intervalId = setInterval(() => {
        if (count >= limit) {
          clearInterval(intervalId);
          resolve();
          return;
        }
        console.log(b);
        [a, b] = [b, a + b];
        count++;
      }, 500);
    });
  }

  await printFibonacci(10);

  function printFibonacciTimeouts(a = 0, b = 1, count = 0, limit = 10) {
    return new Promise((resolve) => {
      if (count >= limit) {
        resolve();
        return;
      }
      console.log(b);
      setTimeout(() => {
        printFibonacciTimeouts(b, a + b, count + 1, limit).then(resolve);
      }, 500);
    });
  }

  await printFibonacciTimeouts();
}

async function ex5() {
  console.log("ex5-----------------------");

  let car = {
    make: "Porsche",
    model: "911",
    year: 1964,
    description() {
      console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    },
  };
  car.description();

  //   setTimeout(() => {
  //     car.description();
  //   }, 500); //fails //comment out this like cause this is undefined
  const newCar = { ...car, year: 2016 };
  console.log(newCar.description());
  setTimeout(car.description.bind(car)); //this is the correct syntax that should use above
  const newCar2 = { ...newCar, model: "718" };
  setTimeout(newCar2.description.bind(newCar2), 500);
}

async function ex6() {
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
}

async function ex7() {
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
  myClock.start();
}

async function ex8() {
  console.log("ex8---------------------------");

  function validateStringArg1(fn) {
    return function (...args) {
      for (let arg of args) {
        if (typeof arg !== "string") {
          throw new Error("they are not strings");
        }
      }
      return fn(...args);
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
    console.error("Error: They are not strings");
  }
}

async function ex9() {
  console.log("ex9---------------------------");

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

  try {
    let delay = await randomDelay();
    console.log(`the delay was ${delay} secs`);
  } catch (delay) {
    console.log(`The delay was ${delay} seconds, it's odd`);
  }

  await randomDelay();
  console.log("There appears to have been a delay.");
}

//10
// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'
import fetch from "node-fetch";
globalThis.fetch = fetch;

async function ex10() {
  function fetchURLData(url) {
    let fetchPromise = fetch(url).then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    });
    return fetchPromise;
  }
  fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
    .then((data) => console.log(data))
    .catch((error) => console.error(error.message));

  async function fetch(url) {
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        return await response.json();
      } else {
        throw new Error(`Error:${response.status}`);
      }
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  }
  fetchAsync("https://jsonplaceholder.typicode.com/todos/1")
    .then((data) => console.log(data))
    .catch((error) => console.error(error.message));

  fetchAsync("http://whatever-url")
    .then((data) => console.log(data))
    .catch((error) => console.error(error.message));
}

// Sequential Execution of all exercises
async function runExercises() {
  await ex1();
  await ex2();
  await ex3();
  await ex4();
  await ex5();
  await ex6();
  await ex7();
  await ex8();
  await ex9();
  await ex10();
}
runExercises();
