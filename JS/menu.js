//Controlador del menu de hamburguesa para dispositivos móviles

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    //Verificación de que ambos elementos existen para evitar los errores de consolar 

    if(menuToggle && navLinks){
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');  
            navLinks.classList.toggle('active');
        });

        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            })
        })
    }
})