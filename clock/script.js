// function getTheTime(){
//     let now = new Date();

//     let h = now.getHours();      // 0–23
//     let m = now.getMinutes();    // 0–59
//     let s = now.getSeconds();    // 0–59



//     if(s.length == 1){
//     // fill first block with 0
//     // assign s to second block
//     }else{
//       // fill first block with Math.floor(s/10)
//       // fill second block with s%10
//     }

// }

document.querySelector('.button-retro').addEventListener('click', function () {
  document.body.classList.add('retro');
});

document.querySelector('.button-normal').addEventListener('click', function () {
  document.body.classList.remove('retro');
});

function changeColor() {}

function clearAllCheckboxes(checkBoxes){
      checkBoxes[0].checked = false;
      checkBoxes[1].checked = false;
      checkBoxes[2].checked = false;
      checkBoxes[3].checked = false;
      checkBoxes[4].checked = false;
      checkBoxes[5].checked = false;
      checkBoxes[6].checked = false;
      checkBoxes[7].checked = false;
      checkBoxes[8].checked = false;
      checkBoxes[9].checked = false;
      checkBoxes[10].checked = false;
      checkBoxes[11].checked = false;
      checkBoxes[12].checked = false;
      checkBoxes[13].checked = false;
      checkBoxes[14].checked = false;
      checkBoxes[15].checked = false;
      checkBoxes[16].checked = false;
      checkBoxes[17].checked = false;
      checkBoxes[18].checked = false;
      checkBoxes[19].checked = false;
      checkBoxes[20].checked = false;
      checkBoxes[21].checked = false;
      checkBoxes[22].checked = false;
      checkBoxes[23].checked = false;
      checkBoxes[24].checked = false;
      checkBoxes[25].checked = false;
      checkBoxes[26].checked = false;
      checkBoxes[27].checked = false;
      checkBoxes[28].checked = false;
      checkBoxes[29].checked = false;
      checkBoxes[30].checked = false;
      checkBoxes[31].checked = false;
      checkBoxes[32].checked = false;
      checkBoxes[33].checked = false;
      checkBoxes[34].checked = false;
      checkBoxes[35].checked = false;
      checkBoxes[36].checked = false;
      checkBoxes[37].checked = false;
      checkBoxes[38].checked = false;
      checkBoxes[39].checked = false;
      checkBoxes[40].checked = false;
      checkBoxes[41].checked = false;
      checkBoxes[42].checked = false;
      checkBoxes[43].checked = false;
      checkBoxes[44].checked = false;
      checkBoxes[45].checked = false;
      checkBoxes[46].checked = false;
      checkBoxes[47].checked = false;
      checkBoxes[48].checked = false;
      checkBoxes[49].checked = false;
      checkBoxes[50].checked = false;
      checkBoxes[51].checked = false;
      checkBoxes[52].checked = false;
      checkBoxes[53].checked = false;
      checkBoxes[54].checked = false;
      checkBoxes[55].checked = false;
      checkBoxes[56].checked = false;
      checkBoxes[57].checked = false;
      checkBoxes[58].checked = false;
      checkBoxes[59].checked = false;
    }

    function getTheTime(){
      let now = new Date();
      let s = now.getSeconds();
      let m = now.getMinutes();
      let h = now.getHours();
      
      let firstDigitSecond = Math.floor(s / 10);
      let secondDigitSecond = s % 10;
      
      drawNumberSeconds1(firstDigitSecond);
      drawNumberSeconds2(secondDigitSecond);

      let firstDigitMinute = Math.floor(m / 10);
      let secondDigitMinute = m % 10;

      drawNumberMinutes1(firstDigitMinute);
      drawNumberMinutes2(secondDigitMinute);

      let firstDigitHour = Math.floor(h / 10);
      let secondDigitHour = h % 10;

      drawNumberHours1(firstDigitHour);
      drawNumberHours2(secondDigitHour);

      let clockSound = document.querySelector('.clock-sound');
      clockSound.play();
    }

    function drawNumberSeconds1(num){
      let container = document.querySelector(".container-seconds1");
      let checkBoxes = container.querySelectorAll('.check-box');
      
      clearAllCheckboxes(checkBoxes);

      if(num == 0){
        drawZero(checkBoxes);
      }else if(num == 1){
        drawOne(checkBoxes);
      }else if(num == 2){
        drawTwo(checkBoxes);
      }else if(num == 3){
        drawThree(checkBoxes);
      }else if(num == 4){
        drawFour(checkBoxes);
      }else if(num == 5){
        drawFive(checkBoxes);
      }else if(num == 6){
        drawSix(checkBoxes);
      }else if(num == 7){
        drawSeven(checkBoxes);
      }else if(num == 8){
        drawEight(checkBoxes);
      }else if(num == 9){
        drawNine(checkBoxes);
      }
    }

    function drawNumberSeconds2(num){
      let container = document.querySelector(".container-seconds2");
      let checkBoxes = container.querySelectorAll('.check-box');
      
      clearAllCheckboxes(checkBoxes);

      if(num == 0){
        drawZero(checkBoxes);
      }else if(num == 1){
        drawOne(checkBoxes);
      }else if(num == 2){
        drawTwo(checkBoxes);
      }else if(num == 3){
        drawThree(checkBoxes);
      }else if(num == 4){
        drawFour(checkBoxes);
      }else if(num == 5){
        drawFive(checkBoxes);
      }else if(num == 6){
        drawSix(checkBoxes);
      }else if(num == 7){
        drawSeven(checkBoxes);
      }else if(num == 8){
        drawEight(checkBoxes);
      }else if(num == 9){
        drawNine(checkBoxes);
      }
    }

       function drawNumberMinutes1(num){
      let container = document.querySelector(".container-minutes1");
      let checkBoxes = container.querySelectorAll('.check-box');
      
      clearAllCheckboxes(checkBoxes);

      if(num == 0){
        drawZero(checkBoxes);
      }else if(num == 1){
        drawOne(checkBoxes);
      }else if(num == 2){
        drawTwo(checkBoxes);
      }else if(num == 3){
        drawThree(checkBoxes);
      }else if(num == 4){
        drawFour(checkBoxes);
      }else if(num == 5){
        drawFive(checkBoxes);
      }else if(num == 6){
        drawSix(checkBoxes);
      }else if(num == 7){
        drawSeven(checkBoxes);
      }else if(num == 8){
        drawEight(checkBoxes);
      }else if(num == 9){
        drawNine(checkBoxes);
      }
    }

    function drawNumberMinutes2(num){
      let container = document.querySelector(".container-minutes2");
      let checkBoxes = container.querySelectorAll('.check-box');
      
      clearAllCheckboxes(checkBoxes);

      if(num == 0){
        drawZero(checkBoxes);
      }else if(num == 1){
        drawOne(checkBoxes);
      }else if(num == 2){
        drawTwo(checkBoxes);
      }else if(num == 3){
        drawThree(checkBoxes);
      }else if(num == 4){
        drawFour(checkBoxes);
      }else if(num == 5){
        drawFive(checkBoxes);
      }else if(num == 6){
        drawSix(checkBoxes);
      }else if(num == 7){
        drawSeven(checkBoxes);
      }else if(num == 8){
        drawEight(checkBoxes);
      }else if(num == 9){
        drawNine(checkBoxes);
      }
    }

       function drawNumberHours1(num){
      let container = document.querySelector(".container-hours1");
      let checkBoxes = container.querySelectorAll('.check-box');
      
      clearAllCheckboxes(checkBoxes);

      if(num == 0){
        drawZero(checkBoxes);
      }else if(num == 1){
        drawOne(checkBoxes);
      }else if(num == 2){
        drawTwo(checkBoxes);
      }else if(num == 3){
        drawThree(checkBoxes);
      }else if(num == 4){
        drawFour(checkBoxes);
      }else if(num == 5){
        drawFive(checkBoxes);
      }else if(num == 6){
        drawSix(checkBoxes);
      }else if(num == 7){
        drawSeven(checkBoxes);
      }else if(num == 8){
        drawEight(checkBoxes);
      }else if(num == 9){
        drawNine(checkBoxes);
      }
    }



       function drawNumberHours2(num){
      let container = document.querySelector(".container-hours2");
      let checkBoxes = container.querySelectorAll('.check-box');
      
      clearAllCheckboxes(checkBoxes);

      if(num == 0){
        drawZero(checkBoxes);
      }else if(num == 1){
        drawOne(checkBoxes);
      }else if(num == 2){
        drawTwo(checkBoxes);
      }else if(num == 3){
        drawThree(checkBoxes);
      }else if(num == 4){
        drawFour(checkBoxes);
      }else if(num == 5){
        drawFive(checkBoxes);
      }else if(num == 6){
        drawSix(checkBoxes);
      }else if(num == 7){
        drawSeven(checkBoxes);
      }else if(num == 8){
        drawEight(checkBoxes);
      }else if(num == 9){
        drawNine(checkBoxes);
      }
    }


