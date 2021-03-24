const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

/* const turnoManha = (lesson2,key,val) => {
   lesson2[key] = val; 
   console.log(lesson2);
   
}

turnoManha(lesson2, 'Turno','Noite');

const listaKeys = obj => {
   const lista = Object.keys(obj);
    console.log(lista);
}

listaKeys(lesson3); 

const tamObjeto = obj => {
    const sizeObj = Object.keys(obj).length;
    
    console.log(sizeObj);

}

tamObjeto(lesson1);

const listaValores = obj => {
    const lista = Object.values(obj);
     console.log(lista);
}
listaValores(lesson3);


const allLessons = Object.assign({}, {lesson1, lesson2, lesson3}); 
//console.log(allLessons);

const numEstudades = obj => {
    let total = 0; 
    const array = Object.keys(obj); 
    for(const index in array){
        total += obj[array[index]].numeroEstudantes;
    }
    return total; 
}
 
console.log(numEstudades(allLessons));  


const getValueByNumber = (obj, num) => {
    const resul = Object.values(obj)[num]; 
    console.log(resul); 
}

getValueByNumber(lesson1, 0); */


