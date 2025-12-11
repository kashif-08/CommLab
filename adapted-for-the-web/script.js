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
let overlay = document.querySelector('.overlay');
let yesButton = document.querySelector('.yes-button');
let noButton = document.querySelector('.no-button');
let titleLeft = document.querySelector('.story-title-left');
let titleRight = document.querySelector('.story-title-right');

// Yes button
yesButton.addEventListener('click', function () {
  overlay.classList.add('hidden');
});

// No button - show introduction
noButton.addEventListener('click', function () {
  // Create the introduction screen
  let introScreen = document.createElement('div');
  introScreen.className = 'intro-screen';
  introScreen.innerHTML = `
        <div class="intro-content">
            <h1>Memento (2000)</h1>
            <div class="intro-text">
                <p>Memento is a 2000 American neo-noir psychological thriller film written and directed by Christopher Nolan, based on the short story "Memento Mori" by his brother Jonathan Nolan. The film follows Leonard Shelby (Guy Pearce), a man with anterograde amnesia—the inability to form new memories—as he searches for the person who attacked him and murdered his wife.</p>
                
                <p>What makes Memento revolutionary is its narrative structure. The film is presented in two sequences: one in color that moves backward in time, and another in black and white that moves forward. These sequences meet at the film's climax, creating a puzzle that challenges viewers to piece together the truth alongside the protagonist.</p>
                
                <p>Leonard's condition forces him to use Polaroid photographs, notes, and tattoos to track information he can't remember. His most important notes are tattooed directly onto his body—"John G. raped and murdered my wife" is inscribed over his heart. But as the story unfolds in reverse, we begin to question everything we've been told.</p>
                
                <p>The film explores themes of memory, identity, and the nature of truth. Without the ability to form new memories, Leonard lives in a perpetual present, unable to learn from his experiences or recognize the people manipulating him. Each scene resets his understanding of the world, making him both the hunter and the hunted.</p>
                
                <p>Nolan's backwards narrative isn't just a gimmick—it places the audience in Leonard's position. We're as confused and disoriented as he is, discovering information in reverse and struggling to understand how we arrived at each moment. The film asks: if you can't trust your memories, who can you trust? And more disturbingly: who are you?</p>
                
                <p>Memento received widespread critical acclaim and was nominated for two Academy Awards. It's considered one of the greatest films of the 2000s and established Christopher Nolan as a major filmmaking talent. The film's influence can be seen in countless subsequent movies and TV shows that play with non-linear storytelling.</p>
                
                <p>But the real genius of Memento lies in its final revelation—a truth that recontextualizes everything we've seen and forces us to question the very nature of justice, revenge, and self-deception. Leonard isn't just hunting his wife's killer. He's trapped in a cycle of his own making, unable to escape because he literally can't remember why he keeps repeating the same actions.</p>
                
                <p>The film leaves us with an unsettling question: Is it better to live in painful truth or comforting lies? Leonard chooses his own reality, selecting which facts to remember and which to forget. In doing so, he becomes both victim and architect of his own fate—a man who has turned his disability into a tool for eternal vengeance, even if that vengeance is hollow.</p>
            </div>
            <div class="intro-buttons">
                <button class="continue-reading-btn">Continue Reading</button>
                <button class="watch-video-btn">Watch Video Instead</button>
            </div>
        </div>
    `;

  // Add to overlay
  overlay.innerHTML = '';
  overlay.appendChild(introScreen);

  //  Continue Reading button
  let continueBtn = introScreen.querySelector('.continue-reading-btn');
  continueBtn.addEventListener('click', function () {
    introScreen.querySelector('.intro-content').classList.add('scrollable');
    continueBtn.style.display = 'none';
    document.querySelector('.watch-video-btn').textContent = 'Done - Start Experience';
    document.querySelector('.watch-video-btn').addEventListener('click', function () {
      overlay.classList.add('hidden');
      overlay.innerHTML = '';
    });
  });

  //  Watch Video button
  let videoBtn = introScreen.querySelector('.watch-video-btn');
  videoBtn.addEventListener('click', function () {
    overlay.innerHTML = `
            <div class="video-overlay-container">
                <video class="fullscreen-video" src="assets/memento-explained.mp4" controls autoplay></video>
                <button class="close-video-btn">Start Experience</button>
            </div>
        `;

    let closeBtn = overlay.querySelector('.close-video-btn');
    closeBtn.addEventListener('click', function () {
      overlay.classList.add('hidden');
      overlay.innerHTML = '';
    });
  });
});



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