getTheTime();
setInterval(getTheTime, 1000);

function drawZero(checkBoxes){

  checkBoxes[0].checked = true;
  checkBoxes[1].checked = true;
  checkBoxes[2].checked = true;
  checkBoxes[3].checked = true;
  checkBoxes[4].checked = true;
  checkBoxes[5].checked = true;
  checkBoxes[6].checked = true;
  checkBoxes[7].checked = true;
  checkBoxes[8].checked = true;
  checkBoxes[9].checked = true;
  checkBoxes[10].checked = true;
  checkBoxes[11].checked = true;
  checkBoxes[12].checked = true;
  checkBoxes[13].checked = true;
  checkBoxes[14].checked = false;
  checkBoxes[15].checked = false;
  checkBoxes[16].checked = true;
  checkBoxes[17].checked = true;
  checkBoxes[18].checked = true;
  checkBoxes[19].checked = true;
  checkBoxes[20].checked = false;
  checkBoxes[21].checked = false;
  checkBoxes[22].checked = true;
  checkBoxes[23].checked = true;
  checkBoxes[24].checked = true;
  checkBoxes[25].checked = true;
  checkBoxes[26].checked = false;
  checkBoxes[27].checked = false;
  checkBoxes[28].checked = true;
  checkBoxes[29].checked = true;
  checkBoxes[30].checked = true;
  checkBoxes[31].checked = true;
  checkBoxes[32].checked = false;
  checkBoxes[33].checked = false;
  checkBoxes[34].checked = true;
  checkBoxes[35].checked = true;
  checkBoxes[36].checked = true;
  checkBoxes[37].checked = true;
  checkBoxes[38].checked = false;
  checkBoxes[39].checked = false;
  checkBoxes[40].checked = true;
  checkBoxes[41].checked = true;
  checkBoxes[42].checked = true;
  checkBoxes[43].checked = true;
  checkBoxes[44].checked = false;
  checkBoxes[45].checked = false;
  checkBoxes[46].checked = true;
  checkBoxes[47].checked = true;
  checkBoxes[48].checked = true;
  checkBoxes[49].checked = true;
  checkBoxes[50].checked = true;
  checkBoxes[51].checked = true;
  checkBoxes[52].checked = true;
  checkBoxes[53].checked = true;
  checkBoxes[54].checked = true;
  checkBoxes[55].checked = true;
  checkBoxes[56].checked = true;
  checkBoxes[57].checked = true;
  checkBoxes[58].checked = true;
  checkBoxes[59].checked = true;

}


