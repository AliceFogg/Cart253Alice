/**
 * Sad face
 * Alice Fogg
 * 
 * An accurate representation of my face when trying to use p5js for the first time
 */

"use strict";


//create canvas
function setup() {
    createCanvas(400, 400);
}
//Draw a background 
function draw() {
    background(700, 200, 200);

    //draw a 'mouth'
    fill(0)
    rect(80, 230, 180, 40);

    //add the eyes
    fill(0)
    rect(50, 50, 40, 40);
    rect(250, 50, 40, 40);

    //draw cheeks
    fill(200, 130, 154)
    noStroke()
    circle(50, 160, 100,);
    circle(300, 160, 100)

    //draw tear
    fill(195, 216, 232);
    stroke(0)
    rect(280, 80, 60, 60);
} 