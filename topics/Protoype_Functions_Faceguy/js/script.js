/**
 * FaceGuy
 * Alice Fogg
 * 
 * He doesn't like when you click the screen, his ears are sensitive :(
 */

"use strict";
let mood = "happy";



//neutral face
function drawNeutral() {
  ellipse(80, 150, 50)
  ellipse(320, 150, 50)
  line(120, 275, 280, 275)
  stroke(0)
  strokeWeight(3)
  fill(0)
}
//Sad Face
function drawSad() {
  background(232, 235, 52);
  fill(0)
  ellipse(80, 150, 50)
  ellipse(320, 150, 50)
  noStroke()
  noFill()
  stroke(0)
  strokeWeight(3)
  arc(200, 300, 100, 80, PI, TWO_PI)
}

//happy face 
function drawHappy() {
  background(232, 235, 52);
  fill(0)
  ellipse(80, 150, 50)
  ellipse(320, 150, 50)
  noStroke()
  noFill()
  stroke(0)
  strokeWeight(3)
  arc(200, 300, 100, 80, TWO_PI, PI)
}

function setup() {
  createCanvas(400, 400)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
  background(232, 235, 52);

  if (mood === "happy") {
    drawHappy();
  } else if (mood === "neutral") {
    drawNeutral();
  } else if (mood === "sad") {
    drawSad();
  }


}

function mousePressed() {
  mood = "neutral"
}
function doubleClicked() {
  mood = "sad"
}