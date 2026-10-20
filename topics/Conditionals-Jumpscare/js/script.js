/**
 * Button Game
 * Alice Fogg
 * 
 * 
 */

"use strict";



let scaryGuy;

async function preload() {
    scaryGuy = await loadImage("./assets/images/Mandela.Catalogue.jpg");

}



async function setup() {
    createCanvas(400, 400);
    await preload()
}


function draw() {


    // distance of the radius of the circle
    let distance = dist(width / 2, height / 2, mouseX, mouseY)

    //radius of centre circle + radius of the mouse circle
    let border = 50 + 25

    //draw background
    background(220);

    //make a light green circle in the middle of the canvas
    fill(144, 238, 144);
    circle(200, 200, 100);

    //make a black circle at the mouse position
    fill(0)
    circle(mouseX, mouseY, 50);


    if (distance < border) {

        image(scaryGuy, 0, 0)



    }


}

