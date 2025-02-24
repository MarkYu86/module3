//1
console.log("ex1----------------------------")
function makeCounter(startFrom = 0, incrementBy = 1) {
    let currentCount = startFrom;
    return function() {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
    };
    }
    let counter1 = makeCounter(5,3);
    let conter2 = makeCounter(20,8);
    counter1(); // 1
    counter1(); // 2
    conter2();
    conter2();

//2
console.log("ex2-----------------------------")
delayMsg = (msg) =>{
console.log(`This message will be printed after a delay: ${msg}`)
}

clearTimeout(setTimeout(delayMsg,10000,'#5:Huge delayed by 10000ms'))
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

//7
console.log("ex7---------------------------------------")
class DigitalClock {
    constructor(prefix) {
    this.prefix = prefix;
    }
    display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
if (hours < 10) hours = '0' + hours;
if (mins < 10) mins = '0' + mins;
if (secs < 10) secs = '0' + secs;
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
// const myClock = new DigitalClock('my clock:')
class PrecisionClock extends DigitalClock{
    constructor(prefix,precision = 1000){
        super(prefix);
        this.precision = precision;
    }
    start(){
        this.display();
        this.timer = setInterval(() => this.display(),this.precision);
    }
}
const myClock = new PrecisionClock('my precise clock:',5000)
console.log(myClock)
//8
console.log("ex8---------------------------------------")
