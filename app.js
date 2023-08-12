const botaoTeste = document.getElementById("teste") //selecionar o botão pelo id

function addCSS (){
    const textAreaElemento = document.querySelector('textarea')
    const css = textAreaElemento.value
    const frente = document.querySelector('#frente') 
    frente.style.cssText = css
    console.log(frente)
}

botaoTeste.addEventListener('click', addCSS)

const botaoVoltar = document.getElementById("voltar");

botaoVoltar.addEventListener("click", function() {
    window.history.back();
});