function drawOne(checkBoxes){
  // Row 1
  checkBoxes[0].checked = false;
  checkBoxes[1].checked = false;
  checkBoxes[2].checked = true;
  checkBoxes[3].checked = true;
  checkBoxes[4].checked = false;
  checkBoxes[5].checked = false;
  
  // Row 2
  checkBoxes[6].checked = false;
  checkBoxes[7].checked = false;
  checkBoxes[8].checked = true;
  checkBoxes[9].checked = true;
  checkBoxes[10].checked = false;
  checkBoxes[11].checked = false;
  
  // Row 3
  checkBoxes[12].checked = false;
  checkBoxes[13].checked = false;
  checkBoxes[14].checked = true;
  checkBoxes[15].checked = true;
  checkBoxes[16].checked = false;
  checkBoxes[17].checked = false;
  
  // Row 4
  checkBoxes[18].checked = false;
  checkBoxes[19].checked = false;
  checkBoxes[20].checked = true;
  checkBoxes[21].checked = true;
  checkBoxes[22].checked = false;
  checkBoxes[23].checked = false;
  
  // Row 5
  checkBoxes[24].checked = false;
  checkBoxes[25].checked = false;
  checkBoxes[26].checked = true;
  checkBoxes[27].checked = true;
  checkBoxes[28].checked = false;
  checkBoxes[29].checked = false;
  
  // Row 6
  checkBoxes[30].checked = false;
  checkBoxes[31].checked = false;
  checkBoxes[32].checked = true;
  checkBoxes[33].checked = true;
  checkBoxes[34].checked = false;
  checkBoxes[35].checked = false;
  
  // Row 7
  checkBoxes[36].checked = false;
  checkBoxes[37].checked = false;
  checkBoxes[38].checked = true;
  checkBoxes[39].checked = true;
  checkBoxes[40].checked = false;
  checkBoxes[41].checked = false;
  
  // Row 8
  checkBoxes[42].checked = false;
  checkBoxes[43].checked = false;
  checkBoxes[44].checked = true;
  checkBoxes[45].checked = true;
  checkBoxes[46].checked = false;
  checkBoxes[47].checked = false;
  
  // Row 9
  checkBoxes[48].checked = false;
  checkBoxes[49].checked = false;
  checkBoxes[50].checked = true;
  checkBoxes[51].checked = true;
  checkBoxes[52].checked = false;
  checkBoxes[53].checked = false;
  
  // Row 10
  checkBoxes[54].checked = false;
  checkBoxes[55].checked = false;
  checkBoxes[56].checked = true;
  checkBoxes[57].checked = true;
  checkBoxes[58].checked = false;
  checkBoxes[59].checked = false;
}



