let startButtonElem = document.querySelector('.start-button');
startButtonElem.style.fontFamily = 'monospace';
startButtonElem.style.backgroundColor = 'white';
startButtonElem.style.borderWidth = '1px';
startButtonElem.style.borderColor = 'black';
startButtonElem.style.borderStyle = 'solid';
startButtonElem.style.cursor = 'pointer';


let headerButton, linkButton, textBoxButton, headingButton;

function thingsAppear () {

  document.body.style.backgroundColor = 'black';
  startButtonElem.innerText = 'View Your Art Work';
  startButtonElem.style.position = 'fixed';
  startButtonElem.style.zIndex = '101';
  startButtonElem.onclick = removeAllButtons;
  

    // button 1 

  headerButton = document.createElement("button");
  headerButton.innerText = 'Button';
  headerButton.style.backgroundColor = 'white';
  headerButton.style.color = 'black';
  headerButton.style.border = 'none';
  headerButton.style.fontSize = '22px';
  headerButton.style.fontFamily = 'monospace';
  headerButton.style.padding = '12px 16px';
  headerButton.style.zIndex = '100';
  headerButton.className = 'button-abs';
  let areaWidth = 600;
  let pageCenter = window.innerWidth/2;
  let leftEdge = pageCenter - areaWidth/2;
  let randomLeft1 = leftEdge + Math.random() * areaWidth;
  let topEdge1 = Math.random()*500 + 100;
  headerButton.style.top = topEdge1+'px';
  headerButton.style.left = randomLeft1 + 'px';
  document.body.append(headerButton);

  

  let keyframes1 = `
    @keyframes move1 {
      0%{
        transform: translate(${Math.random()*300}px, ${Math.random()*100}px);
      }

      50% {
        transform: translate(${Math.random()*300}px, ${Math.random()*100}px);
      }

      100% {
        transform: translate(${Math.random()*300}px, ${Math.random()*100}px);
      }
    }
  
  `
  
  let style1 = document.createElement('style');
  style1.innerHTML = keyframes1;
  document.head.appendChild(style1);
  headerButton.style.animationName = 'move1';
  headerButton.style.animationDuration = 1+'s';
  headerButton.style.animationTimingFunction = 'linear';
  headerButton.style.animationIterationCount = 'infinite';
  headerButton.style.animationDirection = 'alternate';

  headerButton.onclick = buttonAppears;

    // button 2

  linkButton = document.createElement("button");
  linkButton.innerText = 'Link';
  linkButton.style.backgroundColor = 'white';
  linkButton.style.color = 'black';
  linkButton.style.border = 'none';
  linkButton.style.fontSize = '22px';
  linkButton.style.fontFamily = 'monospace';
  linkButton.style.padding = '12px 16px';
  linkButton.style.zIndex = '100';
  linkButton.className = 'button-abs'
  let randomLeft2 = leftEdge + Math.random() * areaWidth;
  let topEdge2 = Math.random()*500 + 100;
  linkButton.style.top = topEdge2+'px';
  linkButton.style.left = randomLeft2 + 'px';
  document.body.append(linkButton);


  let keyframes2 = `
    @keyframes move2 {
      0%{
        transform: translate(${Math.random()*300}px, ${Math.random()*100}px);
      }

      50% {
        transform: translate(${Math.random()*300}px, ${Math.random()*100}px);
      }

      100% {
        transform: translate(${Math.random()*300}px, ${Math.random()*100}px);
      }
    }
  
  `
  
  let style2 = document.createElement('style');
  style2.innerHTML = keyframes2;
  document.head.appendChild(style2);
  linkButton.style.animationName = 'move2';
  linkButton.style.animationDuration = 1+'s';
  linkButton.style.animationTimingFunction = 'linear';
  linkButton.style.animationIterationCount = 'infinite';
  linkButton.style.animationDirection = 'alternate';

  linkButton.onclick = linkAppears;
  
    // button 3

  textBoxButton = document.createElement("button");
  textBoxButton.innerText = 'Text Box';
  textBoxButton.style.backgroundColor = 'white';
  textBoxButton.style.color = 'black';
  textBoxButton.style.border = 'none';
  textBoxButton.style.fontSize = '22px';
  textBoxButton.style.fontFamily = 'monospace';
  textBoxButton.style.padding = '12px 16px';
  textBoxButton.style.zIndex = '100';
  textBoxButton.className = 'button-abs';
  
  let randomLeft3 = leftEdge + Math.random() * areaWidth;
  let topEdge3 = Math.random()*500 + 100;
  textBoxButton.style.top = topEdge3+'px';
  textBoxButton.style.left = randomLeft3 + 'px';
  document.body.append(textBoxButton);

  let keyframes3 = `
    @keyframes move3 {
      0%{
        transform: translate(${Math.random()*300}px, ${Math.random()*100}px);
      }

      50% {
        transform: translate(${Math.random()*300}px, ${Math.random()*100}px);
      }

      100% {
        transform: translate(${Math.random()*300}px, ${Math.random()*100}px);
      }
    }
  
  `
  
  let style3 = document.createElement('style');
  style3.innerHTML = keyframes3;
  document.head.appendChild(style3);
  textBoxButton.style.animationName = 'move3';
  textBoxButton.style.animationDuration = 1+'s';
  textBoxButton.style.animationTimingFunction = 'linear';
  textBoxButton.style.animationIterationCount = 'infinite';
  textBoxButton.style.animationDirection = 'alternate';

  textBoxButton.onclick = textBoxAppears;
  

    
    // button 4

  headingButton = document.createElement("button");
  headingButton.innerText = 'Heading';
  headingButton.style.backgroundColor = 'white';
  headingButton.style.color = 'black';
  headingButton.style.border = 'none';
  headingButton.style.fontSize = '22px';
  headingButton.style.fontFamily = 'monospace';
  headingButton.style.padding = '12px 16px';
  headingButton.style.zIndex = '100';
  headingButton.className = 'button-abs';
  let randomLeft4 = leftEdge + Math.random() * areaWidth;
  let topEdge4 = Math.random()*500 + 100;
  headingButton.style.top = topEdge4+'px';
  headingButton.style.left = randomLeft4 + 'px';
  document.body.append(headingButton);

  let keyframes4 = `
    @keyframes move4 {
      0%{
        transform: translate(${Math.random()*300}px, ${Math.random()*100}px);
      }

      50% {
        transform: translate(${Math.random()*300}px, ${Math.random()*100}px);
      }

      100% {
        transform: translate(${Math.random()*300}px, ${Math.random()*100}px);
      }
    }
  
  `
  
  let style4 = document.createElement('style');
  style4.innerHTML = keyframes4;
  document.head.appendChild(style4);
  headingButton.style.animationName = 'move4';
  headingButton.style.animationDuration = 1+'s';
  headingButton.style.animationTimingFunction = 'linear';
  headingButton.style.animationIterationCount = 'infinite';
  headingButton.style.animationDirection = 'alternate';

  headingButton.onclick = headingAppears; 
}

