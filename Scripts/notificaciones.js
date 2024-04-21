document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.truncate-text');
    
    function updateTextLength() {
        elements.forEach(function(element) {
            var maxLengthDesktop = parseInt(element.getAttribute('data-max-length-desktop'));
            var maxLengthMobile = parseInt(element.getAttribute('data-max-length-mobile'));
            var maxLength = window.innerWidth >= 426 ? maxLengthDesktop : maxLengthMobile; // Cambiar 768 según el breakpoint que desees
            var text = element.textContent;
            if (text.length > maxLength) {
                element.textContent = text.substring(0, maxLength) + '...';
            }
        });
    }
    
    // Llamamos a la función para actualizar la longitud del texto cuando la página se carga
    updateTextLength();
    
    // Detectamos el cambio de tamaño de pantalla y actualizamos la longitud del texto
    window.addEventListener('resize', function() {
        updateTextLength();
    });
});

/*
Initialization for ES Users
import { Input, Ripple, initMDB } from "mdb-ui-kit";
initMDB({ Input, Ripple });*/