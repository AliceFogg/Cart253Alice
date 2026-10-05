/**
 * Abstract void
 * Alice Fogg
 * 
 * A dark icy void
 */

"use strict";

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    noStroke()

    //draw background (light grey)
    fill(197, 200, 219)
    circle(200, 200, 500)

    //lightest circle furthest out

    fill(155, 160, 189)
    circle(200, 200, 450);

    //lighter circle 2

    fill(101, 104, 126)
    circle(200, 200, 400)


    // darker circle 3

    fill(85, 82, 106)
    circle(200, 200, 350)

    //circle 4

    fill(53, 58, 86)
    circle(200, 200, 300)

    //circle 5

    fill(30, 35, 61)
    circle(200, 200, 250)

    //circle 6

    fill(14, 17, 31)
    circle(200, 200, 200)

    //circle 7

    fill(207, 216, 220)

    //final middle circle
}