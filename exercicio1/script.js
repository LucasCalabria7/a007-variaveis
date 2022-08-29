let nome   //Exercício A

let idade  //Exercício B 

console.log(typeof (nome))
console.log(typeof (idade))   //Exercício C

/*Tipo impresso no Exercício C foi o de Undefined, isso acontece pois nenhum tipo primitivo ou valor foram 
definidos para as variáveis nome e idade */            //Exercício D

nome = prompt("Qual seu nome ?");
idade = prompt("Qual sua idade?");   //Exercício E 
console.log(nome);
console.log(idade);    /* Depois de atribuir valores e tipos às variáveis, quando imprimo os dados com
console log, os valores aparecem atualizados com o nome e a idade respectivamente */    //Exercício F 

console.log("Olá, ", nome, "você tem", idade, "anos.");
