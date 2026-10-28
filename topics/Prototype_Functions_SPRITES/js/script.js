/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let sprite = {
    x: 0,
    y: 0,
    size: 50
}

let sprite2 = {
    x: 0,
    y: 0,
    size: 30
}

let sprite3 = {
    x: 0,
    y: 0,
    size: 35
}

function setup() {
    createCanvas(500, 400);
    sprite.x = random(0, width);
    sprite.y = random(0, height);
    sprite2.x = random(0, width);
    sprite2.y = random(0, height);
    sprite3.x = random(0, width);
    sprite3.y = random(0, height);
}

function draw() {
    background(220);
    drawSprite(sprite);
    drawSprite(sprite2);
    drawSprite(sprite3)
    checkMouse(sprite);
    checkMouse(sprite2);
    checkMouse(sprite3);
}

function drawSprite(anySprite) {
    noStroke();
    fill(0);
    ellipse(anySprite.x, anySprite.y, anySprite.size);
}

function checkMouse(anySprite) {

    let d = dist(mouseX, mouseY, anySprite.x, anySprite.y)
    if (d <= anySprite.size / 2) {
        anySprite.x = random(0, width)
        anySprite.y = random(0, height)
    }
}