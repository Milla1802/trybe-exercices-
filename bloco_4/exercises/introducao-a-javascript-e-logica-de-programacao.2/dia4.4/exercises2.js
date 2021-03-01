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
        
        if (maisCaracteres.length < nome[key].length){
            maisCaracteres = nomes[key]; 
        }

        return maisCaracteres; 
    }

    console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
}

function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let indice in palavras) {
      if (maiorPalavra.length < palavras[indice].length) {
        maiorPalavra = palavras[indice];
      }
    }
    return maiorPalavra;
  }
  
  console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); 