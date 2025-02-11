let images = [];
let currentIndex = 0;
let interval = 750; // each image on screen for 0.75 sec
let lastImageTime = 0;

function preload() {
    loadJSON("images.json", data => {
        images = data.images.map(filename => loadImage(`Artifacts/${filename}`));
    });
}

function setup() {
    createCanvas(800, 600);
    imageMode(CENTER);
    shuffle(images, true);
    lastImageTime = millis(); //millis = miliseconds passed, used to reset image time
}

function draw() {
    background(0);

    // continuous loop of images
    if (millis() - lastImageTime > interval) {
        currentIndex = (currentIndex + 1) % images.length;
        lastImageTime = millis(); 
    }

    // display current image & size
    if (images[currentIndex]) {
        image(images[currentIndex], width / 2, height / 2, width, height);
    }
}
