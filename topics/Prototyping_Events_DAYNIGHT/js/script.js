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
let backgr = {
    r: 173,
    g: 216,
    b: 230
};


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

    if (mouseIsPressed) {

        sunY = (sunY + 3)

        backgr.r = backgr.r - 5
        backgr.b = backgr.b - 5
        backgr.g = backgr.g - 5
    }


}