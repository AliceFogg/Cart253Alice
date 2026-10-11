/**
 * Button Game
 * Alice Fogg
 * 
 * 
 */

"use strict";


//
let distance = dist(width / 2, height / 2, mouseX, mouseY)

//radius of centre circle + radius of the mouse circle
let border = 50 + 25

function setup() {
    createCanvas(400, 400);
}

//draw a circle in the centre of the screen
function draw() {
    background(220);
    fill(144, 238, 144);
    circle(200, 200, 100);

    //make a black circle at the mouse position
    fill(0)
    circle(mouseX, mouseY, 50);
}

if (distance > border) {


}