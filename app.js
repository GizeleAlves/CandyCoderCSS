const botaoTeste = document.getElementById("teste") //selecionar o botão pelo id
const botaoVoltar = document.getElementById("voltar");
const botaoProximo = document.getElementById("proximo");
const resposta = document.getElementById("respostaCorreta");

function addCSS (){
    const textAreaElemento = document.querySelector('textarea')
    const css = textAreaElemento.value
    if(css.trim() === ''){
        alert("Ops! Tente digitar um comando CSS no editor primeiro!");
    }else{
    const frente = document.querySelector('#frente') 
    frente.style.cssText = css
    console.log(frente)}
}


botaoTeste.addEventListener('click', addCSS)

botaoVoltar.addEventListener("click", function() {
    window.history.back();
});
