(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            let is_valid = true;

            //Chequeo del FrontEnd
            if (form.checkValidity() == false) 
                is_valid = false;
            else{
                //Chequeo del BackEnd
                if(checkValidityBackend(form,"iniciar-sesion") == false){
                    is_valid = false;
                }
            }

            
            if ( is_valid == true) {
                //Guardar en la base de datos (actualmente json)
                const datos = new FormData(event.target);
                const datosJson = JSON.stringify(Object.fromEntries(datos.entries()));
                //Guardar los datos en archivo json
                //window.location.href = "Spark-E/Paginas/menu.html";
            }
            else{
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        })
    })
})()

//Función a completar en próximas entregas
function checkValidityBackend(form, name_form) {
    return true;
}
