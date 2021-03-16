let estados = document.getElementById("estado"); 
let estadosList = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina ","São Paulo","Sergipe","Tocantins"];

for(let index = 0; index < estadosList.length; index += 1){
    let options = document.createElement('option'); // to criando a tagb option
    estados.appendChild(options).innerText = estadosList[index]; // To relacionando a option com a tag input(estado) e dizendo que ela é igual ao valor do estadosList[index]. 
    estados.appendChild(options).value = estadosList[index]; //to dizendo que o value = estadosList[index]


    
}

//Botão de Limpar 
let button = document.getElementById('clean'); 
button.addEventListener('click',cleanAll);

function cleanAll(){
    let name = document.getElementById('name').value = '';
    let email = document.getElementById('email').value = '';
    let cpf = document.getElementById('cpf').value = '';
    let endereco = document.getElementById('endereco').value = '';
    let cidade = document.getElementById('cidade').value = '';
    let estado = document.getElementById('estado').value = estadosList[0];
    let resumo = document.getElementById('resumo').value = '';
    let cargo = document.getElementById('cargo').value = '';
    let date = document.getElementById('date').value = '';


}