/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//Set parameters for sprites 1,2, and 3
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

//create a 500 x 400 canvas, and set sprites x and y values to be randomized
function setup() {
    createCanvas(500, 400);
    sprite.x = random(0, width);
    sprite.y = random(0, height);
    sprite2.x = random(0, width);
    sprite2.y = random(0, height);
    sprite3.x = random(0, width);
    sprite3.y = random(0, height);
}

//Draw sprites at random x and y values 
function draw() {
    background(220);
    drawSprite(sprite);
    drawSprite(sprite2);
    drawSprite(sprite3)

    // check if the mouse is inside a sprite
    checkMouse(sprite);
    checkMouse(sprite2);
    checkMouse(sprite3);
}

//Drawsprite function to draw the three sprites 
function drawSprite(anySprite) {
    noStroke();
    fill(0);
    ellipse(anySprite.x, anySprite.y, anySprite.size);
}

//check if the mouse is inside a sprite, if it is, teleport the sprite to a new random location
function checkMouse(anySprite) {

    let d = dist(mouseX, mouseY, anySprite.x, anySprite.y)
    if (d <= anySprite.size / 2) {
        anySprite.x = random(0, width)
        anySprite.y = random(0, height)
    }
}