// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

const newpassword = document.querySelector('[name="newpassword"]');
const confirmpassword = document.querySelector('[name="confirmpassword"]');
validar_password = function(event) {
    confirmpassword.pattern = `^${event.target.value}$`;
}

newpassword.addEventListener('change', validar_password);
newpassword.addEventListener('blur', validar_password);