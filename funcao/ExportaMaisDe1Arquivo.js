// module.exports = function soma(num1, num2) {
//     return num1 + num2;
//    };

//    2° Exemplo
//    function soma(num1, num2) {
//     return num1 + num2;
//    }
   
//    module.exports = soma;

//  --->podemos exporta apenas a função que precisa ser execultada a parti de outra parte do código.
// enquanto outras funções do arquivo ficam inacessiveis. EXEMPLO ABAIXO::

/*
function soma(num1, num2) {
 return num1 + num2;
}

function multiplica(num1, num2) {
 return soma(num1, num2) * 2;
}

module.exports = multiplica;
*/


// Se Precisarrmos declararmos outras funções dentro do código basta colocarmos 
// como no exemplo abaixo.


function soma(num1, num2) {
    return num1 + num2;
   }
   
   function multiplica(num1, num2) {
    return soma(num1, num2) * 2;
   }
   
module.exports = { multiplica, soma };