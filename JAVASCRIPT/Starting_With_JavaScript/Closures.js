/* Revisiting Old Concepts */

// var var1 = 10;

// function outer(){
//     var b = 20;
//     console.log(b);
// }
// console.log(var1);

// console.log(window.outer());

// var a = 10;

// function outer(){
//     var a = 20;
//     var b = 40;
//     console.log(a,b);
//     function inner(){
//         var a = 30;
//         console.log("Inner",a,b);
//     }
//     inner();
//     console.log("Outer",a,b)
// }
// outer();
// console.log("Global");

/* Avoid Global Variables */

/* Let vs IIFE */

/* Closures */

// var i = 10;

// function outer(){
//     var j = 20;
//     console.log(i,j);
//     var inner = function (){
//         var k = 30;
//         console.log(i,j,k);
//         i++;
//         j++;
//         k++;
//     }
//     return inner;
// }

// var inner = outer();
// (inner());
// inner();
// inner = outer();
// inner();

/* Closures and Let */

// for(let i = 1;i <= 5; i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000)
// }

/* Let in For Loops */

