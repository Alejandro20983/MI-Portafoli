// ==========================================================================
// 💼 FILTRADO DINÁMICO DE PROYECTOS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.btn-filter');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // 1. Cambiar el estado activo de los botones
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // 2. Obtener la categoría seleccionada
                const selectedFilter = button.getAttribute('data-filter');

                // 3. Filtrar las tarjetas
                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');

                    if (selectedFilter === 'all' || cardCategory === selectedFilter) {
                        card.classList.remove('is-hidden');
                    } else {
                        card.classList.add('is-hidden');
                    }
                });
            });
        });
    }
});