/**
 * Worm simulation
 * Alice Fogg
 * 
 * Eat through the dirt! you're a worm
 */



"use strict";

const head = {
    // Size of the shape we move with the mouse
    diameter: 20,
    // Maximum length of the trail
    maxTrailLength: 30,
    // The trail itself will be stored here
    trail: []
};

/**
 * Creates a canvas
 */
function setup() {
    createCanvas(400, 400);

    //draw a brown background in setup so it only gets drawn once
    background(150, 75, 0);

    // remove the cursor
    noCursor();
}

/**
 * Draws the rings with a for loop
 */
function draw() {

    head.x = mouseX;
    head.y = mouseY;

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