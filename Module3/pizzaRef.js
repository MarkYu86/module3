

// Pizza making class exercise:
// Task 1: Using different function types

// Function declaration
function startPreparing() {
  console.log("Started preparing pizza ...");
}

// Function expression
const makeBase = function () {
  console.log("Made the base");
};

// Arrow function
const addSauceAndCheese = () => {
  console.log("Added the sauce and cheese");
};

// Function declaration
function addToppings() {
  console.log("Added the pizza toppings");
}

// Function expression
const cookPizza = function () {
  console.log("Cooked the pizza");
};

// Arrow function
const pizzaReady = () => {
  console.log("Pizza is ready");
};

// Call the functions in sequence
console.log("Task 1: Regular Functions");
startPreparing();
makeBase();
addSauceAndCheese();
addToppings();
cookPizza();
pizzaReady();

// Task 2: Asynchronous functions with setTimeout
function runTask2AfterDelay() {
  console.log("\nTask 2: Asynchronous with setTimeout");

  function startPreparingAsync() {
    setTimeout(() => {
      console.log("Started preparing pizza ...");
      makeBaseAsync();
    }, 1000);
  }

  function makeBaseAsync() {
    setTimeout(() => {
      console.log("Made the base");
      addSauceAndCheeseAsync();
    }, 2000);
  }

  function addSauceAndCheeseAsync() {
    setTimeout(() => {
      console.log("Added the sauce and cheese");
      addToppingsAsync();
    }, 1000);
  }

  function addToppingsAsync() {
    setTimeout(() => {
      console.log("Added the pizza toppings");
      cookPizzaAsync();
    }, 1500);
  }

  function cookPizzaAsync() {
    setTimeout(() => {
      console.log("Cooked the pizza");
      pizzaReadyAsync();
    }, 3000);
  }

  function pizzaReadyAsync() {
    setTimeout(() => {
      console.log("Pizza is ready");
      // After Task 2 is complete, start Task 3
      setTimeout(runTask3, 1000);
    }, 1000);
  }

  // Start the asynchronous process
  startPreparingAsync();
}

// Task 3: Using Promises
function runTask3() {
  console.log("\nTask 3: Using Promises");

  function startPreparingPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Start preparing pizza ...");
        resolve();
      }, 1000);
    });
  }

  function makeBasePromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Made the base");
        resolve();
      }, 2000);
    });
  }

  function addSauceAndCheesePromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Added the sauce and cheese");
        resolve();
      }, 1000);
    });
  }

  function addToppingsPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Added the pizza toppings");
        resolve();
      }, 1500);
    });
  }

  function cookPizzaPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Cooked the pizza");
        resolve();
      }, 3000);
    });
  }

  function pizzaReadyPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Pizza is ready");
        resolve();
      }, 1000);
    });
  }

  // Chain the promises
  startPreparingPromise()
    .then(() => makeBasePromise())
    .then(() => addSauceAndCheesePromise())
    .then(() => addToppingsPromise())
    .then(() => cookPizzaPromise())
    .then(() => pizzaReadyPromise())
    .then(() => {
      // After Task 3 is complete, start Task 4
      setTimeout(runTask4, 1000);
    })
    .catch((error) => console.error("Error in pizza making process:", error));
}

// Task 4: Using async/await
async function runTask4() {
  console.log("\nTask 4: Using async/await");

  // Reusing the Promise functions from Task 3
  function startPreparingPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Started preparing pizza ...");
        resolve();
      }, 1000);
    });
  }

  function makeBasePromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Made the base");
        resolve();
      }, 2000);
    });
  }

  function addSauceAndCheesePromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Added the sauce and cheese");
        resolve();
      }, 1000);
    });
  }

  function addToppingsPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Added the pizza toppings");
        resolve();
      }, 1500);
    });
  }

  function cookPizzaPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Cooked the pizza");
        resolve();
      }, 3000);
    });
  }

  function pizzaReadyPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Pizza is ready");
        resolve();
      }, 1000);
    });
  }

  try {
    await startPreparingPromise();
    await makeBasePromise();
    await addSauceAndCheesePromise();
    await addToppingsPromise();
    await cookPizzaPromise();
    await pizzaReadyPromise();
    console.log("\nAll tasks completed!");
  } catch (error) {
    console.error("Error in async pizza making process:", error);
  }
}

// Start the sequence - Task 1 finishes immediately, then we start Task 2 after a delay
setTimeout(runTask2AfterDelay, 1000);





// Task 4 with error handling
// Task 4: Using async/await with error handling
console.log("Task 4: Using async/await with error handling");

// Promise-based functions with error simulation
function startPreparingPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Started preparing pizza ...");
      resolve();
    }, 500);
  });
}

function makeBasePromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Made the base");
      resolve();
    }, 500);
  });
}

function addSauceAndCheesePromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Added the sauce and cheese");
      resolve();
    }, 500);
  });
}

function addToppingsPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Always throw an error at this step
      reject(
        new Error("Error: Failed to add toppings - we're out of pepperoni!")
      );
    }, 500);
  });
}

function cookPizzaPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Cooked the pizza");
      resolve();
    }, 500);
  });
}

function pizzaReadyPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Pizza is ready");
      resolve();
    }, 500);
  });
}

// Main async function with error handling
async function makePizzaWithErrorHandling() {
  try {
    console.log("Starting pizza preparation process...");
    await startPreparingPromise();
    await makeBasePromise();
    await addSauceAndCheesePromise();

    console.log("About to add toppings...");
    await addToppingsPromise();

    // These lines won't execute due to the error above
    await cookPizzaPromise();
    await pizzaReadyPromise();
  } catch (error) {
    // Log the error properly
    console.error("❌ Error caught in async/await: ", error.message);
    console.error("❌ Error stack: ", error.stack);
    console.log("🔄 Pizza making process interrupted at the toppings stage!");
  } finally {
    // This will run regardless of success or failure
    console.log("✅ Pizza making attempt completed, with or without errors.");
  }
}

// Run the function
makePizzaWithErrorHandling();