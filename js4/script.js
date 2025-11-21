let myButton = document.querySelector('#myButton');
let myInput = document.querySelector('#myInput');
let myOutput = document.querySelector('#myOutput');


function buttonClicked (eventInfo) {
  document.body.style.backgroundColor = 'black';
  eventInfo.target.remove(); //removed the button

}

myButton.addEventListener('mouseover', buttonClicked);

// alternatively, we can use the below anonymous commented out function

// function buttonClicked () {
//   document.body.style.backgroundColor = 'black';
// }

// myButton.addEventListener('click', function () {
//   document.body.style.backgroundColor = 'black';
// });

function inputChanged (eventInfo) {
  console.log(eventInfo);
  console.log(eventInfo.target.value);
  console.log('input changed');
  myOutput.innerText = eventInfo.target.value;
}

myInput.addEventListener('change', inputChanged);