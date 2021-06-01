'use strict'
console.log('work');

function onAccident() {
    var sound = new Audio('sounds/car accident.mp3');
    sound.play();
}

function onHorn() {
    var sound = new Audio('sounds/horn1.mp3');
    sound.play();
}

function onHitBody() {
    var sound = new Audio('sounds/hit body.mp3');
    sound.play();
}