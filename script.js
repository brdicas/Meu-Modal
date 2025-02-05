document.addEventListener("DOMContentLoaded", function() {
    // Pega os elementos do DOM
    const modal = document.getElementById("myModal");
    const spanClosee = document.getElementsByClassName("closee")[0];

    // Verifica se está em dispositivo móvel
    if (window.innerWidth <= 768) {
        // Abre o modal automaticamente após 10 segundos
        setTimeout(function() {
            modal.style.display = "block";
            spanClosee.style.display = "block"; // Mostra o botão de fechar
        }, 10000); // 10000 milissegundos = 10 segundos
    }

    // Quando o usuário clica no "x", fecha o modal
    spanClosee.onclick = function() {
        modal.style.display = "none";
        spanClosee.style.display = "none"; // Esconde o botão de fechar
    }

    // Quando o usuário clica fora do modal, fecha o modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            spanClosee.style.display = "none"; // Esconde o botão de fechar
        }
    }
});
