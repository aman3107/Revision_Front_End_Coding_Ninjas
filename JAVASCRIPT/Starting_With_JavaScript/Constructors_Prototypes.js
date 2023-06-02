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

function createStudents(fname,rollNo,marks){
    // var student = {};
    this.fname = fname;
    this.rollNo = rollNo;
    this.marks = marks;
    // return student;
}

var student1 = new createStudents('Aman',1,20);
var student2 = new createStudents('Payal',2,30);
