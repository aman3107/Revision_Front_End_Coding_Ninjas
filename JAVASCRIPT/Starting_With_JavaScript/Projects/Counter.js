var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');
var count = 0;
function counter(){
    count++;
    console.log(count);
    clickCount.innerText = count + " ";
}

box.addEventListener('click',counter);