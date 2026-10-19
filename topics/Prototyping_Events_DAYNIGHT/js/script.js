/**
 * DAY N NIGHT
 * Alice Fogg
 * 
 * /

"use strict";

/**
 * Create a 400 by 400 canvas + sunX and sunY variables
*/

let sunX = 200
let sunY = 100



function setup() {
    createCanvas(400, 400);
}


/**
 * Draw a sun on a blue sky
*/
function draw() {

    if (sunX > width || sunX < 0) {
        background = (0, 0, 139);
    } else {
        background(173, 216, 230);
    }

    fill(255, 219, 88);
    ellipse(sunX, sunY, 100);

    if (mouseIsPressed) {

        sunX = mouseX
        sunY = mouseY
    }


}