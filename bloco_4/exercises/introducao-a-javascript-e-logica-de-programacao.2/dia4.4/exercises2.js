// Exercício 2:
function maiorNum(array) {
    
    let maiorIndice = 0;  

    for(let indice in array){
        if(array[indice] > array[maiorIndice]){
            maiorIndice = indice; 
        }
    }

    return maiorIndice; 
}

console.log(maiorNum([2, 3, 6, 77, 10, 1]));

//Exercício 3:

function maiorNum(array) {
    
    let maiorIndice = 0;  

    for(let indice in array){
        if(array[indice] < array[maiorIndice]){
            maiorIndice = indice; 
        }
    }

    return maiorIndice; 
}

console.log(maiorNum([2, 4, 6, 7, -10, 0, 3]));

// Exercício 4: 

function maiorNome(nomes) {
    
    let maisCaracteres = nomes[0]; 

    for (let key in nomes){
        
        if (maisCaracteres.length < nomes[key].length){
            maisCaracteres = nomes[key]; 
        }

    }
    return maisCaracteres; 

    
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// Exercício 5: 

function numRepetido(numeros) {
    let numerosRept = 0; 

    for(let repet in numeros){

        numerosRept = repet;
        if(numeros[repet] === numerosRept){
            numerosRept = numeros[repet]; 
        }

    }
    return numerosRept; 

}
console.log(numRepetido([2, 3, 2, 5, 8, 2, 3])); // Não consegui fazer questão. 



//Questão 6:
function somatorio(numero) {
    
    let receberNumero = 0; 

    for(let index = 1; index <= numero; index +=1){
    receberNumero = receberNumero + index
           
    }
    return receberNumero; 
}

console.log(somatorio(5)); 

// Exercício 7: 

 function verificaFimPalavra(stringword, stringending){

    let inversoPalavra = stringword.split("").reverse().join("");
    let inversoFimPalavra = stringending.split("").reverse().join("");

    for (let index =  0; index < inversoFimPalavra.length; index +=1){
        if (inversoPalavra[index] !== inversoFimPalavra[index]) {
            return false; 
        } else {
            return true; 
        }
    }
 }

 console.log(verificaFimPalavra('Trybe', 'be'));


  