// ==========================================================================
// ⌨️ EFECTO MÁQUINA DE ESCRIBIR EN LA HOME
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typewriter-text');
    
    // Lista de frases que quieres que se vayan escribiendo en bucle
    const phrases = [
        "Desarrollador de Software.",
        "Programador Full-Stack.",
        "Desarrollador Angular.",
        "Diseñador de Software."
    ];

    // Variables de control de tiempos (en milisegundos)
    let phraseIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100; // Velocidad al escribir

    if (textElement) {
        const typeEffect = () => {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                // Modo borrado: quitamos una letra
                textElement.textContent = currentPhrase.substring(0, characterIndex - 1);
                characterIndex--;
                typingSpeed = 50; // El borrado es un poco más rápido
            } else {
                // Modo escritura: añadimos una letra
                textElement.textContent = currentPhrase.substring(0, characterIndex + 1);
                characterIndex++;
                typingSpeed = 100; // Velocidad normal de escritura
            }

            // Si ha terminado de escribir la frase completa
            if (!isDeleting && characterIndex === currentPhrase.length) {
                typingSpeed = 2000; // Pausa larga de 2 segundos al terminar la frase
                isDeleting = true;
            } 
            // Si ha terminado de borrar por completo la frase
            else if (isDeleting && characterIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length; // Pasamos a la siguiente frase
                typingSpeed = 500; // Pausa corta antes de empezar a escribir otra vez
            }

            // Volver a llamar a la función con el tiempo dinámico calculado
            setTimeout(typeEffect, typingSpeed);
        };

        // Arrancamos el bucle por primera vez
        setTimeout(typeEffect, 500);
    }
});