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

const selector_regiones = document.querySelector("#lista-regiones")

fetch('../Database/comunas-regiones.json')
    .then(respuesta => respuesta.json())
    .then(regiones => {
        let cont = 1;
        regiones.forEach( region => {
            let option = document.createElement('option');
            option.value = region.region;
            option.innerHTML += `${region.region}`;
            selector_regiones.appendChild(option);
            cont += 1;
        })
        
    })
    .catch(error => {
        console.error('Error:', error);
    });


const selector_comunas = document.querySelector("#lista-comunas");
selector_regiones.addEventListener('change', function(event) {
    let opcion_default = document.querySelector("#comuna-default");
    selector_comunas.innerHTML = '';
    selector_comunas.appendChild(opcion_default);
    selector_comunas.value = "";

    fetch('../Database/comunas-regiones.json')
        .then(respuesta => respuesta.json())
        .then(regiones => {
            let region_escogida = selector_regiones.value;
            let cont = 1;
            regiones.forEach( region => {
                if(region.region === region_escogida){
                    region.comunas.forEach( comuna => {
                        let option = document.createElement('option');
                        option.value = comuna;
                        option.innerHTML += `${comuna}`;
                        selector_comunas.appendChild(option);
                        cont += 1;
                    })
                }
            })
        })
        .catch(error => {
            console.error('Error:', error);
        });
});