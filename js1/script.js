let myName = 'Kash';
let age = 22;

let headline = document.querySelector('h1');
let paragrapghText = document.querySelector('.paragrapgh');


// document.querySelector('h1').innerHTML = 'Tried it, didn not like it'

// alert('Hello, my name is ' + myName + '! I am ' + age + ' years old');

function doSomeThing() {
  console.log('button was clicked');
  alert('Hello, my name is ' + myName + '! I am ' + age + ' years old');
}

function againDoSomething (messageToKash) {

    console.log('kash:' + messageToKash);
    alert (messageToKash);
    headline.innerHTML = 'Tried it, didn not like it';
    paragrapghText.innerHTML = 'This is not a regular paragraph'

}

let myText = document.querySelector('.myText');


function changeText() {
  myText.innerText = 'Whatever';
  // styles in dom
  headline.style.textDecoration = 'underline';
}