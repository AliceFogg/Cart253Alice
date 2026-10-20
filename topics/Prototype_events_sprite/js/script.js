/**
 * Catch the sprite 
 * Alice Fogg
 * 
 * Try to catch the sprite! careful, he's shy..
 */

"use strict";

/**
 * define the paramaters of sprite
*/    let sprite;
let spriteX = 250
let spriteY = 200
let spriteSize = 50
let rad = (spriteSize / 2)

//create 500 by 400 canvas 
function setup() {
    createCanvas(500, 400);

}


function draw() {

    //define distance of the cursor and the sprite 
    let d = dist(mouseX, mouseY, spriteX, spriteY)

    //Background colour
    background(220);
    //draw a little black circle
    ellipse(spriteX, spriteY, spriteSize);
    fill(0)
    noStroke();

    //change the cursor to a hand
    cursor(HAND)

    //if the distance of the mouse is less than or equal to the radius of the circle, 
    // then teleport the circle to a random X and Y coordinate 
    if (d <= rad) {
        spriteX = random(0, 400)
        spriteY = random(0, 400)

    }
}