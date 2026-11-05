/**
 * Friends!!
 * Alice Fogg
 * 
 * They're really curious what you're up to
 */

"use strict";

//starting parameters for a friend
let friend = {
    x: 200,
    y: 50,
    size: 30

}

// create the array
let friends = [];


/**
 * Create the canvas
 */
function setup() {
    // Create the canvas
    createCanvas(400, 400);
}

//make a function that creates a new friend
function makeFriend() {
    const newFriend = {
        // Position and dimensions
        x: random(0, width),
        y: random(0, height),
        size: friend.size,
        fill: "#000000",
        velocity: {
            x: 0,
            y: 0,
        }
    }

    return newFriend;
}

//how to draw a friend, with eyes in a constant spot relative to the friend 
function drawFriend(friend) {

    fill(0);
    circle(friend.x, friend.y, friend.size);
    fill(255);
    circle(friend.x - 7, friend.y - 5, 5);
    circle(friend.x + 7, friend.y - 5, 5);

}

//move the friend
function moveFriend(friend) {
    friend.x += friend.velocity.x
    friend.y += friend.velocity.y

    //if the friend is on the left side of the mouse, move towards it having its x value increase by 1
    if (friend.x < mouseX) {
        friend.velocity.x = 1

        //if the friend is on the right side of the mouse, move towards it having its x value decrease by 1
    } else if (friend.x > mouseX) {
        friend.velocity.x = -1
    }

    //if the mouses y value is higher than the friend, have the friend follow it with its y value increasing
    if (friend.y < mouseY) {
        friend.velocity.y = 1
        //if the mouses y value is lower than the friend, have the friend follow it with its y value decreasing
    } else if (friend.y > mouseY) {
        friend.velocity.y = -1



    }
}
function draw() {
    background(225);

    for (let friend of friends) {
        moveFriend(friend);
        drawFriend(friend);

    }

}

function mousePressed() {
    const newFriend = makeFriend();
    friends.push(newFriend);
}
