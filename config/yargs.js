const { option, boolean } = require("yargs");
const argv=require('yargs')
              .option('b',{
                  alias:'base',
                  type:'number',
                  demandOption:true,
                  describe:"Es la base de la table de multiplicar"
              })
              .check((argv,option)=>{
                  if(isNaN(argv.b)){
                    throw "La base tiene que ser un numero"
                  }
                  return true;
              }).option('l',{
                  alias:'listar',
                  type:"boolean",
                  default:false,
                  describe:"Es la base de la table de multiplicar"
              }).option('h',{
                  alias:'Hasta',
                  type:'number',
                  default:10,
                  describe:"Hasta donde vamos a llegar"
              })
              .argv;

module.exports=argv;