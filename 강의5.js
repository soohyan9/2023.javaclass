//Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// fuction name(param1, param2) { body... return; }
// one function -- one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint => createCard, createPoint
// funtion is object in JS
log('hi');

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
    return 0;
}
log('Hello***');
log(123);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from) {
    console.log('${message} by ${from}');
}
showMessage('Hi!');

function showMessage(message, from = 'unknown') {
    console.log('${message} by ${from}');
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    printAnother();
    // console.log(childMessage); //error
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
    //모든함수 = undefined
}
const result = sum(1, 2); //3
console.log('sum: ${sum(1, 2)}');
log(result)