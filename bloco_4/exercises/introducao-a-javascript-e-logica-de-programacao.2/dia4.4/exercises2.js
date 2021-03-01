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