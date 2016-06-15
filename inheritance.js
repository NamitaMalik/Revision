/**
 * Created by namita on 2/27/16.
 */

function User(n, age,sex) {
    //Private variable
    var name = n;
    //Public Variable
    this.age = age;
    this.sex = sex;
    //Getter Setter for Private Variable
    this.getName = function (){
        return name;
    };
    this.setName = function(n){
        name = n;
    };
    //If you do not want to change name, remove this set method
    this.getAge = function (){
        return age;
    };
    this.setAge = function(age){
        this.age = age;
    };
}
//Prototype is something like static, that's why it is able to access public variable.
// Prototype function is better than class public function because class functions would take memory into each object
// while prototype function would take memory in prototype only.
User.prototype.getSex = function(){
    return this.sex;
};

function Employee(name, age,sex, companyName, employeeId) {
    //Setting name and age parameters in the parent class User. 'this' would point to the object created using new keyword
    User.call(this,name,age,sex);
    this.companyName = companyName;
    this.employeeId = employeeId;
}

Employee.prototype = Object.create(User.prototype);
Employee.prototype.constructor = Employee;

//Creating objects for the Employee class
var e1 = new Employee('Amit', '27', 'M', 'Wizni Inc', '9874560');
var e2 = new Employee('Namita', '26','F', 'Paytm', '9874570');
//Setting public variable
e1.age ='28';
//Setting private variable
e1.setName('Amit1');
//Getting public variable
console.log(e1.age);
//Private variable cannot be accessed with dot
console.log(e1.name);
//Getter for private variable
console.log(e1.getName());
console.log(e1.getSex());
