let s = document.querySelector("span");
console.log(s)

function move (eventInfo) {
  let elementOver = eventInfo.target;
  elementOver.style.color = 'red';
  let randomX = -50 + Math.random()*100;
  let randomY = -50 + Math.random()*100;

  elementOver.style.transform = 'translate('+ randomX +'px,' + randomY+'px';
  elementOver.style.transition = 'transition: all 1.2s ease-out;'

}


// s.addEventListener('mouseover', move);


function addMover (element) {
  element.addEventListener('mouseover', move);
}

//select all spans

let allspans = document.querySelectorAll('span');
console.log(allspans)

allspans.forEach(addMover);