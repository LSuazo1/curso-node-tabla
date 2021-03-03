const fs = require('fs');
const colors=require('colors');
const crearArchivo = async (base,listar,hasta) => {

    try {
        

        let salida,consola = "";

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} ${'x'} ${i} ${'='} ${base * i}\n`;
            consola+= `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if(listar){
            console.clear();
            console.log("===============".green);
            console.log(`Tabla del: ${base}`.blue);
            console.log("===============".green);    
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creado`;
    } catch (err) {
        throw err;
    }


}
module.exports = {
    crearArchivo
}