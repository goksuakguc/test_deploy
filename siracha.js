console.log('siracha goes goot with women');
console.log(process.argv);
console.log(process.argv[2]);
console.log(process.argv[6]);

// if process.argv [2] is add, subtract, multiply, divide or remainder, 
// then do the appropriate math function to process.argv 3 & 4.

if (process.argv[2] === 'add') {
    console.log(2+1)
}
else if (process.argv[2] === 'subtract'){
    console.log(5 - 2)
}
else if (process.argv[2]=== 'multiply') {console.log(3 * 2)}

else if (process.argv[2] === 'divide') {
    console.log(8 / 2)
}

else if (process.argv[2]=== 'remainder') {
    console.log(7 % 2)
}


