const fs = require('fs');

const value = 5;
let salida = '';
for (let index = 1; index < 11; index++) {
    salida = `${value} x ${index} = ${value * index}`;
}

fs.writeFileSync(`table/tabla-${value}.txt`, salida, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });