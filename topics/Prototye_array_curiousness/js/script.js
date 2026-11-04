/**
 * Friends!!
 * Alice Fogg
 * 
 * They're really curious what you're up to
 */

"use strict";

let friend = {
    x: 200,
    y: 50,
    size: 30

}

let friends = [];


/**
 * Create the canvas
 */
function setup() {
    // Create the canvas
    createCanvas(400, 400);
}

/**
 * 
 */
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

function drawFriend(friend) {

    fill(0);
    circle(friend.x, friend.y, friend.size);
    fill(255);
    circle(friend.x - 7, friend.y - 5, 5);
    circle(friend.x + 7, friend.y - 5, 5);

}

function moveFriend(friend) {
    friend.x += friend.velocity.x
    friend.y += friend.velocity.y
    if (friend.x < mouseX) {
        friend.velocity.x = 1

    } else if (friend.x > mouseX) {
        friend.velocity.x = -1
    }
    if (friend.y < mouseY) {
        friend.velocity.y = 1

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
