let catSound = document.querySelector('#catSound');


let playButton = document.querySelector('#playButton');
let pauseButton = document.querySelector('#pauseButton');
let speedButton = document.querySelector('#speedButton');
let slowButton = document.querySelector('#slowButton');

let soundSpeed = 1;

playButton.addEventListener('click', function(){catSound.play()});

// playButton.addEventListener('click', function(){
// if (catSound.play()) {
//   catSound.pause()
// } else {
//   catSound.play()
// }});

pauseButton.addEventListener('click', function() {catSound.pause()});
speedButton.addEventListener('click', function() 
{catSound.playbackRate = 10;
  soundSpeed = soundSpeed * 1.1;
});


slowButton.addEventListener('click', function() {
  soundSpeed = soundSpeed * 0.9;
  catSound.playbackRate = soundSpeed;
});

