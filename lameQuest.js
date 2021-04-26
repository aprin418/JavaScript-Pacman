// GLOBAL DOM VARIABLES
const movementDisplay = document.getElementById("movement");
const game = document.getElementById("game");
let hero;
let ogre;
let troll;

// ====================== SETUP FOR CANVAS RENDERING ======================= //
// 2D rendering context for canvas element.
// It is used for drawing shapes, text, images, and other objects.

const ctx = game.getContext("2d");

// ====================== SETUP FOR CANVAS RENDERING ======================= //

game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute("width", getComputedStyle(game)["width"]);

// ctx.fillStyle = "white";
// ctx.strokeStyle = "red";
// ctx.lineWidth = 5;
// ctx.fillRect(10, 10, 100, 100);
// ctx.strokeRect(10, 10, 100, 100);

function clearCanvas() {
  ctx.clearRect(0, 0, game.width, game.height);
}

// ====================== ENTITIES ======================= //

function Crawler(x, y, color, width, height) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.width = width;
  this.height = height;
  this.alive = true;
  this.render = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}
// ====================== HELPER FUNCTIONS ======================= //
// SANDBOX FOR TESTING PAINTING TECHNIQUES

function drawBox(x, y, size, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
}

//  GUI

//  KEYBOARD INTERACTION LOGIC
function movementHandler(e) {
  // if key press matches 'W, S A or D" move character up,down, left or right
  if (e.which === 87) {
    hero.y -= 10;
  } else if (e.which === 83) {
    hero.y += 10;
  } else if (e.which === 65) {
    hero.x -= 10;
  } else if (e.which === 68) {
    hero.x += 10;
  }
  // key event codes - here https://keycode.info/
}
// ====================== GAME PROCESSES ======================= //
function gameLoop() {
  clearCanvas();
  // update our display
  movementDisplay.textContent = `X: ${hero.x} Y: ${hero.y}`;
  // checks state of hero
  console.log();
  if (ogre.alive) {
    ogre.render();
    // Collision detection function call here - detectHit
    detectHit();
  }
  troll.render();
  hero.render();
}
// ====================== COLLISION DETECTION ======================= //
function detectHit() {
  if (
    hero.x < ogre.x + ogre.width &&
    hero.x + hero.width > ogre.x &&
    hero.y < ogre.y + ogre.height &&
    hero.y + hero.height > ogre.y
  ) {
    ogre.alive = false;
    addNewOgre();
  }
}

function addNewOgre() {
  ogre.alive = false;
  setTimeout(() => {
    let x = Math.floor(Math.random() * game.width) - 40;
    let y = Math.floor(Math.random() * game.height) - 80;
    ogre = new Crawler(x, y, "#bada55", 40, 80);
  }, 1000);
  return true;
}

// ====================== PAINT INTIAL SCREEN ======================= //

// EVENT LISTENER

document.addEventListener("DOMContentLoaded", function () {
  hero = new Crawler(100, 200, "hotpink", 40, 40);
  ogre = new Crawler(500, 150, "#bada55", 40, 80);
  troll = new Crawler(200, 200, "red", 70, 70);

  document.addEventListener("keydown", movementHandler);
  const runGame = setInterval(gameLoop, 60);
});

//     CODE STASH

// clearCanvas()

// randomCrawler.render()
// crawlerArray.push(randomCrawler)
// // randomCrawler
// console.log(crawlerArray.length,"<<<crawlers in here")
// crawlerArray.forEach(crawler=>{
//     crawler.render()
// })

// game.addEventListener("click", function (e) {
//   // clearing the canvas
//   clearCanvas();
//   randomCrawler.x = e.offsetX;
//   randomCrawler.y = e.offsetY;
//   randomCrawler.render();
// });
