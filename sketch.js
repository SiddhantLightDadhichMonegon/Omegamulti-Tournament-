
var database;
var gameState = 0;
var playerCount;
var form, player, game;
var allPlayers = [];
var car1,car2,car3,car4;
var cars = [];
var flag = 0;

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    // database.ref('/').update({
    //     gameState: 0,
    //     playerCount: 0
    // })
}

function draw(){
    background("white");

    if(playerCount === 4){
        game.update(1);
    }

    if(gameState === 1){
        clear();
        game.play();
    }

    drawSprites();
}




