'use strict'
/* this Keyword */

/* 1st Rule "new" keyword */

// function vehicle(name){
//     this.name = "Aman";
//     return this;
//     console.log(this);
//     this.name = name;
// }
// console.log(new vehicle("Aman"));

/* 2nd Rule Explicit Binding */

// const john ={
//     name1:'Aman Mittal',
// };

// function ask(){
//     console.log(this,this.name1)
// }
// ask();
// ask.call(john);
// ask.apply(john);

// var raj ={
//     name:'Raj',
//     greet:function(){
//         console.log('Hello',this);
//     }
// };

// raj.greet();
// var localAsk = raj.greet;
// localAsk();
// var localGreet = raj.greet.bind(raj);
// localGreet();
// setTimeout(raj.greet,1000);
// setTimeout(raj.greet.bind(raj),1000);
// const CN = {
//     name: "Coding Ninjas"
//  };
 
//  function print(){
//     console.log(this) ;
//  }
 
//  var localPrint = print.bind(CN);
//  localPrint();

// var joe = {
//     name: "Joe"
//  }; 
 
//  function print(){
//     console.log(this) ; 
//  }

//  print.call(joe);
// print.apply(joe);
// print.bind(joe)();

/* 3rd rule Implicit Binding */

// var raj = {
//     name:'Aman',
//     greet:function(){
//         console.log('Hello',this);
//     }
// };

// raj.greet();
// var local = raj.greet;
// local();

/* 4th rule default binding */

// function ask(){
//     console.log(this,this.name);
// }
// ask();


/* Putting it all together */

// var person = {
//     fname:"Aman",
//     ask:function(){
//         console.log(this);
//     }
// }

// new (person.ask.bind(person))();

// const john = {
//     name:  "John",
//     greet: function(){
//         console.log(  "Hello! My name is " + this.name) ;
//     }
// }

// const CN = {
//   name: "Coding Ninjas",
//   printName: function(){
//         console.log(this) ;
//     }
// };

// var localGreet = CN.printName.bind(john);
// localGreet();

// var localPrintName = john.greet.bind(CN);
// localPrintName();

/* Function to create objects */

// var student = {
//     fname:'Aman',
//     marks:50,
//     rollNo:12
// };

// console.log(student);

// function createStudents(fname,rollNo,marks){
//     var student = {};
//     console.log(this);
//     this.fname = fname;
//     this.rollNo = rollNo;
//     this.marks = marks;
//     return student;

// }

// var student1 = new createStudents('Aman',1,20);
// var student2 =  createStudents('Payal',2,30);


/* Adding Behavior to Objects */

// function Vehicle(numWheels, price){
//     this.numWheels = numWheels;
//     this.price = price;
//     this.getPrice = function(){
//         return this.price;
//     }
// }
// var vehicle1 = new Vehicle(2,50000);
// var vehicle2 = new Vehicle(4,50000);
// console.log(vehicle1.getPrice());

/* What is Prototype */

// function Vehicle(numWheels, price){
//     this.numWheels = numWheels;
//     this.price = price;
//     this.getPrice = function(){
//         return this.price;
//     }
// }

// var vehicle1 = new Vehicle(2,1000);
// var vehicle2 = new Vehicle(3,1500);

// console.log(Vehicle.prototype);
// console.log(Vehicle.prototype.constructor);

/* Why Prototype */

function Vehicle(numWheels,price){
    this.numWheels = numWheels;
    this.price = price;
}

Vehicle.prototype.getPrice = function(){
    return this.price;
}

var vehicle1 = new Vehicle(2,1000);
var vehicle2 = new Vehicle(3,2000);

Vehicle.prototype.color = "black";
