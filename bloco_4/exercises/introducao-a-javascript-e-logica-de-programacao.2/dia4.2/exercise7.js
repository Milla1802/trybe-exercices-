let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let menorNum = 101; //Não pode ser um numero menor que os numeros da array

for (let index = 0; index < numbers.length; index ++) {
   
    if (numbers[index] < menorNum)  {
        menorNum = numbers[index]; 
      
    }
    
}

console.log(menorNum);

