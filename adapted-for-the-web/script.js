let parent = document.querySelector('.parent');
let leftSide = document.querySelector('.left');
let rightSide = document.querySelector('.right');
let movingText = document.querySelector('.moving-condition-text');
let video = document.querySelector('.video');
let videoPlay = document.querySelector('.video-trigger');
let phoneCallPlay = document.querySelector('.phone-call');
let phoneCallAudio = document.querySelector('.phone-call-audio');
let leftFifthPara = document.querySelector('.left-five');
let RightSixPara = document.querySelector('.right-six');
// let rightFifthPara = document.querySelector('.right-five');
let plateNumber = document.querySelector('.plate-number');
let teddyNumberLeft4 = document.querySelector('.teddy-number-l4');
let teddyNumberLeft6 = document.querySelector('.teddy-number-l6');
let teddyNumberLeft7 = document.querySelector('.teddy-number-l7');
let teddyNumberRight2 = document.querySelector('.teddy-number-r2');


window.addEventListener("load", function () {
  // console.log("loaded")
  rightSide.scrollTop = 1000000;
})

// movingText.addEventListener('mouseover', function () {
//   movingText.innerText = 'Anterograde Amnesia';
// });

// movingText.addEventListener('mouseout', function () {
//   movingText.innerText = 'I have a serious condition';
// });

function getScrollPercentageLeft() {

  //how far have we scrolled
  let scrollTop = leftSide.scrollTop;
  // //how far can we scroll in total
  let maxScrollLeft = leftSide.scrollHeight - window.innerHeight;

  let perc = (scrollTop / maxScrollLeft) * 100;
  return perc;
}

//black and white para animations
//1
let leftFirst = document.querySelectorAll('.left-one span');
leftFirst.forEach(function (word, index) {
  word.style.transitionDelay = `${index * 0.03}s`;
});

//2
let leftSecond = document.querySelectorAll('.left-two span');
leftSecond.forEach(function (word, index) {
  word.style.transitionDelay = `${index * 0.03}s`;
});

//3
let leftThird = document.querySelectorAll('.left-three span');
leftThird.forEach(function (word, index) {
  word.style.transitionDelay = `${index * 0.03}s`;
});

// 4
let leftFourth = document.querySelectorAll('.left-four span');
leftFourth.forEach(function (word, index) {
  word.style.transitionDelay = `${index * 0.03}s`;
});

// 5
let leftFifth = document.querySelectorAll('.left-five span');
leftFifth.forEach(function (word, index) {
  word.style.transitionDelay = `${index * 0.03}s`;
});

// 6
let leftSixth = document.querySelectorAll('.left-six span');
leftSixth.forEach(function (word, index) {
  word.style.transitionDelay = `${index * 0.03}s`;
});

// 7
let leftSeventh = document.querySelectorAll('.left-seven span');
leftSeventh.forEach(function (word, index) {
  word.style.transitionDelay = `${index * 0.03}s`;
});


let startedMoving = false;

function handleRemember(){
  let percentage = getScrollPercentageLeft();
console.log(percentage)
  let startMovingPercX = 34.4;
  let arrivePercX = 35.9;
  let p2 = (percentage-startMovingPercX)/(arrivePercX-startMovingPercX)
  if(p2 < 0){
    p2 = 0
  }else if(p2>1){
    p2 = 1;
  }else if(p2>0 && !startedMoving){
    startedMoving = true
  } 

  let startMovingPercY = 34.4;
  let arrivePercY = 35.9;
  let p3 = (percentage-startMovingPercY)/(arrivePercY-startMovingPercY)
  if(p3 < 0){
    p3 = 0
  }else if(p3>1){
    p3 = 1;
  }

  // console.log(p2)


  let rightRememberBox = document.querySelector("#right-side-remember").getBoundingClientRect();
  let rightRememberY = rightRememberBox.y;
  let rightRememberX = rightRememberBox.x;

  let leftRememberBox = document.querySelector("#left-side-remember").getBoundingClientRect();
  

    
  let leftRememberY = leftRememberBox.y;
  
  let leftRememberX = leftRememberBox.x;

  let fixedX = leftRememberX +   ( p2*   (rightRememberBox.x-leftRememberX) )
  let fixedY = leftRememberY +   ( p3*   (rightRememberBox.y-leftRememberY) )

  let fixed_remember =  document.querySelector("#fixed-remember");
  fixed_remember.style.position = "fixed";
  fixed_remember.style.top = window.innerHeight/2 + "px";
  fixed_remember.style.left = fixedX + "px";
  fixed_remember.style.top = fixedY + "px";

  let colValue = 216 -  ( p2 *  (216-34) ) 
  fixed_remember.style.color = 'rgb('+colValue+', '+colValue+', '+colValue+')';

  


  // fixed_remember.style.top = // between leftRememberY and rightRememberY using percentage
  // fixed_remember.style.left = // between leftRememberX and rightRememberX using percentage

//left percentage = 33.5 start ; 37.3 end
  // right percentage = 62.4

}


