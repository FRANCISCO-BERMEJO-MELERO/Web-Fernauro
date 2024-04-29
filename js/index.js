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
    document.querySelectorAll('.contenido_seccion1').forEach(img => {
        observer.observe(img);
    });

    document.querySelectorAll('.container').forEach(img => {
        observer.observe(img);
    });
});


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

    // Observa elementos con la clase .container y .tercera_seccion
    document.querySelectorAll('.container.tercera_seccion').forEach(section => {
        observer.observe(section);
    });
});
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

    // Observa elementos con la clase .container y .cuarta_seccion
    document.querySelectorAll('.container.cuarta_seccion').forEach(section => {
        observer.observe(section);
    });
});

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

    // Observa elementos con la clase .header
    document.querySelectorAll('.header').forEach(section => {
        observer.observe(section);
    });
});
