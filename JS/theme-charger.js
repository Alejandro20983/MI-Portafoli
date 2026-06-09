// ==========================================================================
// 🔄 CONTROLADOR DE TEMAS DINÁMICOS (CAMBIO POR DOBLE CLIC)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Lista de todos los temas configurados en las variables del CSS
    const themes = ['theme-default', 'theme-red', 'theme-purple', 'theme-black', 'theme-white'];
    
    // 1. Recuperar el último tema guardado en el navegador para que no se resetee al cambiar de pestaña
    let currentThemeIndex = localStorage.getItem('portfolio-theme-index');
    if (currentThemeIndex === null) {
        currentThemeIndex = 0; // Por defecto el tema oscuro premium ('theme-default')
    } else {
        currentThemeIndex = parseInt(currentThemeIndex, 10);
    }

    // 2. Función encargada de actualizar las clases del Body de forma limpia
    const applyTheme = (index) => {
        // Removemos todas las clases de temas existentes para evitar que se pisen entre sí
        themes.forEach(theme => document.body.classList.remove(theme));
        
        // Si el índice es mayor a 0, aplicamos la clase correspondiente (red, purple, black, white)
        if (index > 0) {
            document.body.classList.add(themes[index]);
        }
        
        // Guardamos el índice actual en el almacenamiento local
        localStorage.setItem('portfolio-theme-index', index);
    };

    // 3. Aplicar el tema guardado inmediatamente en cuanto se monte el DOM
    applyTheme(currentThemeIndex);

    // 4. Escuchar el evento de doble clic en cualquier parte de la pantalla
    document.addEventListener('dblclick', () => {
        // Avanzar de forma cíclica por la lista de temas (del 0 al 4 y vuelve a empezar)
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        
        // Ejecutar el cambio visual en el documento
        applyTheme(currentThemeIndex);
    });
});