function buttonAppears () {

  let newButton = document.createElement('button');
  newButton.innerText = 'Button';
  newButton.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  newButton.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  newButton.style.border = 'none';
  newButton.style.padding = '8px 12px';
  newButton.style.fontSize = `${Math.floor(Math.random() * 5) + 8}px`;
  newButton.style.position = 'fixed';
  newButton.style.top = `${Math.floor(Math.random() * (window.innerHeight - 50))}px`;
  newButton.style.left = `${Math.floor(Math.random() * (window.innerWidth - 50))}px`;
  newButton.style.cursor = 'pointer';
  newButton.style.zIndex = '50';
  document.body.append(newButton);

  newButton.onclick = genButtonClicked;
}

function linkAppears () {
  let newLink = document.createElement('a');
  newLink.innerText = 'link';
  newLink.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  newLink.style.fontSize = `${Math.floor(Math.random() * 8) + 12}px`;
  newLink.style.position = 'fixed';
  newLink.style.top = `${Math.floor(Math.random() * (window.innerHeight - 50))}px`;
  newLink.style.left = `${Math.floor(Math.random() * (window.innerWidth - 50))}px`;
  newLink.style.zIndex = '50';
  document.body.append(newLink);

  newLink.onclick = linkShakes;
}


function textBoxAppears () {
  let newtextBox = document.createElement('input');
  newtextBox.type = 'text';
  newtextBox.placeholder = 'type...'
  newtextBox.style.width = `${Math.floor(Math.random() * 97) + 64}px`;
  newtextBox.style.height = '32px';
  newtextBox.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  newtextBox.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  newtextBox.style.border = 'none';
  newtextBox.style.position = 'fixed';
  newtextBox.style.top = `${Math.floor(Math.random() * (window.innerHeight - 64))}px`;
  newtextBox.style.left = `${Math.floor(Math.random() * (window.innerWidth - 160))}px`;
  newtextBox.style.zIndex = '50';
  document.body.append(newtextBox);
}

function headingAppears () {

  let word0 = '@keyframes';
  let word1 = 'innerText';
  let word2 = 'Math.random()';
  let word3 = 'onclick';
  let word4 = 'class';
  let word5 = 'variable';
  let word6 = 'function';
  let word7 = 'div';
  let word8 = 'padding';
  let word9 = 'console.log()';
  
  let randomNum = Math.floor(Math.random() * 10);
  let randomWord = eval('word' + randomNum);

  let newHeading = document.createElement('h2');
  newHeading.innerText = randomWord;
  newHeading.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  newHeading.style.position = 'fixed';
  newHeading.style.top = `${Math.floor(Math.random() * (window.innerHeight - 50))}px`;
  newHeading.style.left = `${Math.floor(Math.random() * (window.innerWidth - 50))}px`;
  newHeading.style.zIndex = '50';
  document.body.append(newHeading);
}


function removeAllButtons () {
  headerButton.remove();
  linkButton.remove();
  textBoxButton.remove();
  headingButton.remove();
  startButtonElem.remove();
}

function genButtonClicked () {
  this.classList.toggle('button-clicked');
}

function linkShakes () {
  this.classList.toggle ('link-shakes')
}