leftSide.addEventListener('scroll', function () {
  let percentage = getScrollPercentageLeft();


  handleRemember()
  

  // console.log(percentage);
  let maxScrollRight = rightSide.scrollHeight - window.innerHeight;

  //                          10%.    0.1     
  rightSide.scrollTop = maxScrollRight - ((percentage / 100) * maxScrollRight);
  // console.log(percentage, maxScrollRight, rightSide.scrollTop);

  if (percentage > 21) {
    leftFirst.forEach(function (word) {
      word.style.opacity = '1';
    });
  } else {
    leftFirst.forEach(function (word) {
      word.style.opacity = '0';
    });
  }

  if (percentage > 33) {
    leftSecond.forEach(function (word) {
      word.style.opacity = '1';
    });
  } else {
    leftSecond.forEach(function (word) {
      word.style.opacity = '0';
    });
  }

  if (percentage > 43) {
    leftThird.forEach(function (word) {
      word.style.opacity = '1';
    });
  } else {
    leftThird.forEach(function (word) {
      word.style.opacity = '0';
    });
  }

  if (percentage > 65) {
    leftFourth.forEach(function (word) {
      word.style.opacity = '1';
    });
  } else {
    leftFourth.forEach(function (word) {
      word.style.opacity = '0';
    });
  }

  if (percentage > 76) {
    leftFifth.forEach(function (word) {
      word.style.opacity = '1';
    });
  } else {
    leftFifth.forEach(function (word) {
      word.style.opacity = '0';
    });
  }

  if (percentage > 87) {
    leftSixth.forEach(function (word) {
      word.style.opacity = '1';
    });
  } else {
    leftSixth.forEach(function (word) {
      word.style.opacity = '0';
    });
  }


  if (percentage > 98) {
    leftSeventh.forEach(function (word) {
      word.style.opacity = '1';
    });
  } else {
    leftSeventh.forEach(function (word) {
      word.style.opacity = '0';
    });
  }



  if (percentage < 3) {
    movingText.style.left = '-100%';
  } else if (percentage > 12) {
    movingText.style.left = '100%';
  } else {
    // Between 4% and 10% - animate across screen
    const rangePerc = (percentage - 3) / 9; // 9 is the range (12 - 3)
    const leftPosition = (rangePerc * 200) - 100;
    movingText.style.left = leftPosition + '%';
  }

  if(percentage>10.4){
    movingText.innerText = "I have a serious condition";
  } else if (percentage>10.2) {
    movingText.innerText = "Anterograde Amnesia"
  }
   else if (percentage>9.1){
    movingText.innerText = "I have a serious condition"
  }
   else if (percentage>8.9){
    movingText.innerText = "Anterograde Amnesia"
  }
   else if (percentage>7.8){
    movingText.innerText = "I have a serious condition"
  }
  else if(percentage>7.6){
    movingText.innerText = "Anterograde Amnesia"
  }else if(percentage>7.2){
    movingText.innerText = "I have a serious condition"
  }

  if (percentage > 9.73) {
    movingText.style.color = 'black';
  } else {
    movingText.style.color = 'white';
  }

});


function getScrollPercentageRight() {

  //how far have we scrolled
  let scrollTop = rightSide.scrollTop;

  // //how far can we scroll in total
  let maxScrollRight = rightSide.scrollHeight - window.innerHeight;

  let perc = (scrollTop / maxScrollRight) * 100;
  return perc;
}

