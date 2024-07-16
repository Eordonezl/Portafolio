// validacion.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formcontato__form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        // Limpiar mensajes de error
        clearErrors();

        // Validar campos
        let valid = true;

        const nombre = form.nombre.value.trim();
        const email = form.email.value.trim();
        const asunto = form.asunto.value.trim();
        const mensaje = form.mensaje.value.trim();

        if (nombre === '') {
            showError('nombre', 'El nombre es obligatorio.');
            valid = false;
        }

        if (email === '') {
            showError('email', 'El correo electrónico es obligatorio.');
            valid = false;
        } else if (!validateEmail(email)) {
            showError('email', 'El correo electrónico no es válido.');
            valid = false;
        }

        if (asunto === '') {
            showError('asunto', 'El asunto es obligatorio.');
            valid = false;
        }

        if (mensaje === '') {
            showError('mensaje', 'El mensaje es obligatorio.');
            valid = false;
        }

        // Si todos los campos son válidos, enviar el formulario
        if (valid) {
            alert('Formulario enviado con éxito.');
            form.submit(); // Envía el formulario
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(field, message) {
        const inputField = document.querySelector(`[name="${field}"]`);
        const errorSpan = document.createElement('span');
        errorSpan.classList.add('error');
        errorSpan.textContent = message;
        inputField.parentElement.appendChild(errorSpan);
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.remove());
    }
});