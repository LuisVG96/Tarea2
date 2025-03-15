document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');
    
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = content.classList.contains('active');
            
            // Cerrar todos los contenidos
            document.querySelectorAll('.accordion-content').forEach(c => {
                c.classList.remove('active');
            });
            
            // Abrir el contenido si estaba cerrado
            if (!isActive) {
                content.classList.add('active');
            }
        });
    });
});