//color para animations
//1
let rightFirst = document.querySelectorAll('.right-one span');
rightFirst.forEach(function (word, index) {
  word.style.transitionDelay = `${(rightFirst.length - index - 1) * 0.03}s`;
});

//2
let rightSecond = document.querySelectorAll('.right-two span');
rightSecond.forEach(function (word, index) {
  word.style.transitionDelay = `${(rightSecond.length - index - 1) * 0.03}s`;
});

//3
let rightThird = document.querySelectorAll('.right-three span');
rightThird.forEach(function (word, index) {
  word.style.transitionDelay = `${(rightThird.length - index - 1) * 0.03}s`;
});

//video
let videoTrigger = document.querySelectorAll('.video-trigger span');
videoTrigger.forEach(function (word, index) {
  word.style.transitionDelay = `${(videoTrigger.length - index - 1) * 0.03}s`;
});

//4
let rightFourth = document.querySelectorAll('.right-four span');
rightFourth.forEach(function (word, index) {
  word.style.transitionDelay = `${(rightFourth.length - index - 1) * 0.03}s`;
});

//5
let rightFifth = document.querySelectorAll('.right-five span');
rightFifth.forEach(function (word, index) {
  word.style.transitionDelay = `${(rightFifth.length - index - 1) * 0.03}s`;
});

//6
let rightSixth = document.querySelectorAll('.right-six span');
rightSixth.forEach(function (word, index) {
  word.style.transitionDelay = `0s, ${(rightSixth.length - index - 1) * 0.03}s, 0s`;
});

//7
let rightSeventh = document.querySelectorAll('.right-seven span');
rightSeventh.forEach(function (word, index) {
  word.style.transitionDelay = `${(rightSeventh.length - index - 1) * 0.03}s`;
});


rightSide.addEventListener('scroll', function () {
  let percentage = getScrollPercentageRight();
  // console.log(percentage);

  let maxScrollLeft = leftSide.scrollHeight - window.innerHeight;

  // //                          10%.    0.1     
  leftSide.scrollTop = maxScrollLeft - ((percentage / 100) * maxScrollLeft);
  // console.log(percentage, maxScrollRight, rightSide.scrollTop);

    if (percentage < 85) {
    rightFirst.forEach(function (word) {
      word.style.opacity = '1';
    });
  } else {
    rightFirst.forEach(function (word) {
      word.style.opacity = '0';
    });
  }


  if (percentage < 74) {
    rightSecond.forEach(function (word) {
      word.style.opacity = '1';
    });
  } else {
    rightSecond.forEach(function (word) {
      word.style.opacity = '0';
    });
  }


   if (percentage < 63) {
    rightThird.forEach(function (word) {
      word.style.opacity = '1';
    });
  } else {
    rightThird.forEach(function (word) {
      word.style.opacity = '0';
    });
  }

  ///not working :/
   if (percentage < 52) {
    videoTrigger.forEach(function (word) {
      word.style.opacity = '1';
    });
  } else {
    videoTrigger.forEach(function (word) {
      word.style.opacity = '0';
    });
  }


   if (percentage < 41) {
    rightFourth.forEach(function (word) {
      word.style.opacity = '1';
    });
  } else {
    rightFourth.forEach(function (word) {
      word.style.opacity = '0';
    });
  }


   if (percentage < 30) {
    rightFifth.forEach(function (word) {
      word.style.opacity = '1';
    });
  } else {
    rightFifth.forEach(function (word) {
      word.style.opacity = '0';
    });
  }

   if (percentage < 19) {
    rightSixth.forEach(function (word) {
      word.style.opacity = '1';
    });
  } else {
    rightSixth.forEach(function (word) {
      word.style.opacity = '0';
    });
  }


  if (percentage < 8) {
    rightSeventh.forEach(function (word) {
      word.style.opacity = '1';
    });
  } else {
    rightSeventh.forEach(function (word) {
      word.style.opacity = '0';
    });
  }
});


