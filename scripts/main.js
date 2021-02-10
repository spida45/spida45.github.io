/* let myHeading = document.querySelector('h2');
   myHeading.textContent = 'Hello world!';   */

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hello.png') {
        myImage.setAttribute('src', 'images/hello2.png');
    } 
    else {
        myImage.setAttribute('src', 'images/hello.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    } 
    else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Welcome to my site，' + myName + '!';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} 
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to my site，' + storedName + '!';
}

myButton.onclick = function() {
    setUserName();
}