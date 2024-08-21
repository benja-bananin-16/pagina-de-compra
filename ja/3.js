let currentSlide = 0;
let autoSlideInterval;

function moveCarousel(step) {
    const items = document.querySelectorAll('.carousel-item');
    items[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + step + items.length) % items.length;
    items[currentSlide].classList.add('active');
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        moveCarousel(1); // Mover a la siguiente imagen cada 5 segundos
    }, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function reservar() {
    const fecha = document.getElementById('fecha').value;
    if (fecha) {
        alert(`Reserva confirmada para la fecha: ${fecha}`);
    } else {
        alert('Por favor, selecciona una fecha.');
    }
}

// Inicializar la primera imagen como activa y comenzar el carrusel automático
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.carousel-item').classList.add('active');
    startAutoSlide(); // Iniciar el carrusel automático
});

// Opcional: detener el carrusel automático al pasar con los botones manuales
document.querySelector('.prev').addEventListener('click', () => {
    stopAutoSlide();
    moveCarousel(-1);
    startAutoSlide();
});

document.querySelector('.next').addEventListener('click', () => {
    stopAutoSlide();
    moveCarousel(1);
    startAutoSlide();
});
