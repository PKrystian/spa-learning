calculateFactorialLoop = function() {
  var userInput = document.getElementById('userInput');
  var result = document.getElementById('result');

  if (! checkIfPositiveOrEmpty(userInput.value)) {
    return 1;
  }

  var number = userInput.value;
  var factorial = 1;

  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  userInput.value = parseInt(number);
  result.setAttribute('value', parseInt(factorial));
  return 0;
}

calculateFactorialRecursion = function() {
  var userInput = document.getElementById('userInput');
  var result = document.getElementById('result');

  if (! checkIfPositiveOrEmpty(userInput.value)) {
    return 1;
  }

  var number = userInput.value;
  var factorial = recursion(number);

  userInput.value = parseInt(number);
  result.setAttribute('value', parseInt(factorial));
  return 0;
}

recursion = function(number) {
  if (number == 0) {
    return 1;
  }

  return number * recursion(number - 1);
}

checkIfPositiveOrEmpty = function(number) {
  if (number < 0) {
    alert('Please enter a positive number');
    return false;
  }
  if (number === '') {
    alert('Please enter a number');
    return false;
  }

  return true;
}
