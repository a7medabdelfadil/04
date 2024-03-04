const images = [
    '/img/imgs2/pexels-ahmed-aqtai-2233416.webp',
    '/img/imgs2/background.webp',
    '/img/imgs2/dollars.webp',
    '/img/imgs2/omer-yildiz-IHFSvlzf9fI-unsplash.webp',
    '/img/imgs2/pexels-haley-black-2087387.webp',
    '/img/imgs2/pexels-irina-iriser-1366957.webp',
    '/img/imgs2/pexels-kedar-bhave-2427797.webp',
    '/img/imgs2/pexels-michael-burrows-7129784.webp',
    '/img/imgs2/pexels-stein-egil-liland-3374210.webp',

];

let currentImage = 0;

let body = document.body;
let img = document.getElementById('img');
let leftRow = document.getElementById('leftRow');
let rightRow = document.getElementById('rightRow');

function updateImage() {
    body.style.backgroundImage = `url(${images[currentImage]})`;
    img.src = `${images[currentImage]}`;
    img.loading = 'lazy';
}

updateImage();

if (currentImage === 0) {
    leftRow.classList.add('hide');
}

rightRow.addEventListener('click', () => {
    if (currentImage < images.length - 1) {
        currentImage++;
        leftRow.classList.remove('hide');
    } else {
        rightRow.classList.add('hide');
    }
    updateImage();

    if (currentImage === images.length - 1) {
        rightRow.classList.add('hide');
    }
});

leftRow.addEventListener('click', () => {
    if (currentImage > 0) {
        currentImage--;
        rightRow.classList.remove('hide');
    } else {
        leftRow.classList.add('hide');
    }
    updateImage();

    if (currentImage === 0) {
        leftRow.classList.add('hide');
    }
});
