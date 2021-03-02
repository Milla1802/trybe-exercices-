let palavra = "Trybe"; 
let palavra2 = "be";



let inversoPalavra = palavra.split("").reverse().join("");
let inversoPalavra2 = palavra2.split("").reverse().join("");

let comparacao = inversoPalavra != inversoPalavra2;

console.log(comparacao);
console.log(inversoPalavra, inversoPalavra2);

function verificaFimPalavra(palavra, fimPalavra) {
    let inversoPalavra = palavra.split("").reverse().join("");
    let inversoFimPalavra = fimPalavra.split("").reverse().join("");
  
    for (let i = 0; i < inversoFimPalavra.length; i += 1) {
      if (inversoPalavra[i] != inversoFimPalavra[i]) {
        return false;
      } else {
        return true;
      }
    }
  }
  
  console.log(verificaFimPalavra("camila", "bo")); 