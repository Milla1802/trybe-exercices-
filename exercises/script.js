let estados = document.getElementById("estado"); 
let estadosList = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina ","São Paulo","Sergipe","Tocantins"];

for(let index = 0; index < estadosList.length; index += 1){
    let options = document.createElement('option'); // to criando a tagb option
    estados.appendChild(options).innerText = estadosList[index]; // To relacionando a option com a tag input(estado) e dizendo que ela é igual ao valor do estadosList[index]. 
    estados.appendChild(options).value = estadosList[index]; //to dizendo que o value = estadosList[index]


    
}