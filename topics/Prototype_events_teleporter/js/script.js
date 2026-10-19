/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * define the paramaters of sprite
*/    let sprite;
let spriteX = 250
let spriteY = 200
let spriteSize = 50
let d = dist(mouseX, mouseY, spriteX, spriteY)
let rad = (sprite / 2)


function setup() {
    createCanvas(500, 400);

}

function draw() {

    //draw a little black circle
    background(220);
    ellipse(spriteX, spriteY, spriteSize);
    fill(0)
    noStroke();

    //change the cursor to a hand
    cursor(HAND)

    if (d <= rad) {


    }
}