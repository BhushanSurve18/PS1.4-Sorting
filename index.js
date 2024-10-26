const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.json());

// Exercise 1

let numbers = [2, 5, 10, 6, 4];

function numbersSortByAsecending(number1, number2) {
  return number1 - number2;
}

app.get('/sort/ascending-order', (req, res) => {
  let numbersCopy = numbers.slice();
  numbersCopy.sort(numbersSortByAsecending);
  console.log(numbersCopy);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
