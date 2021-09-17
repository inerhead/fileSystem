const fs = require('fs');

const crearTabla = async (base) => {

    let salida = '';
    for (let index = 1; index < 11; index++) {
        salida += `${base} x ${index} = ${base * index}\n`;
    }

    fs.writeFileSync(`table/tabla-${base}.txt`, salida);

    return "SIN ESPERAR II";
};

module.exports = {
    crearTabla
};