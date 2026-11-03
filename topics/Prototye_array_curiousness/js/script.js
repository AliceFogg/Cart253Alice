/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
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
        x: friend.x,
        y: friend.y,
        size: friend.size,
        fill: "#000000",
        velocity: {
            x: 2,
            y: 2,
        }
    }
    return newFriend;
}

function drawFriend() {
    const newFriend = {
        fill(0);
    circle(friend.x, friend.y, friend.size);
    fill(255);
    circle(friend.x - 7, friend.y - 5, 5);
    circle(friend.x + 7, friend.y - 5, 5);

}
}
function moveFriend() {
    friend.x += friend.velocity.x;
    friend.y += friend.velocity.y;
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