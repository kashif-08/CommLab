let container = document.querySelector('#container');

//creating element in js
let headline = document.createElement("h5");
headline.innerText = 'Welcome to my JS learning page';

// document.body.append(headline);

//put it into another element:
// container.append(headline);

//make it only do so when clicked on a button
function clickButton () {
  container.append(headline);
  document.querySelector('.notWanted').remove();
}




function moveBox() {
  
  container.classList.toggle('move');

  let r1 = Math.random();
  console.log(r1);

  let r2 = Math.random() * 100;
  console.log(r2);

  let r3 = 10 + Math.random () * 10;
  console.log(r3)

  let r4 = Math.floor(r3);
  console.log(r4);

  document.querySelector('.notWanted').style.fontSize =  r2+'px'; 
 
}