function drawTwo(checkBoxes){
  // Row 1 - Top of 2
  checkBoxes[0].checked = true;
  checkBoxes[1].checked = true;
  checkBoxes[2].checked = true;
  checkBoxes[3].checked = true;
  checkBoxes[4].checked = true;
  checkBoxes[5].checked = true;
  
  // Row 2 - Top of 2
  checkBoxes[6].checked = true;
  checkBoxes[7].checked = true;
  checkBoxes[8].checked = true;
  checkBoxes[9].checked = true;
  checkBoxes[10].checked = true;
  checkBoxes[11].checked = true;
  
  // Row 3 - Top right
  checkBoxes[12].checked = false;
  checkBoxes[13].checked = false;
  checkBoxes[14].checked = false;
  checkBoxes[15].checked = false;
  checkBoxes[16].checked = true;
  checkBoxes[17].checked = true;
  
  // Row 4 - Middle right
  checkBoxes[18].checked = false;
  checkBoxes[19].checked = false;
  checkBoxes[20].checked = false;
  checkBoxes[21].checked = true;
  checkBoxes[22].checked = true;
  checkBoxes[23].checked = false;
  
  // Row 5 - Middle
  checkBoxes[24].checked = false;
  checkBoxes[25].checked = false;
  checkBoxes[26].checked = true;
  checkBoxes[27].checked = true;
  checkBoxes[28].checked = false;
  checkBoxes[29].checked = false;
  
  // Row 6 - Middle left
  checkBoxes[30].checked = false;
  checkBoxes[31].checked = true;
  checkBoxes[32].checked = true;
  checkBoxes[33].checked = false;
  checkBoxes[34].checked = false;
  checkBoxes[35].checked = false;
  
  // Row 7 - Bottom left
  checkBoxes[36].checked = true;
  checkBoxes[37].checked = true;
  checkBoxes[38].checked = false;
  checkBoxes[39].checked = false;
  checkBoxes[40].checked = false;
  checkBoxes[41].checked = false;
  
  // Row 8 - Bottom left
  checkBoxes[42].checked = true;
  checkBoxes[43].checked = true;
  checkBoxes[44].checked = false;
  checkBoxes[45].checked = false;
  checkBoxes[46].checked = false;
  checkBoxes[47].checked = false;
  
  // Row 9 - Bottom bar
  checkBoxes[48].checked = true;
  checkBoxes[49].checked = true;
  checkBoxes[50].checked = true;
  checkBoxes[51].checked = true;
  checkBoxes[52].checked = true;
  checkBoxes[53].checked = true;
  
  // Row 10 - Bottom bar
  checkBoxes[54].checked = true;
  checkBoxes[55].checked = true;
  checkBoxes[56].checked = true;
  checkBoxes[57].checked = true;
  checkBoxes[58].checked = true;
  checkBoxes[59].checked = true;
}


