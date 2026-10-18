/**
 * DAY N NIGHT
 * Alice Fogg
 * 
 * /

"use strict";

/**
 * Create a 400 by 400 canvas + sunX and sunY variables, along with a mousedown event listener 
*/
//addEventListener("mousedown", (event) => { moveSUN })
//onmousedown = (event) => { }

let sunX = 200
let sunY = 100

function setup() {
    createCanvas(400, 400);
}


/**
 * Draw a sun on a blue sky
*/
function draw() {
    background(173, 216, 230);


    fill(255, 219, 88);
    ellipse(sunX, sunY, 100);

}