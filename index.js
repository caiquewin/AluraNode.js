const chalk = require('chalk')
const fs =require('fs') 
const caminho = './arquivo/'

function TratarErro(erro){
    if(erro.code==='EISDIR'){

        throw new Error(chalk.red('não há arquivos no caminho escrito'))
    }else{
        throw new Error(chalk.red('ocorreu um erro na leitura, o caminho do arquivo pode estar errado'))

    }
}

function PegaArquivo(caminho){
    let encode = 'utf-8'
    fs.readFile(caminho,encode,(erro,Dados)=>{
        if(erro){
            TratarErro(erro)
        }
        console.log(chalk.green(Dados))
    })
 
}
PegaArquivo(caminho)