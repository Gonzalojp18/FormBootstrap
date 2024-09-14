export const formValidation = () => {
    const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const emailInput = document.getElementById('email');
    const dateOfBirthInput = document.getElementById('dateOfBirth');
    const countryInput = document.getElementById('country');
    const allInputs = [...document.getElementsByTagName('input')];
    
    // Añadir eventos a los inputs
    allInputs.forEach(input => {
        input.addEventListener('input', function () {
            clearError(input); // Limpia el error cuando el usuario empieza a corregir
        });
    });

    // Función de validación al enviar el formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Limpiar mensajes de error
        clearAllErrors();

        let isValid = true;

        // Validación del nombre
        if (!validateText(nameInput, 2, 50)) {
            showError(nameInput, 'Name must be between 2 and 50 characters and contain only letters.');
            isValid = false;
        }

        // Validación del apellido
        if (!validateText(surnameInput, 2, 50)) {
            showError(surnameInput, 'Last Name must be between 2 and 50 characters and contain only letters.');
            isValid = false;
        }

        // Validación del email
        if (!validateEmail(emailInput)) {
            showError(emailInput, 'Please enter a valid email address.');
            isValid = false;
        }

        // Validación de la fecha de nacimiento
        if (!validateDate(dateOfBirthInput)) {
            showError(dateOfBirthInput, 'Please enter a valid date of birth.');
            isValid = false;
        }

        // Validación del país
        if (!validateText(countryInput, 2, 50)) {
            showError(countryInput, 'Country must be between 2 and 50 characters and contain only letters.');
            isValid = false;
        }

        if (isValid) {
            alert('Your data has been successfully submitted.');
            // Vacía todos los inputs al "enviar" los datos
            allInputs.forEach(input => input.value = ''); 
        }
    });



}

function validateText(input, minLength, maxLength) {
    const value = input.value.trim();
    const pattern = /^[A-Za-z\s]+$/;
    return value.length >= minLength && value.length <= maxLength && pattern.test(value);
}

function validateEmail(input) {
    const value = input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
}

function validateDate(input) {
    const value = input.value.trim();

    if (value === '') return false;

    const today = new Date();
    const inputDate = new Date(value);

    return inputDate <= today;
}

// Mostrar error con clases de bootstrap
function showError(input, message) {
    // Esto solo agrega mensaje de error solo si no hay uno. Es decir, es para que no se acumulen
    if (!input.parentElement.querySelector('.text-danger')) {
        const errorElement = document.createElement('div');
        errorElement.className = 'text-danger';
        errorElement.innerText = message;
        input.parentElement.appendChild(errorElement);
        input.classList.add('is-invalid');
    }
}

function clearError(input) {
    const errorElement = input.parentElement.querySelector('.text-danger');
    if (errorElement) {
        errorElement.remove();
        input.classList.remove('is-invalid');
    }
}

function clearAllErrors() {
    const errors = document.querySelectorAll('.text-danger');
    errors.forEach(error => error.remove());
    const inputs = document.querySelectorAll('.is-invalid');
    inputs.forEach(input => input.classList.remove('is-invalid'));
}