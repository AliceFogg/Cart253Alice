/**
 * Alien eyes
 * 
 * Alice Fogg
 * 
 * A pair of alien eyes
 */

"use strict";

/**
 * Create a canvas
*/
function setup()
createCanvas(400, 400);
}


/**
 * Draw my alien eyes
 */
function draw() {
    background(136, 189, 74);

    //Draw alien eyes
    fill(255)
    ellipse(100, 150, 100, 200)
    ellipse(300, 150, 100, 200)

    //Add bloodshot ring
    fill(216, 67, 51)
    ellipse(100, 150, 50, 150)
    ellipse(300, 150, 50, 150)

    //make scary pupils 
    fill(0)
    circle(100, 150, 30)
    circle(300, 150, 30)

}