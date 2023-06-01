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