videoPlay.addEventListener('mouseover', function(){
  // Add sleeping class for blur and spinning
  videoPlay.classList.add('sleeping');
  
  // Give each word a slightly different rotation speed
  const spans = videoPlay.querySelectorAll('span');
  spans.forEach(function(span) {
    const randomDuration = 2.5 + Math.random() * 1.5;
    span.style.animationDuration = randomDuration + 's';
  });
  
  // Existing video code
  video.style.opacity = '1';
  video.play();
  video.parentElement.style.padding = '0px';
})

videoPlay.addEventListener('mouseout', function(){
  // Remove sleeping class to stop blur and spinning
  videoPlay.classList.remove('sleeping');
  
  // Stop animations
  const spans = videoPlay.querySelectorAll('span');
  spans.forEach(function(span) {
    span.style.animation = 'none';
    span.style.animation = '';
  });
  
  // Existing video code
  video.style.opacity = '0';
  video.pause();
  video.parentElement.style.padding = '40px';
})

//phone call
phoneCallPlay.addEventListener('mouseover', function(){
  phoneCallAudio.play();
});

phoneCallPlay.addEventListener('mouseout', function(){
  phoneCallAudio.pause();
  // phoneCallAudio.currentTime = 0; // optional: reset to beginning
});


leftFifthPara.addEventListener('mouseover', function(){
  leftFifthPara.style.cursor = 'pointer';
  let span4 = leftFifthPara.querySelector('span:nth-child(4)');
  let span6 = leftFifthPara.querySelector('span:nth-child(7)');
  let span12 = leftFifthPara.querySelector('span:nth-child(13)');
  let span15 = leftFifthPara.querySelector('span:nth-child(16)');
  
  span4.classList.add('flipping');
  span6.classList.add('flipping');
  span12.classList.add('flipping');
  span15.classList.add('flipping');
  
  span4.textContent = 'myself';
  span6.textContent = 'I';
  span12.textContent = 'my';
  span15.textContent = 'me';
});

leftFifthPara.addEventListener('mouseout', function() {
  leftFifthPara.style.cursor = 'pointer';
  let span4 = leftFifthPara.querySelector('span:nth-child(4)');
  let span6 = leftFifthPara.querySelector('span:nth-child(7)');
  let span12 = leftFifthPara.querySelector('span:nth-child(13)');
  let span15 = leftFifthPara.querySelector('span:nth-child(16)');
  
  span4.classList.remove('flipping');
  span6.classList.remove('flipping');
  span12.classList.remove('flipping');
  span15.classList.remove('flipping');
  
  span4.textContent = 'Sammy';
  span6.textContent = 'he';
  span12.textContent = 'his';
  span15.textContent = 'him';
});


//

RightSixPara.addEventListener('mouseover', function(){
  RightSixPara.style.cursor = 'pointer';
  let span8 = RightSixPara.querySelector('span:nth-child(8)');
  let span13 = RightSixPara.querySelector('span:nth-child(13)');

  // span8.style.transitionDelay = '0s';  // Reset delay but creates issues with initial anim
  // span13.style.transitionDelay = '0s'; // Reset delay but creates issues with initial anim
  
  span8.classList.add('flipping');
  span13.classList.add('flipping');
  
  span8.textContent = 'Lies';
  span13.textContent = 'Lies';
});

RightSixPara.addEventListener('mouseout', function() {
  RightSixPara.style.cursor = 'pointer';
  let span8 = RightSixPara.querySelector('span:nth-child(8)');
  let span13 = RightSixPara.querySelector('span:nth-child(13)');
  
  span8.classList.remove('flipping');
  span13.classList.remove('flipping');
  
  span8.textContent = 'Says';
  span13.textContent = 'Says';

});


// plate

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let plateTimer;

plateNumber.addEventListener('mouseover', function(){
  let count = 0;
  
  plateTimer = setInterval(function() {
    plateNumber.textContent = '';
    for(let i = 0; i < 8; i++){
      plateNumber.textContent += chars[Math.floor(Math.random() * chars.length)];
    }
    plateNumber.style.color = '#ff6b6b';
    plateNumber.style.cursor = 'pointer';
    plateNumber.style.textDecoration = 'none';
    
    count++;
    if(count > 20){
      clearInterval(plateTimer);
      plateNumber.textContent = 'SG13 7IU';
    }
  }, 30);
});

