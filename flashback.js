/**
 * Created by namita on 2/12/16.
 */

/* Creating a Person class. Creating a p1 object. */

function Person() {
    this.getName = function () {
        return this.name;
    };
    this.setName = function (name) {
        this.name = name;
    }
}

var p1 = new Person();
p1.setName("Amit");
console.log(p1.getName());

/* Call, Apply, Bind
 * You use call or apply when you want to pass a different this value to the function.
 * In essence, this means that you want to execute a function as if it were a method of a particular object.
 * */

function animalDetails(type, place) {
    return this.name + ' ' + type + ' ' + place;
}

var lion = {name: "SherKhan"};
var tiger = {name: "Billa"};

//Using Call --> Takes parameters in comma separated form
console.log(animalDetails.call(lion, "mamal", "Gujrat"));

//Using Apply --> Takes parameters in array
console.log(animalDetails.apply(tiger, ["mamal", "Rajasthan"]));

//Using Bind --> Takes parameters in comma separated form, returns a function
console.log(animalDetails.bind(tiger, "mamal", "Rajasthan")());

/*Variables in Javascript*/

age = 26;
function animal() {
    var name = "Brownie"; // Private Variable
    console.log(age); //undefined, due to hoisting
    var age = 23;
    console.log(age); //23
    animal.sound = "Bark";
};
animal();
//console.log(name); // name is not defined. You cannot access a functions private variable.
console.log(animal.sound); // Static variable, can be accessed anywhere. Static variables can be using functionName.variableName syntax

function getStaticVariables() {
    console.log(animal.sound); // Static variable, can be accessed anywhere
}

getStaticVariables();

/* Polymorphism*/

function add() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(add(1, 2, 3));

/* Prototype*/

Array.prototype.sumAll = function () {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
};

var a = [1, 2, 3];

console.log(a.sumAll());

/*Closures*/

//Closures manage scope

function addAFixNumber(number) {
    return function add(n) {
        return n + number
    }
}

var getNumber = addAFixNumber(10);

console.log(getNumber(2));
console.log(getNumber(3));

/*Set timeout*/

function asynch(){
    setTimeout(function(){
        console.log("I am in set timeout!");
        clearInterval(interval.id);
    },15000);
console.log("I am outside set timeout!")
}

asynch();

/*Set Interval*/

function interval(){
    interval.id = setInterval(function(){
    console.log("I am in set interval!");
    },1000);
    console.log("I am outside set interval!")
}

interval();
/*
* Patterns in Javascript
*
*  Modular Pattern - Putting js code in a self executing function, so that we don't pollute global object.
*  Advantage - In case 2 js files are using same global variables, then might be their values get conflicted.
* And it will be very cumbersome to debug it.
*
* MVVM - Angular JS - Controller replaced by View Modal
*
* MVC - Backbone etc.
*
* DI - Dependency Injection - In Angular JS, $scope, services like $http etc are injected by name.
*
* Facard Pattern
*
* Single Pattern - Singleton means Single object for whole application. Example : all the providers such as services, factories follow singleton pattern
*
*
* */