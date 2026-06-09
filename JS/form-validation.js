// ==========================================================================
// 📨 VALIDACIÓN INTERACTIVA DEL FORMULARIO DE CONTACTO
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

            // 5. Si todo está perfecto, simulamos el envío interactivo
            if (isValid) {
                // Cambiar visualmente el botón a estado "Cargando..."
                const originalText = btnSubmit.innerHTML;
                btnSubmit.disabled = true;
                btnSubmit.innerHTML = '<span>⏳ Enviando mensaje...</span>';

                // Simulamos una petición de red con un retraso de 1.5 segundos
                setTimeout(() => {
                    // Mostrar mensaje de éxito
                    successMsg.textContent = '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.';
                    successMsg.classList.add('show');

                    // Resetear el formulario e inputs
                    form.reset();

                    // Restaurar botón original
                    btnSubmit.disabled = false;
                    btnSubmit.innerHTML = originalText;
                }, 1500);
            }
        });
    }
});