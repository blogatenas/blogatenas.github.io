document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    var closeBtn = document.getElementById('close-popup');
    var popupVideo = document.getElementById('popup-video');

    // Mostrar el popup después de 2 segundos
    setTimeout(function() {
        popup.style.display = 'block';
        popupVideo.play();  // Reproducir el video automáticamente
    }, 2000);

    // Cerrar el popup al hacer clic en el botón de cerrar
    closeBtn.onclick = function() {
        popup.style.display = 'none';
    }

    // Cerrar el popup al hacer clic fuera del contenido del popup
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
});
