document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    });

    // Observa imágenes dentro de .contenido_seccion1
    document.querySelectorAll('.titulo').forEach(img => {
        observer.observe(img);
    });

    document.querySelectorAll('.item1').forEach(img => {
        observer.observe(img);
    });
});