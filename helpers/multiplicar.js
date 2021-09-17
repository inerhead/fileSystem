const fs = require('fs');

const crearTabla = async(base) => {
    try {
        let salida = '';
        for (let index = 1; index < 11; index++) {
            salida += `${base} x ${index} = ${base * index}\n`;
        }

        await fs.writeFileSync(`tabla-${base}.txt`, salida);

        return "SIN ESPERAR II";
    } catch (error) {
        throw new Error('Algo Fallo....!!!!');
    }
};

module.exports = {
    crearTabla
};