// alert('Funcionou!!')

// let numeroSecreto = 29;



// comparar é tipo se o cara é igual então usa === , condição --> if  , if else

// if(numeroSecreto === 10) {
    // 'Vc acertou'
// } else {
    // 'Vc errou'
// }

// const blablabla = 4;
// if(blablabla > 4) {};


// let numeroSecreto = 3;

// let caixaQueRecebeInformacaoFicaAquiDesseLado = prompt('Escolha um número entre 1 e 10')

// if ( caixaQueRecebeInformacaoFicaAquiDesseLado == numeroSecreto
// ) {
//     console.log('Vc acertou Mádjan! Vc domina lógica de programação! Parabéns por se reciclar!')
// }


// let madjan = 1;
// let sabeTudo = prompt('Escolha um número entre 1 e 10')

// if(madjan == sabeTudo) {
//     console.log('Mádjan precisa praticar mais, porém, domina toda a arte do saber!')
// }

// let mensagemDeBoasVindas = 'Boas vindas ao App';
// alert('mensagemDeBoasVindas')


// let senhaDoSistema = "senhaTeste!";

// let senha = prompt("Digite a senha do sistema:");

// if (senha == senhaDoSistema){
//     alert("Acesso ao sistema garantido");
// }

// alert('Boas vindas ao nosso site!')

// let nome = 'Lua';

// let idade = 25;

// let numeroDeVendas  = 50;

// let saldoDisponivel = 1000;

// alert('Erro! Preencha todos os campos')

// //
// let mensagemDeErro = "Erro! Preencha todos os campos";
// alert(mensagemDeErro)

// //
// let nomee = prompt('Nome de usuário')

// let idadee = prompt('idade')
// if(idadee >= 18) {
//     console.log('Pode tirar a habilitação!')
// }



// let chute = 2;
// let numeroSecretoo = 2;

// if(chute == numeroSecretoo) {
//     console.log('Vc acertou mesmo!')
// } else {    
//     alert('Vc acertou, conseguiu de novo!!')
// }




// alert('Boas vindas ao jogo do número secreto');
// let numeroSecreto = 8;
// console.log(numeroSecreto);
// let chute = prompt('Escolha um número entre 1 e 10');

// se chute for igual ao número secreto

// if(numeroSecreto == chute) {
//     alert(`Você acertou! O número secreto é ${numeroSecreto}`)
// } else {
//     alert('Você errou!')
// }

//  ----------------------

// Desafios:
// 1 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

// diaDaSemana = prompt('Usuário, qual é o dia da semana?')

// if (diaDaSemana == 'Sábado') {
//     alert("Bom fim de semana!")
// } else if (diaDaSemana == 'Domingo') {
//     alert("Bom fim de semana!")
// } else {
//     alert("Boa semana!")
// }

// 2 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

// numero = prompt('Digite um positivo ou negativo');
// if (numero > 0) {
//     alert('Número positivo!')
// } else {
//     alert('Número negativo!')
// }

// 3 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

// pontuação = 105;
// if (pontuação >= 100) {
//     console.log("Parabéns, você venceu!")
// } else {
//     console.log("Tente novamente para ganhar.")
// }

// 4 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

// let saldoConta = 10;
// alert(`Seu saldo da conta é ${saldoConta}`);

// 5 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

// let nome = prompt('qual seu nome?')
// alert(`boas-vindas ${nome}`)

// ************************************

// Novas condições:  while
// let chute = prompt('Escolha um número entre 1 e 10');
// let numeroSecreto = 7;
// let tentativas = 1;

// while (chute != numeroSecreto) {
//     chute = prompt('Escolha um número entre 1 e 10');
//         if(chute == numeroSecreto) {
//         alert(`Você acertou! O número secreto é ${numeroSecreto} com ${tentativas} tentativas`)
//     } else {
//         if(chute > numeroSecreto) {
//             alert(`O número secreto é menor que ${chute}`);
//         } else {
//             alert(`O número secreto é maior que ${chute}`);
//         }
//         tentativas ++;
//     }
// }

// Tentativas ++

//********** */
/*
 Exemplo: Questão 5: Contador 1
let contador = 1;

while (contador < 4) {
  console.log('Executando a iteração ' + contador);
  contador = contador + 1;
}

  while (contador < 4){ } começa o loop while. Ele continuará repetindo o bloco de código entre as chaves { } enquanto a condição contador < 4 for verdadeira.  
Essa condição significa que o loop continuará enquanto o valor da variável contador for menor que 4.
  O resultado final será a impressão das mensagens "Executando a iteração 1", "Executando a iteração 2" e "Executando a iteração 3" no console.
 O loop foi executado três vezes, e o valor final da variável contador é 4. Na quarta iteração, o valor de contador é 4. Neste momento, a condição contador < 4 se torna falsa, pois 4 não é menor que 4. O loop não executa mais o código dentro das chaves e termina.
*/

/* Questão 6:  Loop infinito


let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
}

let media = soma / qtdNumeros;
contador --;

console.log(media);

*/
