const chalk = require('chalk')
const fs =require('fs') 
const caminho = './arquivo/text1.md'

function TratarErro(erro){
    if(erro.code==='EISDIR'){

        throw new Error(chalk.red('não há arquivos no caminho escrito'))
    }else{
        throw new Error(chalk.red('ocorreu um erro na leitura, o caminho do arquivo pode estar errado'))

 
    }
}
async function PegaArquivo(caminho){
    try {
        let encode = 'utf-8'
        const texto = await fs.promises.readFile(caminho,encode)
        console.log(chalk.green(texto))
        
    } catch (error) {
        TratarErro(error)
    }finally   {
        console.log(chalk.yellow('operação concluída'));
    }
}

// function PegaArquivo(caminhoArquivo){
//     let encode = 'utf-8'
//     fs.promises.readFile(caminho,encode).then((Dados)=>{
//         console.log('texto',chalk.green(Dados))})
//         .catch((error)=>{
//             TratarErro(error)
//         })
// }

// function PegaArquivo(caminho){
//     let encode = 'utf-8'
//     fs.readFile(caminho,encode,(erro,Dados)=>{
//         if(erro){
//             TratarErro(erro)
//         }
//         console.log(chalk.green(Dados))
//     })
// }

PegaArquivo(caminho)