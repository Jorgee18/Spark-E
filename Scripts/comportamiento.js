document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento del icono
    var iconoFlecha = document.querySelector('.bi-arrow-left');
    
    // Agregar un evento de clic al icono
    iconoFlecha.addEventListener('click', function() {
    // Redirigir al usuario a la URL deseada
        window.location.href = 'menu.html';
    });
});