const chalk = require('chalk')
const fs =require('fs') 
const caminho = './arquivo/text1.md'

function PegaArquivo(caminho){
    let encode = 'utf-8'
    fs.readFile(caminho,encode,(_,Dados)=>{
        console.log(chalk.green(Dados))
    })
 
}
PegaArquivo(caminho)