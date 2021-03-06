
//                          ENEMIES


// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    "use strict";
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * 505) + 20;
    this.sprite = 'images/enemy-bug.png';
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 505) {
        this.x = this.x + (this.speed * dt);
    } else {
        this.x = -2;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [
    firstEnemy = new Enemy(-150, 55),
    secondEnemy = new Enemy(-150, 140),
    thirdEnemy = new Enemy(-150, 225),
    fourthEnemy = new Enemy(-150, 225),
    fifthEnemy = new Enemy(-150, 55)
];

allEnemies.push();





//                        PLAYER


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    "use strict";
    this.x = 203;
    this.y = 390;
    this.sprite = "images/char-boy.png"
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.collision();
};

// Collision detector.
Player.prototype.collision = function(){
    for (var i = 0; i < allEnemies.length; i++){
       if (Math.abs(this.x - allEnemies[i].x) < 60 && Math.abs(this.y - allEnemies[i].y) < 60){
         this.reset();
       }
    }
};

// Reset of player.
Player.prototype.reset = function() {
    this.x = 203;
    this.y = 390;
};

// Handle Input Prototype
Player.prototype.handleInput = function(direction) {
    if (direction === "left") {
        if (this.x > 50) {
            this.x = this.x - 101;
        }
    }
    if (direction === "right") {
        if (this.x < 350) {
          this.x += 101;
        }
    }
    if (direction === "up") {
        if (this.y > 50) {
            this.y = this.y - 83;
        }
        if (this.y < 49) {
            this.reset();
        }
    }
    if (direction === "down") {
        if (this.y < 350) {
            this.y = this.y + 83;
        }
    }
};

// Now instantiate your objects.
// Place the player object in a variable called player
var player = new Player();




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
