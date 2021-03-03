const {crearArchivo}=require("./helpers/multiplicar");
const argv=require('./config/yargs');
const colors=require('colors');


//console.log(process.argv);
//console.log(argv);
//console.log('base:yargs',argv.b);
/*const [, , arg3="base=5"]=process.argv;
const[,base]=arg3.split('=');
console.log(base);
*/

crearArchivo(argv.b,argv.l,argv.h)
.then(nombreArchivo=>console.log(nombreArchivo.rainbow,'creado'))
.catch(err=>console.log(err));