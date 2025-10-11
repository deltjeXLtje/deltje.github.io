document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.clickable-img');
    const overlay = document.getElementById('overlay');
    const overlayImg = overlay.querySelector('img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            overlayImg.src = img.src;
            overlay.style.display = 'flex';
        });
    });

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
});