function drawThree(checkBoxes){
  // Row 1 - Top bar
  checkBoxes[0].checked = true;
  checkBoxes[1].checked = true;
  checkBoxes[2].checked = true;
  checkBoxes[3].checked = true;
  checkBoxes[4].checked = true;
  checkBoxes[5].checked = true;
  
  // Row 2 - Top bar
  checkBoxes[6].checked = true;
  checkBoxes[7].checked = true;
  checkBoxes[8].checked = true;
  checkBoxes[9].checked = true;
  checkBoxes[10].checked = true;
  checkBoxes[11].checked = true;
  
  // Row 3 - Top right
  checkBoxes[12].checked = false;
  checkBoxes[13].checked = false;
  checkBoxes[14].checked = false;
  checkBoxes[15].checked = false;
  checkBoxes[16].checked = true;
  checkBoxes[17].checked = true;
  
  // Row 4 - Middle right
  checkBoxes[18].checked = false;
  checkBoxes[19].checked = false;
  checkBoxes[20].checked = false;
  checkBoxes[21].checked = false;
  checkBoxes[22].checked = true;
  checkBoxes[23].checked = true;
  
  // Row 5 - Middle bar
  checkBoxes[24].checked = false;
  checkBoxes[25].checked = true;
  checkBoxes[26].checked = true;
  checkBoxes[27].checked = true;
  checkBoxes[28].checked = true;
  checkBoxes[29].checked = true;
  
  // Row 6 - Middle bar
  checkBoxes[30].checked = false;
  checkBoxes[31].checked = true;
  checkBoxes[32].checked = true;
  checkBoxes[33].checked = true;
  checkBoxes[34].checked = true;
  checkBoxes[35].checked = true;
  
  // Row 7 - Bottom right
  checkBoxes[36].checked = false;
  checkBoxes[37].checked = false;
  checkBoxes[38].checked = false;
  checkBoxes[39].checked = false;
  checkBoxes[40].checked = true;
  checkBoxes[41].checked = true;
  
  // Row 8 - Bottom right
  checkBoxes[42].checked = false;
  checkBoxes[43].checked = false;
  checkBoxes[44].checked = false;
  checkBoxes[45].checked = false;
  checkBoxes[46].checked = true;
  checkBoxes[47].checked = true;
  
  // Row 9 - Bottom bar
  checkBoxes[48].checked = true;
  checkBoxes[49].checked = true;
  checkBoxes[50].checked = true;
  checkBoxes[51].checked = true;
  checkBoxes[52].checked = true;
  checkBoxes[53].checked = true;
  
  // Row 10 - Bottom bar
  checkBoxes[54].checked = true;
  checkBoxes[55].checked = true;
  checkBoxes[56].checked = true;
  checkBoxes[57].checked = true;
  checkBoxes[58].checked = true;
  checkBoxes[59].checked = true;
}



function drawFour(checkBoxes){
  // Row 1 - Left and right sides
  checkBoxes[0].checked = true;
  checkBoxes[1].checked = true;
  checkBoxes[2].checked = false;
  checkBoxes[3].checked = false;
  checkBoxes[4].checked = true;
  checkBoxes[5].checked = true;
  
  // Row 2 - Left and right sides
  checkBoxes[6].checked = true;
  checkBoxes[7].checked = true;
  checkBoxes[8].checked = false;
  checkBoxes[9].checked = false;
  checkBoxes[10].checked = true;
  checkBoxes[11].checked = true;
  
  // Row 3 - Left and right sides
  checkBoxes[12].checked = true;
  checkBoxes[13].checked = true;
  checkBoxes[14].checked = false;
  checkBoxes[15].checked = false;
  checkBoxes[16].checked = true;
  checkBoxes[17].checked = true;
  
  // Row 4 - Left and right sides
  checkBoxes[18].checked = true;
  checkBoxes[19].checked = true;
  checkBoxes[20].checked = false;
  checkBoxes[21].checked = false;
  checkBoxes[22].checked = true;
  checkBoxes[23].checked = true;
  
  // Row 5 - Full horizontal bar
  checkBoxes[24].checked = true;
  checkBoxes[25].checked = true;
  checkBoxes[26].checked = true;
  checkBoxes[27].checked = true;
  checkBoxes[28].checked = true;
  checkBoxes[29].checked = true;
  
  // Row 6 - Full horizontal bar
  checkBoxes[30].checked = true;
  checkBoxes[31].checked = true;
  checkBoxes[32].checked = true;
  checkBoxes[33].checked = true;
  checkBoxes[34].checked = true;
  checkBoxes[35].checked = true;
  
  // Row 7 - Right side only
  checkBoxes[36].checked = false;
  checkBoxes[37].checked = false;
  checkBoxes[38].checked = false;
  checkBoxes[39].checked = false;
  checkBoxes[40].checked = true;
  checkBoxes[41].checked = true;
  
  // Row 8 - Right side only
  checkBoxes[42].checked = false;
  checkBoxes[43].checked = false;
  checkBoxes[44].checked = false;
  checkBoxes[45].checked = false;
  checkBoxes[46].checked = true;
  checkBoxes[47].checked = true;
  
  // Row 9 - Right side only
  checkBoxes[48].checked = false;
  checkBoxes[49].checked = false;
  checkBoxes[50].checked = false;
  checkBoxes[51].checked = false;
  checkBoxes[52].checked = true;
  checkBoxes[53].checked = true;
  
  // Row 10 - Right side only
  checkBoxes[54].checked = false;
  checkBoxes[55].checked = false;
  checkBoxes[56].checked = false;
  checkBoxes[57].checked = false;
  checkBoxes[58].checked = true;
  checkBoxes[59].checked = true;
}



