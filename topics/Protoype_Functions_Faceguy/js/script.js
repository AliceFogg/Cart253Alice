/**
 * FaceGuy
 * Alice Fogg
 * 
 * He doesn't like when you click the screen, his ears are sensitive :(
 */

"use strict";

//mood starts off happy
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

//create a 400 by 400 canvas
function setup() {
  createCanvas(400, 400)
}



function draw() {
  background(232, 235, 52); //draw the background

  //Connect moods to draw moods function
  if (mood === "happy") {
    drawHappy();
  } else if (mood === "neutral") {
    drawNeutral();
  } else if (mood === "sad") {
    drawSad();
  }


}

//If the mouse is pressed one time, mood becomes neutral (so drawNeutral)
function mousePressed() {
  mood = "neutral"
}

//if the mouse is double clicked, the mood becomes sad, so drawSad is called
function doubleClicked() {
  mood = "sad"
}