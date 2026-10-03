function setup() {

    //pink background :3
    createCanvas(400, 400);
    background(255, 105, 180)
}

//draw a pink bubblegum circle if the mouse is pressed
function draw() {
    if (mouseIsPressed)
        circle(mouseX, mouseY, cSize)
    fill(255, 231, 233)


    //make it expand as the cursor is held down
    cSize = frameCount % width
    //(-2);




}