function drawFive(checkBoxes){
  // Row 1 - Top bar
  checkBoxes[0].checked = true;
  checkBoxes[1].checked = true;
  checkBoxes[2].checked = true;
  checkBoxes[3].checked = true;
  checkBoxes[4].checked = true;
  checkBoxes[5].checked = true;
  
  // Row 2 - Top bar
  checkBoxes[6].checked = true;
  checkBoxes[7].checked = true;
  checkBoxes[8].checked = true;
  checkBoxes[9].checked = true;
  checkBoxes[10].checked = true;
  checkBoxes[11].checked = true;
  
  // Row 3 - Left side only
  checkBoxes[12].checked = true;
  checkBoxes[13].checked = true;
  checkBoxes[14].checked = false;
  checkBoxes[15].checked = false;
  checkBoxes[16].checked = false;
  checkBoxes[17].checked = false;
  
  // Row 4 - Left side only
  checkBoxes[18].checked = true;
  checkBoxes[19].checked = true;
  checkBoxes[20].checked = false;
  checkBoxes[21].checked = false;
  checkBoxes[22].checked = false;
  checkBoxes[23].checked = false;
  
  // Row 5 - Middle bar
  checkBoxes[24].checked = true;
  checkBoxes[25].checked = true;
  checkBoxes[26].checked = true;
  checkBoxes[27].checked = true;
  checkBoxes[28].checked = true;
  checkBoxes[29].checked = true;
  
  // Row 6 - Middle bar
  checkBoxes[30].checked = true;
  checkBoxes[31].checked = true;
  checkBoxes[32].checked = true;
  checkBoxes[33].checked = true;
  checkBoxes[34].checked = true;
  checkBoxes[35].checked = true;
  
  // Row 7 - Right side only
  checkBoxes[36].checked = false;
  checkBoxes[37].checked = false;
  checkBoxes[38].checked = false;
  checkBoxes[39].checked = false;
  checkBoxes[40].checked = true;
  checkBoxes[41].checked = true;
  
  // Row 8 - Right side only
  checkBoxes[42].checked = false;
  checkBoxes[43].checked = false;
  checkBoxes[44].checked = false;
  checkBoxes[45].checked = false;
  checkBoxes[46].checked = true;
  checkBoxes[47].checked = true;
  
  // Row 9 - Bottom bar
  checkBoxes[48].checked = true;
  checkBoxes[49].checked = true;
  checkBoxes[50].checked = true;
  checkBoxes[51].checked = true;
  checkBoxes[52].checked = true;
  checkBoxes[53].checked = true;
  
  // Row 10 - Bottom bar
  checkBoxes[54].checked = true;
  checkBoxes[55].checked = true;
  checkBoxes[56].checked = true;
  checkBoxes[57].checked = true;
  checkBoxes[58].checked = true;
  checkBoxes[59].checked = true;
}


function drawSix(checkBoxes){
  // Row 1 - Top bar
  checkBoxes[0].checked = true;
  checkBoxes[1].checked = true;
  checkBoxes[2].checked = true;
  checkBoxes[3].checked = true;
  checkBoxes[4].checked = true;
  checkBoxes[5].checked = true;
  
  // Row 2 - Top bar
  checkBoxes[6].checked = true;
  checkBoxes[7].checked = true;
  checkBoxes[8].checked = true;
  checkBoxes[9].checked = true;
  checkBoxes[10].checked = true;
  checkBoxes[11].checked = true;
  
  // Row 3 - Left side only
  checkBoxes[12].checked = true;
  checkBoxes[13].checked = true;
  checkBoxes[14].checked = false;
  checkBoxes[15].checked = false;
  checkBoxes[16].checked = false;
  checkBoxes[17].checked = false;
  
  // Row 4 - Left side only
  checkBoxes[18].checked = true;
  checkBoxes[19].checked = true;
  checkBoxes[20].checked = false;
  checkBoxes[21].checked = false;
  checkBoxes[22].checked = false;
  checkBoxes[23].checked = false;
  
  // Row 5 - Middle bar
  checkBoxes[24].checked = true;
  checkBoxes[25].checked = true;
  checkBoxes[26].checked = true;
  checkBoxes[27].checked = true;
  checkBoxes[28].checked = true;
  checkBoxes[29].checked = true;
  
  // Row 6 - Middle bar
  checkBoxes[30].checked = true;
  checkBoxes[31].checked = true;
  checkBoxes[32].checked = true;
  checkBoxes[33].checked = true;
  checkBoxes[34].checked = true;
  checkBoxes[35].checked = true;
  
  // Row 7 - Right side only
  checkBoxes[36].checked = true;
  checkBoxes[37].checked = true;
  checkBoxes[38].checked = false;
  checkBoxes[39].checked = false;
  checkBoxes[40].checked = true;
  checkBoxes[41].checked = true;
  
  // Row 8 - Right side only
  checkBoxes[42].checked = true;
  checkBoxes[43].checked = true;
  checkBoxes[44].checked = false;
  checkBoxes[45].checked = false;
  checkBoxes[46].checked = true;
  checkBoxes[47].checked = true;
  
  // Row 9 - Bottom bar
  checkBoxes[48].checked = true;
  checkBoxes[49].checked = true;
  checkBoxes[50].checked = true;
  checkBoxes[51].checked = true;
  checkBoxes[52].checked = true;
  checkBoxes[53].checked = true;
  
  // Row 10 - Bottom bar
  checkBoxes[54].checked = true;
  checkBoxes[55].checked = true;
  checkBoxes[56].checked = true;
  checkBoxes[57].checked = true;
  checkBoxes[58].checked = true;
  checkBoxes[59].checked = true;
}


