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
let currentBackground = "#D3D3D3"


let anvil = {
    x: 0,
    y: 0,
    width: 120,
    height: 50,
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
    background(currentBackground)
    moveAnvil()
    drawMe()
    drawAnvil()
    checkOverlap()

}
function drawAnvil() {
    fill(110, 110, 102)
    rect(anvil.x, anvil.y, anvil.width, anvil.height)


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
    if (me.x + me.width > anvil.x - anvil.width &&
        me.x - me.width < anvil.x + anvil.width &&
        me.y + me.height > anvil.y - anvil.height &&
        me.y - me.height < anvil.y + anvil.height) {
        // They overlap, so change the background
        currentBackground = "#FF0000";
    } else {
        // They don't overlap, so use the default background
        currentBackground = "#D3D3D3";
    }


}