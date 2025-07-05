# project Related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-j7kyqyeq?file=1-colorChanger%2Findex.html)

# Soution Code

## Project 1 = 1  (COLOR CHANGE:- USE CLICK)
```Javasript 
const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');
// console.log(body)
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      // body.style.margin = "10%";
      body.style.color = 'red'; // this is use in text
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
      // body.style.backgroundColor =  "yellow"
    }
    if (e.target.id === 'pink') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```
### PROJECT 1 = 2  ( USE MOUSEOVER)
```Javasript 
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('mouseover', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id) {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

### PROJECT 1 = 3  (USE SWITCHER CASE)
```Javasript 
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e)
    console.log(e.target)
    const color = e.target.id;

    switch (color) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
      default:
        console.log('Unknown color:', color);
    }
  });
});
```
## Project 2 = 1  (BOI CALCULATE)
```Javasript 
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const Height = parseInt(document.querySelector('#height').value);
  const Weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (Height === '' || Height < 0 || isNaN(Height)) {
    results.innerHTML = `Please give a valid height ${Height}`;
  } else if (Weight === '' || Weight < 0 || isNaN(Weight)) {
    results.innerHTML = `Please give a valid weight ${Weight}`;
  } else {
    const bmi = (Weight / ((Height * Height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```
### Project 2 = 2  (USE IF STATEMENT)
```Javasript 
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const Height = parseInt(document.querySelector('#height').value);
  const Weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const BmiWeight = document.querySelector('#BMIWeight'); // Removed space in ID

  if (Height === '' || Height < 0 || isNaN(Height)) {
    results.innerHTML = `Please give a valid height: ${Height}`;
  } else if (Weight === '' || Weight < 0 || isNaN(Weight)) {
    results.innerHTML = `Please give a valid weight: ${Weight}`;
  } else {
    const bmi = (Weight / ((Height * Height) / 10000)).toFixed(2);
    results.innerHTML = `<span>Your BMI is ${bmi}</span>`;

    // Convert bmi to number for comparison
    const bmiVal = parseFloat(bmi); // this is concept to use new

    // Show BMI classification
    if (bmiVal < 18.5) {
      BmiWeight.innerHTML = 'Underweight';
    } else if (bmiVal >= 18.5 && bmiVal <= 24.9) {
      BmiWeight.innerHTML = 'Normal weight';
    } else if (bmiVal >= 25 && bmiVal <= 29.9) {
      BmiWeight.innerHTML = 'Overweight';
    } else {
      BmiWeight.innerHTML = 'Obese';
    }
  }
});
```

## Project 3  (Digital Clock)
```Javasript 
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = `${date.toDateString()} <br> ${date.toLocaleTimeString()};`;
  // clock.innerHTML = `${date.toDateString()} - ${date.toLocaleTimeString()};`;
  // clock.innerHTML = date.toLocaleTimeString(); // THIS IS OVERRIDE THIS LINE
  // clock.innerHTML = date.toLocaleString();
}, 1000);
```

## Project 4 (Number guessing game)
```Javasript 
//const randamNumber=console.log((Math.random()*100+1).toFixed(0));
let randamNumber = parseInt(Math.random() * 100 + 1);

const submit = document.getElementById('subt');
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let NumGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a Valid Number');
  } else if (guess < 1) {
    alert('Please Enter a Number, Greater Than 1');
  } else if (guess > 100) {
    alert('Please Enter a Number, Less Than 100');
  } else {
    prevGuess.push(guess);
    if (NumGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Randam Number Was ${randamNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randamNumber) {
    displayMessage(`You Guessed it 'Right'`);
    endGame();
  } else if (guess < randamNumber) {
    displayMessage(`Number is Tooo Low`);
  } else {
    displayMessage(`Number is Tooo High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  NumGuess++;
  remaining.innerHTML = `${11 - NumGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.innerHTML = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start a New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newgameButton = document.querySelector('#newGame');
  newgameButton.addEventListener('click', function (e) {
    randamNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    NumGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - NumGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```

## Project 5 = (keycide)
```Javasript 

const insert = document.getElementById('insert')

window.addEventListener('keyup', (e){
  insert.innerHTML= `
  <div class='color'>
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.kay}</td>
    <td>${e.kaycode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `
})

```
## Project 6= (UNLIMETED COLOR)
```Javasript 

// genrate randam color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());
// console.log(Math.floor(Math.random()* 16))// floor is use to range is 16 , not use to parseInt becouse they only (one) value.

let intervalid;
const startChangingColor = function () {
  if (!intervalid) {
    intervalid = setInterval(changeBgColor, 1000); // use global variable here
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalid);
  intervalid = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```
