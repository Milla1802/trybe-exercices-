let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let valoresImpares = 0; 

for (let index = 0; index < numbers.length; index++) {
   if (numbers[index] % 2 !== 0) {
       valoresImpares ++;
   }
    
} 

if (valoresImpares === 0){
    console.log("Não possui valores ímpares")
} else{
    console.log(valoresImpares); 
}

