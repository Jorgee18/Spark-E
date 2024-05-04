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

//Selector de regiones y comunas
//Regiones
const selector_regiones = document.querySelector("#lista-regiones")

fetch('../../Backend/Database/comunas-regiones.json')
    .then(respuesta => respuesta.json())
    .then(regiones => {
        regiones.forEach( region => {
            let option = document.createElement('option');
            option.innerHTML += `${region.region}`;
            selector_regiones.appendChild(option);
        })
        
    })
    .catch(error => {
        console.error('Error:', error);
    });

//Comunas
const selector_comunas = document.querySelector("#lista-comunas");
selector_regiones.addEventListener('change', function(event) {
    let opcion_default = document.querySelector("#comuna-default");
    selector_comunas.innerHTML = '';
    selector_comunas.appendChild(opcion_default);
    selector_comunas.value = "";

    fetch('../../Backend/Database/comunas-regiones.json')
        .then(respuesta => respuesta.json())
        .then(regiones => {
            let region_escogida = event.target.value;
            regiones.forEach( region => {
                if(region.region === region_escogida){
                    region.comunas.forEach( comuna => {
                        let option = document.createElement('option');
                        option.innerHTML += `${comuna}`;
                        selector_comunas.appendChild(option);
                    })
                }
            })
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

//Validador del confirmar la contraseña 
const newpassword = document.querySelector('[name="newpassword"]');
const confirmpassword = document.querySelector('[name="confirmpassword"]');
validar_password = function(event) {
    confirmpassword.pattern = `^${event.target.value}$`;
}

newpassword.addEventListener('change', validar_password);
newpassword.addEventListener('blur', validar_password);