//addition function
function addition() {
  clearAnswer();
  let a = Number(document.getElementById('first-number').value);
  let b = Number(document.getElementById('second-number').value);
  let answer = a + b;
  negative(answer);
  document.getElementById('output').innerHTML += String(answer);
}

//subtraction function
function subtraction() {
  clearAnswer();
  let a = Number(document.getElementById('first-number').value);
  let b = Number(document.getElementById('second-number').value);
  let answer = a - b;
  negative(answer);
  document.getElementById('output').innerHTML += String(answer);
}


//multiplication function
function multiplication() {
  clearAnswer();
  let a = Number(document.getElementById('first-number').value);
  let b = Number(document.getElementById('second-number').value);
  let answer = a * b;
  negative(answer);
  document.getElementById('output').innerHTML += String(answer);
}

//division function
function division() {
  clearAnswer();
  let a = Number(document.getElementById('first-number').value);
  let b = Number(document.getElementById('second-number').value);
  let answer = a / b;
  negative(answer);
  document.getElementById('output').innerHTML += String(answer);
}

//power function
function power() {
  clearAnswer();
  let a = Number(document.getElementById('first-number').value);
  let b = Number(document.getElementById('second-number').value);
  let answer = 1;   //if b==0, we want to return 1

  for (let i = 0; i < b; i++) {
    answer*=a
  }

  negative(answer);
  document.getElementById('output').innerHTML += String(answer);
}

//clear function
function clearAll() {
  document.getElementById('first-number').value = "";
  document.getElementById('second-number').value = "";
  document.getElementById('output').innerHTML = String("Answer:<br><br>");
}

//helper to make negatives red
function negative(answer) {
  if (answer < 0) {
    document.getElementById('output').style.color = 'red';
  }
  else {
    document.getElementById('output').style.color = 'black';
  }
}

//helper to clear the answer box before clicking another operator
function clearAnswer(){
  document.getElementById('output').innerHTML = String('Answer:<br><br>');
}