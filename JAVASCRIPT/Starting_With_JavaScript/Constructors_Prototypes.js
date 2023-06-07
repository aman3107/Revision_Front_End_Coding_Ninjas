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

// function Vehicle(numWheels,price){
//     this.numWheels = numWheels;
//     this.price = price;
// }

// Vehicle.prototype.getPrice = function(){
//     return this.price;
// }

// var vehicle1 = new Vehicle(2,1000);
// var vehicle2 = new Vehicle(3,2000);

// Vehicle.prototype.color = "black";

/* More Properties around Prototype */

// function Vehicle(numWheels, price){
//     this.numWheels = numWheels;
//     this.price = price;
// }

// Vehicle.prototype.getPrice = function(){
//     return this.price;
// }

// var v1 = new Vehicle(2,1000);
// var v2 = new Vehicle(3,2000);

// console.log(v1.__proto__); // This is not depricated in ES6
// console.log(v1.__proto__ === Vehicle.prototype); 

// console.log(Object.getPrototypeOf(v1)); // This is recommended in ES6
// console.log(Object.getPrototypeOf(v1) === Vehicle.prototype);

// console.log(Vehicle.prototype.isPrototypeOf(v1));
// console.log(Vehicle.prototype.isPrototypeOf(v2));

// console.log(v1.hasOwnProperty('price'));
// console.log(v1.hasOwnProperty('getPrice'));

// Vehicle.prototype.color = 'black';

// console.log(v1.color);
// v1.color = 'white';
// console.log(v1.color);
// console.log(v2.color);

// function Student(id, name, club){
//     this.id = id ;
//     this.name = name ;
//     this.club = club ;  
// }

// Student.prototype.printDetails = function(){
//         console.log(this.id, this.name, this.club);    
// }

// var s1 = new Student(1,'Raj','Cricket');
// var s2 = new Student(2,'Rohan','Dance');
// var s3 = new Student(3,'Rita','Basketball');
// var s4 = new Student(4,'Reema','Music');

// var arr = [s1,s2,s3,s4];

// for(var i = 0; i < 4; i++){
//     arr[i].printDetails();
// }

/* Objects */

// var obj = new Object();
// console.log(obj);
// console.log(Object.getPrototypeOf(obj));
// console.log(Object.prototype.isPrototypeOf(obj));
// Object.prototype.color = 'black';

// function A(){
//     this.color = 'red';
// }

// var obj1 = new A();
// A.prototype.color = 'black';

/* object vs Object() */

// var obj = {};
// console.log(typeof(obj));
// console.log(typeof(Object));

/* Class */

// class Vehicle{
//     constructor(numWheels,price){
//         this.numWheels = numWheels;
//         this.price = price;
//     }
    
//     getPrice(){
//         return this.price;
//     }
// }

// var v1 = new Vehicle(1,1000);
// var v2 = new Vehicle(2,2000);

// console.log(v1);
// console.log(v2);

// console.log(Vehicle.prototype === Object.getPrototypeOf(v1));

/* Class Expressions and Hoisting */

// var v1 = Vehicle(1,1000); // We cannot do this also in classes

// class Vehicle{
//     constructor(numWheels,price){
//         this.numWheels = numWheels;
//         this.price = price;
//     }
//     getPrice(){
//         return this.price;
//     }
// }

// var v1 = Vehicle(1,1000); // We cannot do this

/* Inheritance using classes */

// class Vehicle{
//     constructor(numWheels, price){
//         this.numWheels = numWheels;
//         this.price = price;
//     }
//     getPrice(){
//         return this.price;
//     }
//     printDescription(){
//         console.log("Vehicle", this.numWheels,this.price);
//     }
// }

// class Car extends Vehicle{
//     constructor(numWheels,price,numDoors){
//         super(numWheels,price);
//         this.numDoors = numDoors;
//     }

//     printDescription(){
//         super.printDescription();
//         console.log("Car",this.numDoors);
//     }
// }

// var c = new Car(1,1000,4);
// console.log(c);
// c.printDescription();

// var v1 = new Vehicle(1,1000);
// var v2 = new Vehicle(2,2000);

/* Class Inheritance */

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     getName(){
//         return this.name;
//     }
//  }
  
// class Student extends Person{
//     constructor(sname, sclass, srollNo){
//         super(sname);
//         this.sclass = sclass;
//         this.srollNo = srollNo;
//     }

//     getDetails(){
//         var a = super.getName();
//         return [a,this.sclass,this.srollNo];
//     }
// }

// class Teacher extends Person{
//     constructor(tname, teacherID, subject){
//         super(tname);
//         this.teacherID = teacherID;
//         this.subject = subject;
//     }
//     getDetails(){
//         var a = super.getName();
//         return [a,this.teacherID,this.subject];
//     }
// }

// var s1 = new Student('Aman','Maths',20);
// console.log(s1.getDetails());
// var t1 = new Teacher('RKT',20,'Maths');
// console.log(t1.getDetails());