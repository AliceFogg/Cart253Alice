/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
let anvil = {
    x: 0,
    y: 0,
    size: 100,
    speed: 0
}



function setup() {

    createCanvas(500, 400);
    anvil.x = random(0, width);
    anvil.y = 0
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(220)

    moveAnvil()
    drawMe()
    drawAnvil()


}
function drawAnvil() {
    fill(110, 110, 102)
    rect(anvil.x, anvil.y, 120, 50)


}

function drawMe() {
    fill(255, 255, 158)
    square(200, 320, 80)
}

function moveAnvil() {

    anvil.speed = anvil.speed + .2
    anvil.y = anvil.y + anvil.speed

}

