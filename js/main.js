const loveReasons = [
    "Mi lugar favorito es a tu lado",
    "Eres todo lo que siempre soñé",
    "Me haces sentir en casa",
    "Tu amor me llena el alma",
    "Eres mi razón de sonreír",
    "Tu sonrisa ilumina mi mundo",
    "Adoro la forma en que me cuidas y siempre estás ahí para mí",
    "Te admiro por lo fuerte que eres mi amor",
    "Eres increíblemente generoso y siempre piensas en los demás",
    "Cómo logras hacer que cada momento sea bonito con solo estar tú",
    "Tu apoyo incondicional siempre en todo lo que hago",
    "Me haces sentir segura y amada siempre",
    "Cada vez que estoy contigo, el tiempo se detiene",
    "Estoy orgullosísima de en quién te has convertido amor",
    "Me encanta cómo entiendes todo lo que siento sin necesidad de palabras",
    "Tus abrazos son mi lugar favorito en el mundo",
    "Me enamoro de ti más cada día por todo lo que eres y todo lo que haces mi vida"
];

let currentReasonIndex = 0; 

function showLoveReason() {
    const loveReasonElement = document.getElementById('love-reason');
    loveReasonElement.textContent = loveReasons[currentReasonIndex];

    currentReasonIndex = (currentReasonIndex + 1) % loveReasons.length;
}

let currentSlide = 0;

function updateSlidePosition() {
    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

let musicPlaying = false;
function toggleMusic() {
    const music = document.getElementById('background-music');
    const musicBtn = document.getElementById('music-btn');
    if (musicPlaying) {
        music.pause();
        musicBtn.textContent = 'Pon musiquita ♪ ༘⋆';
    } else {
        music.play();
        musicBtn.textContent = 'Calla musiquita (° × ° )';
    }
    musicPlaying = !musicPlaying;
}

function updateCountdown() {
    const targetDate = new Date("2025-11-07T00:00:00"); 
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `Faltan ${days} días, ${hours} h, ${minutes} min y ${seconds} s para nuestro aniversario<3`;
}

setInterval(updateCountdown, 1000);

function openLightbox(imgSrc) {
    document.getElementById('lightbox-img').src = imgSrc;
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

const images = document.querySelectorAll('.slider img');
images.forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
});

document.addEventListener('DOMContentLoaded', () => {
    updateSlidePosition();
});
