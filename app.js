const botaoTeste = document.getElementById("teste");
const botaoVoltar = document.getElementById("voltar");
const botaoProximo = document.getElementById("proximo");
const resposta = document.getElementById("respostaCorreta");
const resposta2 = document.getElementById("respostaCorreta2");
const resposta3 = document.getElementById("respostaCorreta3");
const resposta4 = document.getElementById("respostaCorreta4");
const resposta5 = document.getElementById("respostaCorreta5");
const resposta6 = document.getElementById("respostaCorreta6");


botaoProximo.disabled = true;

function addCSS() {
    const textAreaElemento = document.querySelector('textarea');
    const css = textAreaElemento.value.trim(); // Remover espaçamento em branco

    if (css === '') {
        alert("Ops! Tente digitar um comando CSS no editor primeiro!");
    } else {
        const frente = document.querySelector('#frente');
        frente.style.cssText = css;
        console.log(frente);

        //css = css.replace(/\n/g, '');
        // Comparar o valor do textarea com a respostaCorreta
        if (css.replace(/\n/g, '') === resposta.textContent.trim()||css.replace(/\n/g, '') === resposta2.textContent.trim()||css.replace(/\n/g, '') === resposta3.textContent.trim()||css.replace(/\n/g, '') === resposta4.textContent.trim()||css.replace(/\n/g, '') === resposta5.textContent.trim()||css.replace(/\n/g, '') === resposta6.textContent.trim()) {
            alert("Parabéns, você conseguiu! Para ir para o próximo nível, clique na seta de ''próximo''!");
            botaoProximo.disabled = false;
        } else {
            alert("Ops, você errou! Tente novamente!");
        }
    }
}

botaoTeste.addEventListener('click', addCSS);

botaoVoltar.addEventListener("click", function () {
    window.history.back();
});
