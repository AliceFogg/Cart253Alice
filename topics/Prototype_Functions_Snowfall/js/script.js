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

let me = {
    x: 200,
    y: 320,
    size: 80,
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
    square(me.x, me.y, me.size)
}

function moveAnvil() {

    anvil.speed = anvil.speed + .2
    anvil.y = anvil.y + anvil.speed

}

function checkOverlap() {
    if (me.x + me.width / 2 > anvil.x - anvil.width / 2 &&
        me.x - me.width / 2 < anvil.x + anvil.width / 2 &&
        me.y + me.height / 2 > anvil.y - anvil.height / 2 &&
        me.y - me.height / 2 < anvil.y + anvil.height / 2) {
        // They overlap, so change the smaller shape's color
        small.stroke = color(255, 0, 0);
    } else {
        // They don't overlap, so use the default color
        small.stroke = color(255);
    }


}