document.addEventListener('DOMContentLoaded', function () {
    // Inicialización del slider principal
    const swiper1 = new Swiper('.mySwiper-1', {
        loop: true, // Para que el slider sea infinito
        slidesPerView: 1, // Mostrar una sola diapositiva a la vez
        spaceBetween: 10, // Espacio entre las diapositivas
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-button-pagination',
            clickable: true,
        },
    });

    // Inicialización de los sliders dentro de las pestañas (Pizza, Pastas, Ensaladas)
    const swiper2 = new Swiper('#swiper1', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiper3 = new Swiper('#swiper2', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiper4 = new Swiper('#swiper3', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
