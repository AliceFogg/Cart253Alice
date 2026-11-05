/**
 * Worm simulation
 * Alice Fogg
 * 
 * Eat through the dirt! you're a worm
 */



"use strict";


/**
 * Creates a canvas
 */

let head;

function setup() {
    createCanvas(400, 400);

    //draw a brown background in setup so it only gets drawn once
    background(150, 75, 0);

    // remove the cursor
    noCursor();

    head = {
        //starts at the top left corner of the canvas
        x: 10,
        y: 5,

        diameter: 30,       // Size of the head and trail 
        maxTrailLength: 20, // How long the tail can get
        trail: []       
    };
}

/**
 * Draws the rings with a for loop
 */
function draw() {

    //move the head based on which key is being pressed
    if (keyIsDown(LEFT_ARROW) === true) {
        head.x = head.x - 1
    } else if (keyIsDown(RIGHT_ARROW) === true) {
        head.x = head.x + 1
    } else if (keyIsDown(UP_ARROW) === true) {
        head.y = head.y - 1
    } else if (keyIsDown(DOWN_ARROW) === true) {
        head.y = head.y + 1
    }


    for (let i = 0; i < head.trail.length; i++) {
        // The current element of the trail
        let element = head.trail[i];

        push();
        noStroke();
        fill(255);
        ellipse(element.x, element.y, head.diameter);
        pop();
    }

    // Draw the main shape (aligned to the mouse)
    push();
    noStroke();
    fill(184, 141, 148);
    ellipse(head.x, head.y, head.diameter);
    pop();

    // Add the current position to the trail using the mover's
    // current x and y
    head.trail.push({
        x: head.x,
        y: head.y
    });

    // Check if the trail is too long and remove the oldest if so
    if (head.trail.length >= head.maxTrailLength) {
        head.trail.shift();
    }
}