
//Asynchronous
function sneeze(name) {
    console.log('-ACHOO!');
    setTimeout(function() {
        bless(name) 
        }, 1000)
    
}

function greet() {
    console.log('Hello world');
}

function sayName(name) {
    console.log('Hello' + ' ' + String(name));
    setTimeout(function() {
        sneeze(name) 
        }, 4000)
}

function goodbye(name) {
    console.log('Thanks, Have a great day, ' + name);

}

function politeFunction() {
    console.log('It\'s nice to meet you.');
}

function bless(name) {
   //  console.log("Bless you, " + name + "!");
   console.log('Bless you!');
   setTimeout(function() {
    goodbye(name) 
    }, 2000)
}

// Event listeners: upon name submission, run script
// Read in user inputted name, run validate function after the
// Button has been submitted

function init() {
    const firstName = document.getElementById("nameInput").value;
    firstName.onclick=validate(firstName);
}
function validate(firstName){
    
    setTimeout(function() {
        setTimeout(function() {
        greet() 
        }, 1500)
        politeFunction()
    }, 2000)
    // sayName will run before the results of greet() and politeFunction() 
    sayName(firstName);

}
// calling the function upon name submission

window.onsubmit = init; 