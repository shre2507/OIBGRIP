let result = document.getElementById("result");

function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  let expression = result.value;
  let operators = /[*/+-]/g;
  let numbers = expression.split(operators);
  let operatorArray = expression.match(operators);
  let operatorIndex = 0;
  let resultValue = parseFloat(numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    let currentNumber = parseFloat(numbers[i]);
    let currentOperator = operatorArray[operatorIndex++];

    if (currentOperator === "*") {
      resultValue *= currentNumber;
    } else if (currentOperator === "/") {
      resultValue /= currentNumber;
    } else if (currentOperator === "+") {
      resultValue += currentNumber;
    } else if (currentOperator === "-") {
      resultValue -= currentNumber;
    }
  }

  result.value = resultValue.toFixed(2);
}
