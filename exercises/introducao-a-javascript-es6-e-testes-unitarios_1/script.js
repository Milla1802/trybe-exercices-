const testingScope = escopo => {
        if (escopo === true) {
          var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
          console.log(ifScope);
        } else {
          var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          console.log(elseScope);
        }
        //console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

      testingScope(false);

      
// Questão 2 - part1 

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort((a,b) => a - b );
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente`);


// parte 2

const numero = (val) => {
   let result = 1; 
    if(val === 0){
        return result = 1; 
    }

   for(let index = 2; index <= val; index += 1){
       result = result * index; 
   }

   return result; 
} 

console.log(numero(5))

// questão 2 - part 2

const longestWord = (palavra) => {
    let arraySepar = palavra.split(' ');
    let contador = 0;
    let result = ''; 

    for(const word of arraySepar){
        if(word.length > contador){
            result = word;
        }
    }
    return result

}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));