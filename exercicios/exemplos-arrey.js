//lista de exemplos de arrays

//criando um array
let frutas = ["maça", "banana", "laranja"];

console.log(frutas);

// criando array de números
let números = [1, 2, 3, 4, 5];
console.log(números);

//acessando elementos do array
let carros = ["fusca", "gol", "palio"];

console.log(carros[0]);
console.log(carros[1]);

//alterando elementos do array
let cores = ["vermelho", "verde", "azul"];

cores[1] = "amarelo";
console.log(cores);

//descobrindo o tamanho do array
let animais = ["cachorro", "gato", "coelho", "hamster", "papagaio", "peixe", "tartaruga", "cobra", "leão", "tigre"];
console.log(animais.length);

//adicionando elementos ao final   do com push
let países = ["brasil", "argentina", "chile"];
países.push("Uruguai");
console.log(países);

//removendo o ultimo elemento do array com pop
let cidades = ["são paulo", "rio de janeiro", "belo horizonte"];
cidades.pop()
console.log(cidades);

// Adicionando elementos ao início do array com unshift()
let coresPrimarias = ["vermelho", "verde"];
coresPrimarias.unshift("azul");
console.log(coresPrimarias); 

// Removendo o primeiro elemento do array com shift()
let frutasCítricas = ["limão", "laranja", "tangerina"];
frutasCítricas.shift();
console.log(frutasCítricas);
