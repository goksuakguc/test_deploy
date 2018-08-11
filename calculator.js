const numOne = parseFloat(process.argv [3]);
const numTwo = parseFloat(process.argv [4]);
const operand = process.argv [2];
let outputNum;

if(operand === 'add'){
outputNum = numOne + numTwo;
}

console.log('output: ',outputNum);
