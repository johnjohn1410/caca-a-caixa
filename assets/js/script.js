let contador = document.getElementById("caixas-encontradas")
let pontos = document.getElementById("pontos")
let timerCount = 30
let count = 0
let tempo = document.getElementById("timer")
let caixa = document.getElementById("caixa")


const timer = setInterval(function() {
    timerCount--
    tempo.textContent = timerCount
    
    if (timerCount == 0) {
        clearInterval(timer)

        localStorage.setItem("pontuacao",count)
        window.location.replace("../../caca-a-caixa/Fim-de-jogo.html")
    }
    pontos.textContent = count

}, 1000)

function moverCaixa() {
    let largura = window.innerWidth - 100;
    let altura = window.innerHeight - 100;

    let x = Math.floor(Math.random() * largura);
    let y = Math.floor(Math.random() * altura);

    caixa.style.left = `${x}px`;
    caixa.style.top = `${y}px`;
}



//aumentar contador ao clicar na caixa
caixa.addEventListener("click",function(){
    count++
    contador.textContent = count

    moverCaixa()
})

function salvar (count){
    localStorage.setItem("pontuacao", stringify(count));

    window.location.href = "../../caca-a-caixa/Fim-de-jogo.html"
}

salvar();






