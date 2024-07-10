

//Para que desplace hacía abajo según la opción
/*document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});*/

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Verificar si targetElement existe y tiene offsetTop
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        } else {
            console.error(`Elemento con ID ${targetId} no encontrado.`);
        }
    });
});


//Animación línea de tiempo
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!entry.target.classList.contains('visible')) {
                    entry.target.classList.add('visible');
                }
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
});


// Animación progress bar
/*document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    setTimeout(() => {
        progressBars.forEach(bar => {
            const percentage = bar.getAttribute('data-percentage');
            bar.style.width = `${percentage}%`;
        });
    }, 100); // Delay para la animación
});*/
document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress-bar');

    const animateProgressBar = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percentage = bar.getAttribute('data-percentage');
                bar.style.width = `${percentage}%`;
            } else {
                const bar = entry.target;
                bar.style.width = '0'; // Reinicia la barra cuando sale de la vista
            }
        });
    };

    const observerOptions = {
        root: null, // Observa la visibilidad en la ventana de visualización
        threshold: 0.1 // Activa cuando al menos el 10% del elemento es visible
    };

    const observer = new IntersectionObserver(animateProgressBar, observerOptions);

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});


/*function redirectToWhatsApp() {
    window.location.href = "https://api.whatsapp.com/send?phone=42159301"; // Reemplaza con tu número de WhatsApp
}

function makeCall() {
    window.location.href = 'tel:+50242159301'; // Reemplaza con el número al que deseas llamar
}

function sendEmail() {
    window.location.href = 'mailto:jvasquezg3@yahoo.com'; // Reemplaza con tu dirección de correo electrónico
}*/

//Opciones de contacto
function redirectToWhatsApp() {
    window.open('https://wa.me/42159301', '_blank'); // Reemplaza '1234567890' con tu número de WhatsApp
}

function makeCall() {
    window.open('tel:+50242159301'); // Reemplaza '+1234567890' con tu número de teléfono
}

function sendEmail() {
    window.open('mailto:jvasquezg3@yahoo.com'); // Reemplaza 'example@example.com' con tu dirección de correo electrónico
}


document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    // Mostrar u ocultar la flecha dependiendo del desplazamiento
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Desplazarse suavemente hacia arriba al hacer clic en la flecha
    scrollToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
