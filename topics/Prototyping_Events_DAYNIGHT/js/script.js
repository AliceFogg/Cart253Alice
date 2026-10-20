/**
 * DAY N NIGHT
 * Alice Fogg
 * 
 * /

"use strict";

/**
 * Create a 400 by 400 canvas + sunX and sunY variables
*/

let sunX = 200;
let sunY = 100;

//set up the rgb values for the background
let backgr = {
    r: 173,
    g: 216,
    b: 230
};

//create 400 by 400 canvas 
function setup() {
    createCanvas(400, 400);
}


/**
 * Draw a sun on a blue sky
*/
function draw() {
    background(backgr.r, backgr.g, backgr.b)
    fill(255, 219, 88);
    ellipse(sunX, sunY, 100);

    //if the mouse is pressed, move the sun down by 3, and subtract 1.5 from the red, blue, 
    // and green values of the background colours
    if (mouseIsPressed) {

        sunY = (sunY + 3)

        backgr.r = backgr.r - 1.5
        backgr.b = backgr.b - 1.5
        backgr.g = backgr.g - 1.5
    }

    //if the sun leaves the bottom of the canvas, have it come back around and reset the background
    if (sunY > 450) {
        sunY = -50
        backgr.r = 173
        backgr.g = 216
        backgr.b = 230
    }


}