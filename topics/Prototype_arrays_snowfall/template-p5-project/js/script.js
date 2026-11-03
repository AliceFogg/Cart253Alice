let Flakes = [];

/**
 * Create the canvas
 */
function setup() {
    // Create the canvas
    createCanvas(500, 400);
}

/**
 * Creates a random flake
 */
function createFlake() {
    // Create a flake object with appropriate properties
    const newFlake = {
        // Position and dimensions
        x: random(0, width),
        y: 0,
        size: random(5, 15),
        // Colour
        fill: "#ece2e2",
        // Movement
        velocity: {
            x: 0,
            y: random(1, 2),
        }
    };
    return newFlake;
}

/**
 * Moves, bounces, and draws every flake in the array
 */
function draw() {
    background("#87ceeb");

    // Go through every flake in the array
    for (let Flake of Flakes) {
        moveFlake(Flake);
        drawFlake(Flake);
        bounceFlake(Flake);
    }
}

/**
 * Adds a new flake to the array each time the mouse is clicked
 */
function mousePressed() {
    const newFlake = createFlake();
    Flakes.push(newFlake);
}

/**
 * Moves the flake according to its velocity
 */
function moveFlake(Flake) {
    Flake.x += Flake.velocity.x;
    Flake.y += Flake.velocity.y;
}

/**
 * Flakes collect at the bottom 
 */
function bounceFlake(Flake) {
    if (Flake.y >= height) {
        Flake.velocity.y = 0
    }
}

/**
 * Draw the flake on the canvas
 */
function drawFlake(Flake) {
    push();
    noStroke();
    fill(Flake.fill);
    ellipse(Flake.x, Flake.y, Flake.size);
    pop();
}