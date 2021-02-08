
/* eslint-disable strict */
function sheepCounter(num) {
  if (num === 0) {
    const noSheep = 'All sheep jumped over the fence';
    return noSheep;
  }

  let countingSheep =  `${num}: Another sheep jumps over the fence ${sheepCounter(num - 1)}`;
  return countingSheep;
}

function powerCalculator(base, exp) {
  let answer = base;

  if (exp <= 0) {
    return 0;
  }

  if (exp === 1) {
    return base;
  }
  answer = answer * powerCalculator(base, exp - 1); 
  return answer;
}

function reverseStr(str) {
  if (str === '') {
    return str;
  }

  const [first, ...remaining] = str;
  console.log(first);
  return reverseStr(remaining.join('')) + first;
}

/// bellow doesn't use recursion
function calculateTriangleNumber(n){
  const x = n + 1;
  const T = n * x / 2;

  return T;
}
/// above doen't use recursion

function splitStr(str, char) {
  if (str.length === 0) {
    return '';
  }
  const currentChar = str[0] === char ? '' : str[0];
  const newStr = currentChar + strSplit(str.slice(1), char);
  
  return newStr;
}

function teddyFib(num) {
  if (num <= 0) return [];
  if (num === 1) return [1];
  if (num === 2) return [1, 1];

  const last = teddyFib(num-1);
  return [...last, last[last.length-1] + last[last.length - 2]];
}

function Fibonacci(num){
  if(num==0) {
    return 0;
  }
  if (num===1) {
    return 1;
  }
  return Fibonacci(num-2)+Fibonacci(num-1);
}

function factorial(num) {
  return num <= 0 ? 1 : num * factorial(num - 1);
}

function mazeRunner(parentArr, one, two) {
  let line = one || 0;
  let idx = two || 0;

  if (parentArr[line][idx] === 'e') return ''; 
}

function render() {
  let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
  ];

  let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
  ];

  let str = 'A / scentence / containing / the / character.';

  const HTML =  mazeRunner(mySmallMaze, 2, 2);


  $('main').html(HTML);
}

function main() {
  render();
}

$(main);