function handleRemember() {
  let percentage = getScrollPercentageLeft();
  console.log(percentage)
  let startMovingPercX = 34.4;
  let arrivePercX = 35.9;
  let p2 = (percentage - startMovingPercX) / (arrivePercX - startMovingPercX)
  if (p2 < 0) {
    p2 = 0
  } else if (p2 > 1) {
    p2 = 1;
  } else if (p2 > 0 && !startedMoving) {
    startedMoving = true
  }

  let startMovingPercY = 34.4;
  let arrivePercY = 35.9;
  let p3 = (percentage - startMovingPercY) / (arrivePercY - startMovingPercY)
  if (p3 < 0) {
    p3 = 0
  } else if (p3 > 1) {
    p3 = 1;
  }

  // console.log(p2)


  let rightRememberBox = document.querySelector("#right-side-remember").getBoundingClientRect();
  let rightRememberY = rightRememberBox.y;
  let rightRememberX = rightRememberBox.x;

  let leftRememberBox = document.querySelector("#left-side-remember").getBoundingClientRect();



  let leftRememberY = leftRememberBox.y;

  let leftRememberX = leftRememberBox.x;

  let fixedX = leftRememberX + (p2 * (rightRememberBox.x - leftRememberX))
  let fixedY = leftRememberY + (p3 * (rightRememberBox.y - leftRememberY))

  let fixed_remember = document.querySelector("#fixed-remember");
  fixed_remember.style.position = "fixed";
  fixed_remember.style.top = window.innerHeight / 2 + "px";
  fixed_remember.style.left = fixedX + "px";
  fixed_remember.style.top = fixedY + "px";

  let colValue = 216 - (p2 * (216 - 34))
  fixed_remember.style.color = 'rgb(' + colValue + ', ' + colValue + ', ' + colValue + ')';




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

  if (percentage > 10.4) {
    movingText.innerText = "I have a serious condition";
  } else if (percentage > 10.2) {
    movingText.innerText = "Anterograde Amnesia"
  }
  else if (percentage > 9.1) {
    movingText.innerText = "I have a serious condition"
  }
  else if (percentage > 8.9) {
    movingText.innerText = "Anterograde Amnesia"
  }
  else if (percentage > 7.8) {
    movingText.innerText = "I have a serious condition"
  }
  else if (percentage > 7.6) {
    movingText.innerText = "Anterograde Amnesia"
  } else if (percentage > 7.2) {
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


videoPlay.addEventListener('mouseover', function () {
  // Add sleeping class for blur and spinning
  videoPlay.classList.add('sleeping');

  // Give each word a slightly different rotation speed
  const spans = videoPlay.querySelectorAll('span');
  spans.forEach(function (span) {
    const randomDuration = 2.5 + Math.random() * 1.5;
    span.style.animationDuration = randomDuration + 's';
  });

  // Existing video code
  video.style.opacity = '1';
  video.play();
  video.parentElement.style.padding = '0px';
})

videoPlay.addEventListener('mouseout', function () {
  // Remove sleeping class to stop blur and spinning
  videoPlay.classList.remove('sleeping');

  // Stop animations
  const spans = videoPlay.querySelectorAll('span');
  spans.forEach(function (span) {
    span.style.animation = 'none';
    span.style.animation = '';
  });

  // Existing video code
  video.style.opacity = '0';
  video.pause();
  video.parentElement.style.padding = '40px';
})

//phone call
phoneCallPlay.addEventListener('mouseover', function () {
  phoneCallAudio.play();
});

phoneCallPlay.addEventListener('mouseout', function () {
  phoneCallAudio.pause();
  // phoneCallAudio.currentTime = 0; // optional: reset to beginning
});


leftFifthPara.addEventListener('mouseover', function () {
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

leftFifthPara.addEventListener('mouseout', function () {
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

RightSixPara.addEventListener('mouseover', function () {
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

RightSixPara.addEventListener('mouseout', function () {
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

plateNumber.addEventListener('mouseover', function () {
  let count = 0;

  plateTimer = setInterval(function () {
    plateNumber.textContent = '';
    for (let i = 0; i < 8; i++) {
      plateNumber.textContent += chars[Math.floor(Math.random() * chars.length)];
    }
    plateNumber.style.color = '#ff6b6b';
    plateNumber.style.cursor = 'pointer';
    plateNumber.style.textDecoration = 'none';

    count++;
    if (count > 20) {
      clearInterval(plateTimer);
      plateNumber.textContent = 'SG13 7IU';
    }
  }, 30);
});

plateNumber.addEventListener('mouseout', function () {
  clearInterval(plateTimer);
  plateNumber.textContent = 'number';
  plateNumber.style.color = 'rgb(34, 34, 34)';
  plateNumber.style.cursor = 'pointer';
});


//teddy l4
let teddyTimer4;

teddyNumberLeft4.addEventListener('mouseover', function () {
  let count = 0;

  teddyTimer4 = setInterval(function () {
    teddyNumberLeft4.textContent = '';
    for (let i = 0; i < 8; i++) {
      teddyNumberLeft4.textContent += chars[Math.floor(Math.random() * chars.length)];
    }
    teddyNumberLeft4.style.color = '#ff6b6b';
    teddyNumberLeft4.style.cursor = 'pointer';

    count++;
    if (count > 20) {
      clearInterval(teddyTimer4);
      teddyNumberLeft4.textContent = 'SG13 7IU';
    }
  }, 30);
});

teddyNumberLeft4.addEventListener('mouseout', function () {
  clearInterval(teddyTimer4);
  teddyNumberLeft4.textContent = 'Teddy';
  teddyNumberLeft4.style.color = 'rgb(217, 216, 216)';
  teddyNumberLeft4.style.cursor = 'pointer';
});



//teddy l6
let teddyTimer6;

teddyNumberLeft6.addEventListener('mouseover', function () {
  let count = 0;

  teddyTimer6 = setInterval(function () {
    teddyNumberLeft6.textContent = '';
    for (let i = 0; i < 8; i++) {
      teddyNumberLeft6.textContent += chars[Math.floor(Math.random() * chars.length)];
    }
    teddyNumberLeft6.style.color = '#ff6b6b';
    teddyNumberLeft6.style.cursor = 'pointer';

    count++;
    if (count > 20) {
      clearInterval(teddyTimer6);
      teddyNumberLeft6.textContent = 'SG13 7IU';
    }
  }, 30);
});

teddyNumberLeft6.addEventListener('mouseout', function () {
  clearInterval(teddyTimer6);
  teddyNumberLeft6.textContent = 'Teddy';
  teddyNumberLeft6.style.color = 'rgb(217, 216, 216)';
  teddyNumberLeft6.style.cursor = 'pointer';
});



//teddy l7
let teddyTimer7;

teddyNumberLeft7.addEventListener('mouseover', function () {
  let count = 0;

  teddyTimer7 = setInterval(function () {
    teddyNumberLeft7.textContent = '';
    for (let i = 0; i < 8; i++) {
      teddyNumberLeft7.textContent += chars[Math.floor(Math.random() * chars.length)];
    }
    teddyNumberLeft7.style.color = '#ff6b6b';
    teddyNumberLeft7.style.cursor = 'pointer';

    count++;
    if (count > 20) {
      clearInterval(teddyTimer7);
      teddyNumberLeft7.textContent = 'SG13 7IU';
    }
  }, 30);
});

teddyNumberLeft7.addEventListener('mouseout', function () {
  clearInterval(teddyTimer7);
  teddyNumberLeft7.textContent = 'Teddy';
  teddyNumberLeft7.style.color = 'rgb(217, 216, 216)';
  teddyNumberLeft7.style.cursor = 'pointer';
});



//teddy r7
let teddyTimerR2;

teddyNumberRight2.addEventListener('mouseover', function () {
  let count = 0;

  teddyTimerR2 = setInterval(function () {
    teddyNumberRight2.textContent = '';
    for (let i = 0; i < 8; i++) {
      teddyNumberRight2.textContent += chars[Math.floor(Math.random() * chars.length)];
    }
    teddyNumberRight2.style.color = '#ff6b6b';
    teddyNumberRight2.style.cursor = 'pointer';

    count++;
    if (count > 20) {
      clearInterval(teddyTimerR2);
      teddyNumberRight2.textContent = 'SG13 7IU';
    }
  }, 30);
});

teddyNumberRight2.addEventListener('mouseout', function () {
  clearInterval(teddyTimerR2);
  teddyNumberRight2.textContent = 'Teddy';
  teddyNumberRight2.style.color = 'rgb(34, 34, 34)';
  teddyNumberRight2.style.cursor = 'pointer';
});


//title 

let titleTimerLeft;
let titleTimerRight;

titleLeft.addEventListener('mouseover', function () {
  let count = 0;
  let originalText = 'Momento';

  titleTimerLeft = setInterval(function () {
    titleLeft.textContent = '';
    for (let i = 0; i < originalText.length; i++) {
      titleLeft.textContent += chars[Math.floor(Math.random() * chars.length)];
    }
    titleLeft.style.cursor = 'pointer';

    count++;
    if (count > 20) {
      clearInterval(titleTimerLeft);
      titleLeft.textContent = originalText;
    }
  }, 30);
});

titleLeft.addEventListener('mouseout', function () {
  clearInterval(titleTimerLeft);
  titleLeft.textContent = 'Momento';
});

titleRight.addEventListener('mouseover', function () {
  let count = 0;
  let originalText = 'Mori';

  titleTimerRight = setInterval(function () {
    titleRight.textContent = '';
    for (let i = 0; i < originalText.length; i++) {
      titleRight.textContent += chars[Math.floor(Math.random() * chars.length)];
    }
    titleRight.style.cursor = 'pointer';

    count++;
    if (count > 20) {
      clearInterval(titleTimerRight);
      titleRight.textContent = originalText;
    }
  }, 30);
});

titleRight.addEventListener('mouseout', function () {
  clearInterval(titleTimerRight);
  titleRight.textContent = 'Mori';
});


// shake anim

let lastScrollTop = 0;
let shakeTimeout;

leftSide.addEventListener('scroll', function () {
  let currentScroll = leftSide.scrollTop;
  let speed = Math.abs(currentScroll - lastScrollTop);

  if (speed > 70) {
    document.body.classList.add('shake-screen');

    // clear existing timeout so it keeps shaking while scrolling
    clearTimeout(shakeTimeout);

    // stop shaking after scrolling stops/slows
    shakeTimeout = setTimeout(function () {
      document.body.classList.remove('shake-screen');
    }, 300);
  }

  lastScrollTop = currentScroll;
});


// run away from cursor

let elusiveTarget = document.querySelector('#elusive-john-g');
if (elusiveTarget) {
  elusiveTarget.classList.add('fleeing-text');

  document.addEventListener('mousemove', function (e) {
    let rect = elusiveTarget.getBoundingClientRect();
    let centerX = rect.left + rect.width / 2;
    let centerY = rect.top + rect.height / 2;

    let deltaX = centerX - e.clientX;
    let deltaY = centerY - e.clientY;
    let dist = Math.hypot(deltaX, deltaY);
    let threshold = 150;

    if (dist < threshold && dist > 0) {
      let scale = (threshold - dist) * 0.8 / dist;

      elusiveTarget.style.transform = `translate(${deltaX * scale}px, ${deltaY * scale}px)`;
    } else {
      elusiveTarget.style.transform = 'translate(0, 0)';
    }
  });
}



let polaroidTriggers = document.querySelectorAll('.polaroid-trigger');
// create the preview element
let polaroidPreview = document.createElement('div');
polaroidPreview.className = 'polaroid-preview';
document.body.appendChild(polaroidPreview);


// right 1
let rightPoloriod1 = document.querySelector('#polaroid-r1');
if (rightPoloriod1) {
    rightPoloriod1.addEventListener('mouseover', function() {
        polaroidPreview.style.backgroundImage = "url('assets/poloroid.jpg')";
        polaroidPreview.classList.add('visible');
    });
    
    rightPoloriod1.addEventListener('mouseout', function() {
    polaroidPreview.classList.remove('visible');
    });
    
    rightPoloriod1.addEventListener('mousemove', function(e) {
         polaroidPreview.style.left = (e.clientX + 20) + 'px';
         polaroidPreview.style.top = (e.clientY + 20) + 'px';
    });
}



// left 1
let leftPoloriod1 = document.querySelector('#polaroid-l1');
if (leftPoloriod1) {
    leftPoloriod1.addEventListener('mouseover', function() {
        polaroidPreview.style.backgroundImage = "url('assets/discount-in.jpg')";
        polaroidPreview.classList.add('visible');
    });
    
    leftPoloriod1.addEventListener('mouseout', function() {
    polaroidPreview.classList.remove('visible');
    });
    
    leftPoloriod1.addEventListener('mousemove', function(e) {
         polaroidPreview.style.left = (e.clientX + 20) + 'px';
         polaroidPreview.style.top = (e.clientY + 20) + 'px';
    });
}



// left 4
let leftPoloriod4 = document.querySelector('#polaroid-l4');
if (leftPoloriod4) {
    leftPoloriod4.addEventListener('mouseover', function() {
        polaroidPreview.style.backgroundImage = "url('assets/dont-beleive-lies.jpg')";
        polaroidPreview.classList.add('visible');
    });
    
    leftPoloriod4.addEventListener('mouseout', function() {
    polaroidPreview.classList.remove('visible');
    });
    
    leftPoloriod4.addEventListener('mousemove', function(e) {
         polaroidPreview.style.left = (e.clientX + 20) + 'px';
         polaroidPreview.style.top = (e.clientY + 20) + 'px';
    });
}




// right 3
let rightPoloriod3 = document.querySelector('#polaroid-r3');
if (rightPoloriod3) {
    rightPoloriod3.addEventListener('mouseover', function() {
        polaroidPreview.style.backgroundImage = "url('assets/car-poloriod.jpg')";
        polaroidPreview.classList.add('visible');
    });
    
    rightPoloriod3.addEventListener('mouseout', function() {
    polaroidPreview.classList.remove('visible');
    });
    
    rightPoloriod3.addEventListener('mousemove', function(e) {
         polaroidPreview.style.left = (e.clientX + 20) + 'px';
         polaroidPreview.style.top = (e.clientY + 20) + 'px';
    });
}




// randomly disappear words

let allStorySpans = document.querySelectorAll('.story-paragraph span');

setInterval(function() {
    for(let i=0; i<5; i++) {
        let randomIndex = Math.floor(Math.random() * allStorySpans.length);
        let span = allStorySpans[randomIndex];

        if (span) {
            span.classList.add('memory-faded');
            
            setTimeout(function() {
                span.classList.remove('memory-faded');
            }, 500 + Math.random() * 1500);
        }
    }
}, 1000); 