function drawSeven(checkBoxes){
  // Row 1 - Top bar
  checkBoxes[0].checked = true;
  checkBoxes[1].checked = true;
  checkBoxes[2].checked = true;
  checkBoxes[3].checked = true;
  checkBoxes[4].checked = true;
  checkBoxes[5].checked = true;
  
  // Row 2 - Top bar
  checkBoxes[6].checked = true;
  checkBoxes[7].checked = true;
  checkBoxes[8].checked = true;
  checkBoxes[9].checked = true;
  checkBoxes[10].checked = true;
  checkBoxes[11].checked = true;
  
  // Row 3 - Right side only
  checkBoxes[12].checked = false;
  checkBoxes[13].checked = false;
  checkBoxes[14].checked = false;
  checkBoxes[15].checked = false;
  checkBoxes[16].checked = true;
  checkBoxes[17].checked = true;
  
  // Row 4 - Right side only
  checkBoxes[18].checked = false;
  checkBoxes[19].checked = false;
  checkBoxes[20].checked = false;
  checkBoxes[21].checked = false;
  checkBoxes[22].checked = true;
  checkBoxes[23].checked = true;
  
  // Row 5 - Right side only
  checkBoxes[24].checked = false;
  checkBoxes[25].checked = false;
  checkBoxes[26].checked = false;
  checkBoxes[27].checked = false;
  checkBoxes[28].checked = true;
  checkBoxes[29].checked = true;
  
  // Row 6 - Right side only
  checkBoxes[30].checked = false;
  checkBoxes[31].checked = false;
  checkBoxes[32].checked = false;
  checkBoxes[33].checked = false;
  checkBoxes[34].checked = true;
  checkBoxes[35].checked = true;
  
  // Row 7 - Right side only
  checkBoxes[36].checked = false;
  checkBoxes[37].checked = false;
  checkBoxes[38].checked = false;
  checkBoxes[39].checked = false;
  checkBoxes[40].checked = true;
  checkBoxes[41].checked = true;
  
  // Row 8 - Right side only
  checkBoxes[42].checked = false;
  checkBoxes[43].checked = false;
  checkBoxes[44].checked = false;
  checkBoxes[45].checked = false;
  checkBoxes[46].checked = true;
  checkBoxes[47].checked = true;
  
  // Row 9 - Right side only
  checkBoxes[48].checked = false;
  checkBoxes[49].checked = false;
  checkBoxes[50].checked = false;
  checkBoxes[51].checked = false;
  checkBoxes[52].checked = true;
  checkBoxes[53].checked = true;
  
  // Row 10 - Right side only
  checkBoxes[54].checked = false;
  checkBoxes[55].checked = false;
  checkBoxes[56].checked = false;
  checkBoxes[57].checked = false;
  checkBoxes[58].checked = true;
  checkBoxes[59].checked = true;
}


