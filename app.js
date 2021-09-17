const { crearTabla } = require("./helpers/multiplicar");


const value = 5;

crearTabla(value).then(data => console.log(data)).catch(err => console.log(err));

// console.log(process.argv);