const images = [
    '/img/pexels-ahmed-aqtai-2233416.jpg',
    '/img/background.jpg',
    '/img/dollars.jpg',
    '/img/omer-yildiz-IHFSvlzf9fI-unsplash.jpg',
    '/img/pexels-haley-black-2087387.jpg',
    '/img/pexels-irina-iriser-1366957.jpg',
    '/img/pexels-kedar-bhave-2427797.jpg',
    '/img/pexels-michael-burrows-7129784.jpg',
    '/img/pexels-stein-egil-liland-3374210.jpg'
];

let currentImage = 0;

let body = document.body;
let img = document.getElementById('img');
let leftRow = document.getElementById('leftRow');
let rightRow = document.getElementById('rightRow');

function updateImage() {
    body.style.backgroundImage = `url(${images[currentImage]})`;
    img.src = `${images[currentImage]}`;
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
