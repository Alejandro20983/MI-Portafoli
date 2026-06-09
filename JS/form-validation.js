// ==========================================================================
// 📨 VALIDACIÓN INTERACTIVA Y ENVÍO REAL A WHATSAPP
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('portfolio-form');
    const btnSubmit = document.getElementById('btn-submit');
    const successMsg = document.getElementById('form-success');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Detener el envío por defecto para validar primero

            // 1. Capturar los elementos e inputs
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const errorName = document.getElementById('error-name');
            const errorEmail = document.getElementById('error-email');
            const errorMessageField = document.getElementById('error-message-field');

            // Reiniciar estados previos
            let isValid = true;
            [nameInput, emailInput, messageInput].forEach(input => input.classList.remove('invalid'));
            [errorName, errorEmail, errorMessageField].forEach(span => span.textContent = '');
            successMsg.classList.remove('show');

            // 2. Validación del campo Nombre
            if (nameInput.value.trim() === '') {
                nameInput.classList.add('invalid');
                errorName.textContent = 'Por favor, introduce tu nombre.';
                isValid = false;
            }

            // 3. Validación del campo Correo (Usando una Expresión Regular limpia)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                emailInput.classList.add('invalid');
                errorEmail.textContent = 'El correo electrónico es obligatorio.';
                isValid = false;
            } else if (!emailRegex.test(emailInput.value.trim())) {
                emailInput.classList.add('invalid');
                errorEmail.textContent = 'El formato del correo no es válido (ejemplo: usuario@dominio.com).';
                isValid = false;
            }

            // 4. Validación del campo Mensaje
            if (messageInput.value.trim() === '') {
                messageInput.classList.add('invalid');
                errorMessageField.textContent = 'El mensaje no puede estar vacío.';
                isValid = false;
            }

            // 5. 🚀 ENVÍO REAL A WHATSAPP
            if (isValid) {
                // Cambiar visualmente el botón a estado "Cargando..."
                const originalText = btnSubmit.innerHTML;
                btnSubmit.disabled = true;
                btnSubmit.innerHTML = '<span>⏳ Abriendo WhatsApp...</span>';

                // 📞 SUSTITUYE ESTE NÚMERO POR EL TUYO REAL
                // Importante: Mantén el '34' (prefijo de España) y añade tu número sin espacios
                const telefono = "34600534823"; 

                // Capturar los valores limpios
                const nombre = nameInput.value.trim();
                const email = emailInput.value.trim();
                const mensaje = messageInput.value.trim();

                // 📝 Redactar el texto codificando los espacios y saltos de línea (%0A)
                const textoMensaje = `¡Hola Alejandro! %0A%0A` +
                                     `Mi nombre es: *${nombre}* %0A` +
                                     `Mi correo: *${email}* %0A%0A` +
                                     `*Mensaje:* %0A${mensaje}`;

                // Construir la URL oficial de la API de WhatsApp
                const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefono}&text=${textoMensaje}`;

                // Abrir en una nueva pestaña
                window.open(urlWhatsApp, '_blank');

                // Mostrar el mensaje de éxito en tu sitio web
                successMsg.textContent = '¡Perfecto! Se ha preparado tu mensaje para WhatsApp.';
                successMsg.classList.add('show');

                // Resetear el formulario e inputs de la pantalla
                form.reset();

                // Restaurar botón original por si quieren enviar otro mensaje
                btnSubmit.disabled = false;
                btnSubmit.innerHTML = originalText;
            }
        });
    }
});