// Este é o código na página de "Fim de Jogo"
document.addEventListener('DOMContentLoaded', function() {
    let pontos = document.getElementById("pontos");

    // Recupera a pontuação armazenada no localStorage
    let pontuacao = localStorage.getItem("pontuacao");

    // Se a pontuação existir, exibe ela
    if (pontuacao) {
        pontos.textContent = `${pontuacao}`;
    } else {
        pontos.textContent = `0`;  // Se não houver pontuação, exibe 0
    }
});
