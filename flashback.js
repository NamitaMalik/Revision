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

function asynch() {
    setTimeout(function () {
        console.log("I am in set timeout!");
        clearInterval(interval.id);
    }, 15000);
    console.log("I am outside set timeout!")
}

asynch();

/*Set Interval*/

/*function interval() {
    interval.id = setInterval(function () {
        console.log("I am in set interval!");
    }, 1000);
    console.log("I am outside set interval!")
}

interval();*/
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

/*
 CDN:
 --> Cloud Delivery Network
 --> Data here is STATIC CONTENT.
 --> Suppose we make a request, it will go to the nearest server in CDN, say Chennai Server. If Chennai Server has the requested data, it will send data in response.
 This is a HIT Case.
 In case Chennai server doesn't have the requested data, it will message other servers in the CDN, asking fir the requested data. The server having the data will send the data. 1 copy will be kept at local CDN server through which request was made,
 another copy would be sent in response.
 This is a MISS Case.
 In next call, when user would be making the same request, the data would be fetched from a local server that would be at Chennai.
 */

/* Increase App Performance
 --> script tag before body ends
 --> one js and minification
 --> one css and minification
 --> svg graphics instead of png for icons
 --> img widh and height
 --> CDN usage

 */

unique([1,2,2,2,1,4,6,7,10,1]);

function unique(array){
    var obj = {};
    var tempArray = [];
    array.forEach(function(value,key){
        obj[value]= value;
    });
    tempArray = Object.keys(obj);
    tempArray.forEach(function(value,key){
        tempArray[key] = parseInt(value);
    });
   return tempArray;
}

/*var people = [
    { firstname:"Micro",  lastname:"Soft", site:"http://microsoft.com" },
    { firstname:"Face",   lastname:"Book", site:"http://facebook.com" },
    { firstname:"App",    lastname:"Le",   site:"http://apple.com" },
    { firstname:"Master", lastname:"Card", site:"http://mastercard.com" }
];

var arr = document.getElementsByTagName('a');
for (var i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", (function(i){
        return function (event) {
            event.preventDefault();
            alert(JSON.stringify(people[i]));
        }
    })(i));
}*/

var equality = function(){
    var object1 = {'a':3,'b':4};
    var object2 = {'a':3,'b':4,'d':0};
    var key1 = Object.keys(object1);
    var key2 = Object.keys(object2);
    var flag = true;
    if(key1.length == key2.length){
        console.log(JSON.stringify(object1) == JSON.stringify(object2));
        for (var k in object1) {
            if (object1[k] != object2[k]) {
                flag = false;
            }
        }
        return flag;
    }
    else{
        return false;
    }
};

console.log(equality());







