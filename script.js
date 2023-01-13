/*

To create a 2d area game space with a movable character
1. Create SVG element in HTML (This forms the game area) with rect (As the player)
2. Configure player object size (width and height)
3. Configure starting position of player (x and y coordinates)
4. determine what is the distance moved by player per arrow down
5. Select the object
6. Create function to update the Y position
7. Create function to update the X position
8. Create function to visual refresh the position of player using transform("translate", "")
9. Add event listener to listen for events for up,down,left and right.

*/

let playerObjectSize = {
    width: 20,
    height: 20
};

let position = {
    x: 10,
    y: 10
}

let moveAction = 10


function updateXPosition (distance) {
    position.x += distance
}

function updateYPosition (distance) {
    position.y += distance
}

function refreshPosition () {
    let player = document.querySelector('#player')

    newX = position.x - (playerObjectSize.width/2)
    newY = position.y - (playerObjectSize.width/2)

    console.log(`My new X value is ${newX}`)
    console.log(`My new Y value is ${newY}`)

    transform = "translate(" + newX + " " + newY + ")"

    player.setAttribute("transform", transform)
}

let gameover = document.querySelector('.gameOver')

window.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowLeft') {
        updateXPosition(-moveAction)
    }
    else if (event.code === 'ArrowRight') {
        updateXPosition(moveAction)
    }
    else if (event.code === 'ArrowDown') {
        updateYPosition(moveAction)
    }
    else if (event.code === 'ArrowUp') {
        updateYPosition(-moveAction)
    }
    refreshPosition();
    if (position.x === 450 && position.y === 450) {
        gameover.style.display = "flex"
    }
})

console.log(`My X value is ${position.x}`)
console.log(`My Y value is ${position.y}`)