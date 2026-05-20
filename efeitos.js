document.addEventListener('DOMContentLoaded', function() {
    // Inicializa a biblioteca de animações AOS
    AOS.init({
        duration: 1500, // Tempo da animação (1 segundo)
        once: true,     // Executa a animação apenas uma vez ao rolar a página
        offset: 100     // Começa a animar 100px antes do elemento aparecer na tela
    });
});