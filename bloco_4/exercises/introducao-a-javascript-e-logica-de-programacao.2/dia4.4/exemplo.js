function somatorio(numero) {
    
    let receberNumero = 0; 

    for(let index = 1; index <= numero; index +=1){
    receberNumero = receberNumero + index
           
    }
    return receberNumero; 
}

console.log(somatorio(5)); 
  
