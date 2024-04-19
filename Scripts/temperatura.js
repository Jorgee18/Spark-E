document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento del icono
    var iconoFlecha = document.querySelector('.bi-arrow-left');
    
    // Agregar un evento de clic al icono
    iconoFlecha.addEventListener('click', function() {
    // Redirigir al usuario a la URL deseada
        window.location.href = 'menu.html';
    });

    // Agregar evento de cambio al checkbox
    document.getElementById('toggleCheckbox').addEventListener('change', function() {
        if (this.checked) {
            // Si el checkbox está marcado, redirige a temperaturaFahrenheit.html
            window.location.href = 'temperaturaFahrenheit.html';
        }
        else {
            window.location.href = 'temperaturaCelsius.html';
        }
    });
});