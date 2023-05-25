/* DOM */

/* Accessing DOM */

// console.log(document);
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(window);
// console.log(screen);
// console.log(window.screen);

/* Fetching Elements */

// console.log(document.getElementById('one'));
// var heading = document.getElementById('one');
// heading.style.color = 'red';
// heading.style.backgroundColor = 'cyan';
// var headings = document.getElementsByTagName('h1');
// console.log(headings);
// headings[1].innerText = "Second Heading";
// var para = document.getElementsByClassName('para');
// console.log(para);
// para[0].style.backgroundColor = 'cyan';

// var heading1 = document.querySelector('#one');
// heading1.innerText = "First Heading";

// var para1 = document.querySelector('.para');
// para1.style.backgroundColor = 'yellow';

/* Event Handling */

function sayHello(){
    alert('Hello');
}
function sayBye(){
    alert('Bye!!');
}

var helloBtn1 = document.getElementById('btn1');
helloBtn1.addEventListener('click', sayHello)

var helloBtn2 = document.getElementById('btn2');
helloBtn2.addEventListener('click',sayBye);