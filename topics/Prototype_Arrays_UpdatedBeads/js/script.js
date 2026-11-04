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

    // Looks nicer without the cursor?
    noCursor();
}

/**
 * Draws the rings with a for loop
 */
function draw() {
    background(150, 75, 0);

    head.x = mouseX;
    head.y = mouseY;

    for (let i = 0; i < head.trail.length; i++) {
        // The current element of the trail
        let element = head.trail[i];
        // Get the shade for this element of the trail
        // based on its position in the array (older trail elements
        // will be darker)
        // let shade = map(i, 0, head.trail.length, 50, 255);

        // Draw the element
        push();
        noStroke();
        fill(255);
        ellipse(element.x, element.y, head.diameter);
        pop();
    }

    // Draw the main shape (aligned to the mouse)
    push();
    noStroke();
    fill(255);
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
        // shift() will remove the "oldest" element
        // It's kind of the opposite of push()
        head.trail.shift();
    }
}