/*
    -------------------------------------------
    Arquivo JavaScript para Doce Verão Açaíteria Prime
    -------------------------------------------
*/

// Inicializa o carrossel do Bootstrap, se necessário.
// A inicialização automática com data-bs-ride="carousel" já é suficiente,
// mas é uma boa prática ter um arquivo .js caso novas funcionalidades sejam adicionadas.

document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de como inicializar o carrossel via JavaScript (opcional)
    const carouselElement = document.getElementById('carouselExample');
    if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
            interval: 4000, // Tempo entre as transições
            pause: 'hover'   // Pausa o carrossel ao passar o mouse
        });
    }

    // Exemplo de como adicionar um log no console
    console.log("Açaíteria Prime: página carregada com sucesso!");
});