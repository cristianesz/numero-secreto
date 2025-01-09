alert ('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao n.s
while (chute != numeroSecreto){
   chute = prompt (`Escolha um numero entre 1 e ${numeroMaximo}`);

   //se o chute for igual ao numero secreto
   if (chute == numeroSecreto ) {
    break;    
   } else {
    if (chute > numeroSecreto) {
        alert (`o numero é menor que ${chute}`);
    } else {
        alert (`o numero secreto é maior que ${chute}`);
    }
    
     tentativas++;
   }
 let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
 //alert(`Isso aí! Você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
   
}

