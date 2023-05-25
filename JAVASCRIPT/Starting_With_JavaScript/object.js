/* Objects */

// var student = {
//     'name':"Aman",
//     roolNo : 20,
//     marks: 50
// };
// console.log(typeof(student));
// console.log(student);
// console.log(student.marks);
// student.marks = 100;
// console.log(student);
// console.log(student.sem);
// student.sem = 1;
// console.log(student);


/* Square Bracket Notation */

// var obj = {};
// var obj1 = new Object();    

// var student = {
//     name:"Aman",
//     rollNo : 134,
//     marks: 50,
//     '2': "two"
// };

// console.log(student['marks']);
// console.log(student['2']);

// function print(obj,prop){
//     console.log(obj[prop]);
// }
// print(student,"marks");

/* Deleting Properties */

// var student = {
//     name:"Aman",
//     marks:90,
//     rollNo: 141
// };

// console.log(student);

// console.log(delete student.marks);
// console.log(student);

/* How are Objects Stored */

// var obj = {
//     "p1": 10,
// };

// var obj2 = obj;
// console.log(obj,obj2);
// obj.p1 = 100;
// console.log(obj,obj2);
// console.log(obj == obj2);
// obj2 = {"p1":100};
// console.log(obj == obj2);

/* Iterating Over Objects */

// var student = {
//     name:"Aman",
//     rollNo:135,
//     marks:60
// };

// for(var prop in student){
//     console.log(prop,student[prop])
// }

// var keys = Object.keys(student);
// var keys = Object.getOwnPropertyNames(student);
// console.log(keys);

/* Nested Objects */

// var student = {
//     name:"Aman",
//     rollNo:135,
//     marks:70,
//     address:{
//         city:"Meerut",
//         Pincode:250002
//     }
// };

// console.log(student);
// console.log(student.address);
// console.log(student.address.city)

/* Create and Modify Objects */

//var student = {
//     name:"aman",
//     age: 20,
//     rollNo: 121,
//     address:{
//         city:"Meerut",
//         state:"UttarPradesh"
//     }
// };

// console.log(student);
// delete student.rollNo;
// console.log(student);

/* Arrays and Objects */

// var arr = [10,20,30,40];
// var obj ={
//     '0':10,
//     '1':20
// };
// console.log(arr);
// console.log(arr['0']);
// console.log(arr[0]);
// console.log(obj[0]);
// console.log(arr.len)

/* Iterating Over Array Using for in */

// var arr = [10,20,30,40];
// for(var i in arr){
//     console.log(i,arr[i]);
// }

/* Timing Events */

// var sec = 1;
// function sayHello(){
//     console.log("Hello");
//     console.log("sec ",sec);
//     sec++;
//     if(sec == 6){
//         clearInterval(id);
//     }
// }
// setTimeout(sayHello,2000);
// var id = setInterval(sayHello,1000);

/* CountDown Timer */

// var sec = 10;

// function timer(){
//     console.log(sec);
//     sec--;
//     if(sec == 0){
//         clearInterval(id);
//     }
// }

// var id = setInterval(timer,1000);

/* Pass by Value v/s Pass by Reference */

// function f(a,b,c){
//     a = 3;
//     b.push("aman");
//     c.first = false;
// }

// var x = 4;
// var y = ['payal','kajal'];
// var z = {first:true};
// f(x,y,z);
// console.log(x,y,z);

/* Deep Copy and Shallow Copy */

// const a = 4;
// const b = a;
// let c = a;
// c = 10;
// console.log(a,b,c);

// var susan = {
//     name:"Susan",
//     age:30
// };

// var raj = susan;
// console.log(raj);
// raj.name = "Raj";
// console.log(raj);
// console.log(susan);
// var aman = {...susan};
// aman.name = "Aman";
// var virat = Object.assign({},susan);
// virat.name = "virat";

// console.log(susan,raj,aman,virat);

// var arr = [1,2,3,4];
// var arr2 = arr;
// arr2.push(5);
// console.log(arr,arr2);
// arr3 = [...arr];
// arr3.push(6);
// console.log(arr,arr2,arr3);

/* Create Timer */

// var sec = 1;
// console.log("Hello Ninjas!");
// function timer(){
//     console.log(sec);
//     sec++;
//     if(sec == 6){
//         clearInterval(id);
//     }
// }

// var id = setInterval(timer,1000);