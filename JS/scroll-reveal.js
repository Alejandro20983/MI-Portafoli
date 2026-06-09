// ==========================================================================
// ✨ EFECTO DE REVELADO AL HACER SCROLL (SCROLL REVEAL)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Capturar todos los elementos que tengan la clase 'reveal'
    const elementsToReveal = document.querySelectorAll('.reveal');

    // Configuración del observador
    const observerOptions = {
        root: null,         // Usa el viewport del navegador
        rootMargin: '0px',  // Sin márgenes extra
        threshold: 0.15     // Se activa cuando el 15% del elemento es visible
    };

    if (elementsToReveal.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Si el elemento entra en la pantalla
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Opcional: dejamos de observar el elemento si solo queremos que se anime una vez
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Registrar todos los elementos en el observador
        elementsToReveal.forEach(element => revealObserver.observe(element));
    }
});