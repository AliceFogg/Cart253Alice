/**
 * Anvil Fall
 * Alice Fogg
 * 
 * oh no an anvil is falling from the sky! I hope it doesn't hit me..
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
let currentBackground = "#D3D3D3"

//Anvil parameters
let anvil = {
    x: 0,
    y: 0,
    width: 120,
    height: 50,
    speed: 0
}

//Me parameters 
let me = {
    x: 200,
    y: 320,
    width: 80,
    height: 80
}


function setup() {

    //Create 500 x 400 canvas
    createCanvas(500, 400);

    //Give anvil a random x value, and a y value of 0
    anvil.x = random(0, width);
    anvil.y = 0
}



function draw() {

    //display the current background
    background(currentBackground)

    //Move the anvil downward with gravity 
    moveAnvil()

    //draw me at the bottom of the screen, and anvil at the top
    drawMe()
    drawAnvil()

    //check if anvil and me are overlapping
    checkOverlap()

}

//how to draw the anvil
function drawAnvil() {
    fill(110, 110, 102)
    rect(anvil.x, anvil.y, anvil.width, anvil.height)


}

//how to draw me 
function drawMe() {
    fill(255, 255, 158)
    rect(me.x, me.y, me.width, me.height)
}

//move the anvil down the y axis at a speed of .2
function moveAnvil() {

    anvil.speed = anvil.speed + .2
    anvil.y = anvil.y + anvil.speed

}

//how to check if the anvil and me are overlapping
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