function drawEight(checkBoxes){
  // Row 1 - Top bar
  checkBoxes[0].checked = true;
  checkBoxes[1].checked = true;
  checkBoxes[2].checked = true;
  checkBoxes[3].checked = true;
  checkBoxes[4].checked = true;
  checkBoxes[5].checked = true;
  
  // Row 2 - Top bar
  checkBoxes[6].checked = true;
  checkBoxes[7].checked = true;
  checkBoxes[8].checked = true;
  checkBoxes[9].checked = true;
  checkBoxes[10].checked = true;
  checkBoxes[11].checked = true;
  
  // Row 3 - Left and right sides
  checkBoxes[12].checked = true;
  checkBoxes[13].checked = true;
  checkBoxes[14].checked = false;
  checkBoxes[15].checked = false;
  checkBoxes[16].checked = true;
  checkBoxes[17].checked = true;
  
  // Row 4 - Left and right sides
  checkBoxes[18].checked = true;
  checkBoxes[19].checked = true;
  checkBoxes[20].checked = false;
  checkBoxes[21].checked = false;
  checkBoxes[22].checked = true;
  checkBoxes[23].checked = true;
  
  // Row 5 - Middle bar
  checkBoxes[24].checked = true;
  checkBoxes[25].checked = true;
  checkBoxes[26].checked = true;
  checkBoxes[27].checked = true;
  checkBoxes[28].checked = true;
  checkBoxes[29].checked = true;
  
  // Row 6 - Middle bar
  checkBoxes[30].checked = true;
  checkBoxes[31].checked = true;
  checkBoxes[32].checked = true;
  checkBoxes[33].checked = true;
  checkBoxes[34].checked = true;
  checkBoxes[35].checked = true;
  
  // Row 7 - Left and right sides
  checkBoxes[36].checked = true;
  checkBoxes[37].checked = true;
  checkBoxes[38].checked = false;
  checkBoxes[39].checked = false;
  checkBoxes[40].checked = true;
  checkBoxes[41].checked = true;
  
  // Row 8 - Left and right sides
  checkBoxes[42].checked = true;
  checkBoxes[43].checked = true;
  checkBoxes[44].checked = false;
  checkBoxes[45].checked = false;
  checkBoxes[46].checked = true;
  checkBoxes[47].checked = true;
  
  // Row 9 - Bottom bar
  checkBoxes[48].checked = true;
  checkBoxes[49].checked = true;
  checkBoxes[50].checked = true;
  checkBoxes[51].checked = true;
  checkBoxes[52].checked = true;
  checkBoxes[53].checked = true;
  
  // Row 10 - Bottom bar
  checkBoxes[54].checked = true;
  checkBoxes[55].checked = true;
  checkBoxes[56].checked = true;
  checkBoxes[57].checked = true;
  checkBoxes[58].checked = true;
  checkBoxes[59].checked = true;
}



function drawNine(checkBoxes){
  // Row 1 - Top bar
  checkBoxes[0].checked = true;
  checkBoxes[1].checked = true;
  checkBoxes[2].checked = true;
  checkBoxes[3].checked = true;
  checkBoxes[4].checked = true;
  checkBoxes[5].checked = true;
  
  // Row 2 - Top bar
  checkBoxes[6].checked = true;
  checkBoxes[7].checked = true;
  checkBoxes[8].checked = true;
  checkBoxes[9].checked = true;
  checkBoxes[10].checked = true;
  checkBoxes[11].checked = true;
  
  // Row 3 - Left and right sides
  checkBoxes[12].checked = true;
  checkBoxes[13].checked = true;
  checkBoxes[14].checked = false;
  checkBoxes[15].checked = false;
  checkBoxes[16].checked = true;
  checkBoxes[17].checked = true;
  
  // Row 4 - Left and right sides
  checkBoxes[18].checked = true;
  checkBoxes[19].checked = true;
  checkBoxes[20].checked = false;
  checkBoxes[21].checked = false;
  checkBoxes[22].checked = true;
  checkBoxes[23].checked = true;
  
  // Row 5 - Middle bar
  checkBoxes[24].checked = true;
  checkBoxes[25].checked = true;
  checkBoxes[26].checked = true;
  checkBoxes[27].checked = true;
  checkBoxes[28].checked = true;
  checkBoxes[29].checked = true;
  
  // Row 6 - Middle bar
  checkBoxes[30].checked = true;
  checkBoxes[31].checked = true;
  checkBoxes[32].checked = true;
  checkBoxes[33].checked = true;
  checkBoxes[34].checked = true;
  checkBoxes[35].checked = true;
  
  // Row 7 - Left and right sides
  checkBoxes[36].checked = false;
  checkBoxes[37].checked = false;
  checkBoxes[38].checked = false;
  checkBoxes[39].checked = false;
  checkBoxes[40].checked = true;
  checkBoxes[41].checked = true;
  
  // Row 8 - Left and right sides
  checkBoxes[42].checked = false;
  checkBoxes[43].checked = false;
  checkBoxes[44].checked = false;
  checkBoxes[45].checked = false;
  checkBoxes[46].checked = true;
  checkBoxes[47].checked = true;
  
  // Row 9 - Bottom bar
  checkBoxes[48].checked = false;
  checkBoxes[49].checked = false;
  checkBoxes[50].checked = false;
  checkBoxes[51].checked = false;
  checkBoxes[52].checked = true;
  checkBoxes[53].checked = true;
  
  // Row 10 - Bottom bar
  checkBoxes[54].checked = false;
  checkBoxes[55].checked = false;
  checkBoxes[56].checked = false;
  checkBoxes[57].checked = false;
  checkBoxes[58].checked = true;
  checkBoxes[59].checked = true;
}