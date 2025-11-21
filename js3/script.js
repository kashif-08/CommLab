let firstButton = document.querySelector('#firstButton');

function clickedButton () {
  let b = document.createElement('button');  
  b.innerText = 'Start the Engine';
  document.body.append(b);

  

  // b.onclick = changeInnerText.bind(b)

  b.addEventListener("click", function(){
    changeInnerText(b);
  })




}

function changeInnerText (button) {  
  button.innerText = 'STARTED';
  button.style.color = 'red';
}



// function colorize (elm) {
//   elm.style.backgroundColor = 'red';
// }

// function clickedButton () {

//   // select 

//   let b = document.querySelector('.box');

//   let bs = document.querySelectorAll('.box');
//   bs.forEach(colorize);


// }


