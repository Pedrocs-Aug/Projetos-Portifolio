
const btnAvancar = document.getElementById("btn-avancar");
const btnReturn = document.getElementById("btn-voltar")
const cartoes = document.querySelectorAll(".cartao");
let contBtnAvancar = 0;
let contBtnReturn = 0;

btnAvancar.addEventListener("click", function(){
    if (contBtnAvancar === cartoes.length -1) {contBtnAvancar = (contBtnAvancar-cartoes.length)};

    const cartaoSelecoionado = document.querySelector(".selecionado");
    cartaoSelecoionado.classList.remove("selecionado");
     
    contBtnAvancar++; 
    cartoes[contBtnAvancar].classList.add("selecionado");
    console.log(cartoes);
});

btnReturn.addEventListener("click", function(){

    if (contBtnReturn === 0) return

    const cartaoSelecoionado = document.querySelector(".selecionado");
    cartaoSelecoionado.classList.remove("selecionado");

    contBtnReturn--;
    cartoes[contBtnReturn].classList.add("selecionado");
    console.log(cartoes);
});

