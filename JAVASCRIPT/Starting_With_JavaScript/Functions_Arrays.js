/* Functions */

// function showAlert(message){
//      window.alert("Hello");
//     window.alert(message);
// }
//  showAlert("hello Aman");

// function sum(a,b){
//     console.log(a+b);
//     return a+b;
// }
// sum(10,20);
// var res = sum(10,20);
// console.log(res);

/* Variable length Arguments */

// function sum(a,b){
//     console.log(a,b);
//     return a+b;
// }

// var res = sum(10);
// var res = sum(1,2,3);
// console.log(res);

/* Function Hoisting */

// console.log(j);
// hoistDemo();
// function hoistDemo(){
//     console.log(i);
//     var i = 10;
// }
// hoistDemo();

// var j = 10;

/* Functions And Scope */

// var name = "Global";
// console.log(name);

// function scopeDemo(){
//     var i = 10;
//     var name = "Function";
//     console.log(name);
// }
// scopeDemo();
// console.log(name);

// function c() {
//     console.log("Inside C");
// }

// function b() {
//   c();
//   console.log("Inside B");
// }

// function a() {
//   b();
//   console.log("Inside A");
// }

// a();
// console.log("Global Context");

/* Fibonacci Series */

// var n = 10;
// function fib(n) {
//   var a = 0;
//   var b = 1;
//   if (n == 0) {
//     console.log("true");
//   }

//   for (var i = 1; i <= n; i++) {
//     var c = a + b;
//     a = b;
//     b = c;
//     if (c == n) {
//       console.log("true");
//       return;
//     }
//   }
//   console.log("false");
// }
// fib(11);


/* Function within Function */

  // var name = 'global';

  // function outer(){
  //   var name = 'outer';
  //   var outerVar = 10;
  //   function inner(){
  //     var name = 'inner';
  //     var innerVar = 100;
  //     console.log(outerVar);
  //     console.log(name);

  //   }
  //   inner();
  //   console.log(innerVar);
  //   console.log(name);

  // }
  // inner();
  // outer();
  // console.log(name);

// var combinedString = " ";
// function a() {
//     combinedString = "Inside a";

//     function b() {
//         combinedString = combinedString + " Inside b";
//     }

//     b();
// }

// a();
// console.log(combinedString);

/* Function Expressions */

// var factorial = function fact(n){
//   var ans = 1;
//   for(var i = 1; i <= n; i++){
//     ans = ans * i;
//   }
//   return ans;
// }

// var factorial2 = function (n){
//   var ans = 1;
//   for(var i = 1; i <= n; i++){
//     ans = ans * i;
//   }
//   return ans;
// }
// console.log(factorial2);
// console.log(factorial);
// console.log(factorial2(5));
// console.log(factorial(5));

/* Function Declarations and Expression */

// console.log(fact(5));
// console.log(factorial(5));
// console.log(factorial);

// function fact(n){
//   var ans = 1;
//   for(var i = 1; i <= n; i++){
//     ans = ans * i;
//   }
//   return ans;
// }

// var factorial = function fact(n){
//   var ans = 1;
//   for(var i = 1; i <= n; i++){
//     ans = ans * i;
//   }
//   return ans;
// }

/* Passing Function as Arguments */

// var factorial = function fact(n){
//   var ans = 1;
//   for(var i = 1; i <= n; i++){
//     ans = ans * i;
//   }
//   return ans;
// }

// function ncr(n,r,factorial){
//   return factorial(n) / (factorial(r) * factorial(n-r));
// }

// console.log(ncr(5,2,factorial));

/* Arrays */

// var arr = [1,2,3,4];
// var arr1 = new Array(1,2,3,4,5);

// console.log(arr);
// console.log(arr1);
// console.log(arr[1]);
// console.log(arr[5]);
// arr[2] = 9;
// console.log(arr);
// arr[7] = 100;
// console.log(arr);
// console.log(arr.length);

// var arr2 = new Array();
// var arr3 = new Array(2);
// var arr4 = new Array(2,3);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

/* Functions on Arrays */

// var arr = ['abc',10,true,10.2];
// var arr1 = new Array(1000);
// var arr2 = [1,2,3,4];
// console.log(arr);
// arr2.push(5);
// console.log(arr2);
// console.log(arr2.pop());
// console.log(arr2);
// console.log(arr2.shift());
// console.log(arr2);
// console.log(arr2.unshift(1));
// console.log(arr2);

/* Splice Function */

// var arr = [2,3,4,5,6];
// console.log(arr.splice(1,1));
// console.log(arr);
// console.log(arr.splice(1));
// console.log(arr);

// arr = [2,3,4,5,6];
// arr.splice(2,0,10);
// console.log(arr);
// arr.splice(2,0,20,30,40);
// console.log(arr);
// arr.splice(2,2,50);
// console.log(arr);

/* Iterating Over Arrys */

// var arr = [2,3,4,5,6,7];

// function print(element, index, arr){
//   console.log(element);
//   console.log(index);
//   console.log(arr);
// }

// for(var i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// arr.forEach(print)

/* Day of the Week */

// function returnDay(weekDay){
//   if(weekDay < 1 && weekDay > 7)
//     return null;
//   var arr = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
//   return arr[weekDay-1];
// }

// console.log(returnDay(8));


/* Duplicate */

// function duplicate(arr){
//   var c = arr.length;
//   for(let i = 0; i < c; i++){
//     arr.push(arr[i]);
//   }
//   return arr;
// }

// var arr = [1,2];
// arr = duplicate(arr);
// console.log(arr);

/* Left Rotations */

// function rotation(arr){
//   var a = arr.shift();
//   arr.push(a);
//   return arr;
// }

//  var arr = [1,2,3,4];
//  console.log(rotation(arr));