plateNumber.addEventListener('mouseout', function(){
  clearInterval(plateTimer);
  plateNumber.textContent = 'number';
  plateNumber.style.color = 'rgb(34, 34, 34)';
  plateNumber.style.cursor = 'pointer';
});


//teddy l4
let teddyTimer4;

teddyNumberLeft4.addEventListener('mouseover', function(){
  let count = 0;
  
  teddyTimer4 = setInterval(function() {
    teddyNumberLeft4.textContent = '';
    for(let i = 0; i < 8; i++){
      teddyNumberLeft4.textContent += chars[Math.floor(Math.random() * chars.length)];
    }
    teddyNumberLeft4.style.color = '#ff6b6b';
    teddyNumberLeft4.style.cursor = 'pointer';
    
    count++;
    if(count > 20){
      clearInterval(teddyTimer4);
      teddyNumberLeft4.textContent = 'SG13 7IU';
    }
  }, 30);
});

teddyNumberLeft4.addEventListener('mouseout', function(){
  clearInterval(teddyTimer4);
  teddyNumberLeft4.textContent = 'Teddy';
  teddyNumberLeft4.style.color = 'rgb(217, 216, 216)';
  teddyNumberLeft4.style.cursor = 'pointer';
});



//teddy l6
let teddyTimer6;

teddyNumberLeft6.addEventListener('mouseover', function(){
  let count = 0;
  
  teddyTimer6 = setInterval(function() {
    teddyNumberLeft6.textContent = '';
    for(let i = 0; i < 8; i++){
      teddyNumberLeft6.textContent += chars[Math.floor(Math.random() * chars.length)];
    }
    teddyNumberLeft6.style.color = '#ff6b6b';
    teddyNumberLeft6.style.cursor = 'pointer';
    
    count++;
    if(count > 20){
      clearInterval(teddyTimer6);
      teddyNumberLeft6.textContent = 'SG13 7IU';
    }
  }, 30);
});

teddyNumberLeft6.addEventListener('mouseout', function(){
  clearInterval(teddyTimer6);
  teddyNumberLeft6.textContent = 'Teddy';
  teddyNumberLeft6.style.color = 'rgb(217, 216, 216)';
  teddyNumberLeft6.style.cursor = 'pointer';
});



//teddy l7
let teddyTimer7;

teddyNumberLeft7.addEventListener('mouseover', function(){
  let count = 0;
  
  teddyTimer7 = setInterval(function() {
    teddyNumberLeft7.textContent = '';
    for(let i = 0; i < 8; i++){
      teddyNumberLeft7.textContent += chars[Math.floor(Math.random() * chars.length)];
    }
    teddyNumberLeft7.style.color = '#ff6b6b';
    teddyNumberLeft7.style.cursor = 'pointer';
    
    count++;
    if(count > 20){
      clearInterval(teddyTimer7);
      teddyNumberLeft7.textContent = 'SG13 7IU';
    }
  }, 30);
});

teddyNumberLeft7.addEventListener('mouseout', function(){
  clearInterval(teddyTimer7);
  teddyNumberLeft7.textContent = 'Teddy';
  teddyNumberLeft7.style.color = 'rgb(217, 216, 216)';
  teddyNumberLeft7.style.cursor = 'pointer';
});



//teddy r7
let teddyTimerR2;

teddyNumberRight2.addEventListener('mouseover', function(){
  let count = 0;
  
  teddyTimerR2 = setInterval(function() {
    teddyNumberRight2.textContent = '';
    for(let i = 0; i < 8; i++){
      teddyNumberRight2.textContent += chars[Math.floor(Math.random() * chars.length)];
    }
    teddyNumberRight2.style.color = '#ff6b6b';
    teddyNumberRight2.style.cursor = 'pointer';
    
    count++;
    if(count > 20){
      clearInterval(teddyTimerR2);
      teddyNumberRight2.textContent = 'SG13 7IU';
    }
  }, 30);
});

teddyNumberRight2.addEventListener('mouseout', function(){
  clearInterval(teddyTimerR2);
  teddyNumberRight2.textContent = 'Teddy';
  teddyNumberRight2.style.color = 'rgb(34, 34, 34)';
  teddyNumberRight2.style.cursor = 'pointer';
});

// video text animation issue
// remember word issue
// teddy word issue
// i have disease part




