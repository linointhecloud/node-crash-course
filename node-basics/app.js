const fs = require('fs');

console.clear();
console.log('===========================================================');
console.log('Tabla de multiplicar del número 5');
console.log('===========================================================');

const base = 5;
let output = '';

for (let i = 1; i <= 10; i++) {
  output += `${base} x ${i} = ${base * i}\n`;
}

fs.writeFile('message.txt', output, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

// console.log(output);
