let parent = document.querySelector('.parent');
let leftSide = document.querySelector('.left');
let rightSide = document.querySelector('.right');


window.addEventListener("load", function(){
  // console.log("loaded")
  rightSide.scrollTop = 1000000;
})




function getScrollPercentageLeft () {

  //how far have we scrolled
  let scrollTop = leftSide.scrollTop;
  // //how far can we scroll in total
  let maxScrollLeft = leftSide.scrollHeight - window.innerHeight;
  
  let perc = (scrollTop/maxScrollLeft)*100;
  return perc;
}


leftSide.addEventListener('scroll', function(){
  let percentage = getScrollPercentageLeft();
  console.log(percentage);
  let maxScrollRight = rightSide.scrollHeight - window.innerHeight;

  //                          10%.    0.1     
  rightSide.scrollTop = maxScrollRight - ((percentage/100)*maxScrollRight);
  // console.log(percentage, maxScrollRight, rightSide.scrollTop);

  if (percentage > 13){
    document.querySelector('.left-one').style.opacity = '1';
    document.querySelector('.left-one').style.transform = 'translateY(0px)';
  } else {
    document.querySelector('.left-one').style.opacity = '0';
    document.querySelector('.left-one').style.transform = 'translateX(100px)';
  }

  if (percentage > 23){
    document.querySelector('.left-two').style.opacity = '1';
    document.querySelector('.left-two').style.transform = 'translateX(0px)';
  } else {
    document.querySelector('.left-two').style.opacity = '0';
    document.querySelector('.left-two').style.transform = 'translateX(100px)';
  }

  if (percentage > 33){
    document.querySelector('.left-three').style.opacity = '1';
    document.querySelector('.left-three').style.transform = 'translateX(0px)';
  } else {
    document.querySelector('.left-three').style.opacity = '0';
    document.querySelector('.left-three').style.transform = 'translateX(100px)';
  }

  if (percentage > 43){
    document.querySelector('.left-four').style.opacity = '1';
    document.querySelector('.left-four').style.transform = 'translateX(0px)';
  } else {
    document.querySelector('.left-four').style.opacity = '0';
    document.querySelector('.left-four').style.transform = 'translateX(100px)';
  }

  if (percentage > 53){
    document.querySelector('.left-five').style.opacity = '1';
    document.querySelector('.left-five').style.transform = 'translateX(0px)';
  } else {
    document.querySelector('.left-five').style.opacity = '0'; 
    document.querySelector('.left-five').style.transform = 'translateX(100px)';
  }

  if (percentage > 63){
    document.querySelector('.left-six').style.opacity = '1';
    document.querySelector('.left-six').style.transform = 'translateX(0px)';
  } else {
    document.querySelector('.left-six').style.opacity = '0';
    document.querySelector('.left-six').style.transform = 'translateX(100px)';
  }

  if (percentage > 73){
    document.querySelector('.left-seven').style.opacity = '1';
    document.querySelector('.left-seven').style.transform = 'translateX(0px)';
  } else {
    document.querySelector('.left-seven').style.opacity = '0';
    document.querySelector('.left-seven').style.transform = 'translateX(100px)';
  }

  if (percentage > 83){
    document.querySelector('.left-eight').style.opacity = '1';
    document.querySelector('.left-eight').style.transform = 'translateX(0px)';
  } else {
    document.querySelector('.left-eight').style.opacity = '0';
    document.querySelector('.left-eight').style.transform = 'translateX(100px)';
  }

  if (percentage > 93){
    document.querySelector('.left-nine').style.opacity = '1';
    document.querySelector('.left-nine').style.transform = 'translateX(0px)';
  } else {
    document.querySelector('.left-nine').style.opacity = '0';
    document.querySelector('.left-nine').style.transform = 'translateX(100px)';
  }

});


function getScrollPercentageRight () {

  //how far have we scrolled
  let scrollTop = rightSide.scrollTop;
  
  // //how far can we scroll in total
  let maxScrollRight = rightSide.scrollHeight - window.innerHeight;
  
  let perc = (scrollTop/maxScrollRight)*100;
  return perc;
}

rightSide.addEventListener('scroll', function(){
  let percentage = getScrollPercentageRight();

  let maxScrollLeft = leftSide.scrollHeight - window.innerHeight;

  // //                          10%.    0.1     
  leftSide.scrollTop = maxScrollLeft - ((percentage/100)*maxScrollLeft);
  // console.log(percentage, maxScrollRight, rightSide.scrollTop);
});




