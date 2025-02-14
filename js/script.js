document.addEventListener("DOMContentLoaded", function() {
    const photoContainers = document.querySelectorAll('.photo-container');
    const closeBtns = document.querySelectorAll('.close-btn');

    // Abrir modal al hacer clic en una foto
    photoContainers.forEach(container => {
        container.addEventListener('click', () => {
            const modalId = container.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'flex';
        });
    });

    // Cerrar modal al hacer clic en el botón de cerrar
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            modal.style.display = 'none';
        });
    });

    // Cerrar modal al hacer clic fuera del contenido
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
});