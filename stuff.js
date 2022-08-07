//Synchronous
function greet(name, myFunction) {
    console.log('Hello world');
    myFunction(name);
}
function sayName(name) {
    console.log('Hello' + '' + name);
}
setTimeout(greet, 2000, 'Levi', sayName );

//Asynchronous
function greet() {
    console.log('Hello world');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 2000);
sayName('Alex');