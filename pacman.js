document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const scoreDisplay = document.getElementById("score");
  const width = 28;
  const height = 31;
  let score = 0;
  let bonusScore = 0;
  //prettier-ignore
  // const layout = [
  //     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  //     1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  //     1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  //     1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
  //     1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  //     1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  //     1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  //     1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  //     1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  //     1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  //     1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  //     1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 2, 2, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  //     1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 4, 4, 4, 4, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  //     4, 4, 4, 4, 4, 4, 0, 1, 1, 0, 1, 1, 4, 4, 4, 4, 1, 1, 0, 1, 1, 0, 4, 4, 4, 4, 4, 4,
  //     1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  //     1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  //     1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  //     1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  //     1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  //     1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  //     1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  //     1, 0, 0, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1,
  //     1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
  //     1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  //     1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  //     1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  //     1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  //     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  // ]

  //prettier-ignore
  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 4, 4, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 4, 4, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
]
  //prettier-ignore
  const squares = [];

  // 0 - dot
  // 1 - wall
  // 2 - ghost lair
  // 3 - powerPellets
  // 4 - empty

  function renderBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      grid.appendChild(square);
      squares.push(square);

      if (layout[i] === 0) {
        squares[i].classList.add("dot");
      } else if (layout[i] === 2) {
        squares[i].classList.add("ghostLair");
      } else if (layout[i] === 1) {
        squares[i].classList.add("wall");
      } else if (layout[i] === 3) {
        squares[i].classList.add("powerPellet");
      } else if (layout[i] === 4) {
        squares[i].classList.add("path");
      }
    }
  }
  renderBoard();
  setTimeout(addFruit, 20000);

  let pacmanStart = 518;

  squares[pacmanStart].classList.add("pacMan");

  function movePacman(e) {
    squares[pacmanStart].classList.remove("pacMan");

    switch (e.keyCode) {
      //left
      case 65:
        if (
          pacmanStart % width !== 0 &&
          !squares[pacmanStart - 1].classList.contains("wall") &&
          !squares[pacmanStart - 1].classList.contains("ghostLair")
        )
          pacmanStart -= 1;
        if (pacmanStart - 1 === 419) {
          pacmanStart = 447;
        }
        break;
      //up
      case 87:
        if (
          pacmanStart - height >= 0 &&
          !squares[pacmanStart - width].classList.contains("wall") &&
          !squares[pacmanStart - width].classList.contains("ghostLair")
        )
          pacmanStart -= width;
        break;
      //right
      case 68:
        if (
          pacmanStart % width < width - 1 &&
          !squares[pacmanStart + 1].classList.contains("wall") &&
          !squares[pacmanStart + 1].classList.contains("ghostLair")
        )
          pacmanStart += 1;
        if (pacmanStart + 1 === 448) {
          pacmanStart = 420;
        }
        break;
      //down
      case 83:
        if (
          pacmanStart + height < height * height &&
          !squares[pacmanStart + width].classList.contains("wall") &&
          !squares[pacmanStart + width].classList.contains("ghostLair")
        )
          pacmanStart += width;
        break;
    }
    squares[pacmanStart].classList.add("pacMan");

    eatDot();
    powerPellet();
    gameOver();
    checkWin();
    eatFruit();
  }
  document.addEventListener("keydown", movePacman);

  function eatDot() {
    if (squares[pacmanStart].classList.contains("dot")) {
      score++;
      scoreDisplay.innerHTML = score + bonusScore;
      squares[pacmanStart].classList.remove("dot");
    }
  }

  function powerPellet() {
    if (squares[pacmanStart].classList.contains("powerPellet")) {
      score += 10;
      ghosts.forEach((ghost) => (ghost.isScared = true));
      setTimeout(unScare, 10000);
      squares[pacmanStart].classList.remove("powerPellet");
    }
  }

  function unScare() {
    ghosts.forEach((ghost) => (ghost.isScared = false));
  }

  function addFruit() {
    squares[517].classList.add("fruit");
  }

  function eatFruit() {
    if (squares[pacmanStart].classList.contains("fruit")) {
      bonusScore += 100;
      squares[pacmanStart].classList.remove("fruit");
    }
  }

  class Ghost {
    constructor(name, startIndex, speed) {
      this.name = name;
      this.startIndex = startIndex;
      this.speed = speed;
      this.currentIndex = startIndex;
      this.timerId = NaN;
      this.isScared = false;
    }
  }

  ghosts = [
    new Ghost("blinky", 377, 250),
    new Ghost("pinky", 405, 400),
    new Ghost("inky", 378, 300),
    new Ghost("clyde", 406, 500),
  ];

  ghosts.forEach((ghost) => {
    squares[ghost.currentIndex].classList.add(ghost.name);
    squares[ghost.currentIndex].classList.add("ghost");
  });

  ghosts.forEach((ghost) => moveGhost(ghost));

  function moveGhost(ghost) {
    const directions = [-1, +1, width, -width];
    let direction = directions[Math.floor(Math.random() * directions.length)];

    ghost.timerId = setInterval(function () {
      if (
        !squares[ghost.currentIndex + direction].classList.contains("wall") &&
        !squares[ghost.currentIndex + direction].classList.contains("ghost")
      ) {
        squares[ghost.currentIndex].classList.remove(
          ghost.name,
          "ghost",
          "scaredGhost"
        );
        ghost.currentIndex += direction;
        squares[ghost.currentIndex].classList.add(ghost.name, "ghost");
      } else {
        direction = directions[Math.floor(Math.random() * directions.length)];
      }
      if (ghost.isScared) {
        squares[ghost.currentIndex].classList.add("scaredGhost");
      }
      if (
        ghost.isScared &&
        squares[ghost.currentIndex].classList.contains("pacMan")
      ) {
        squares[ghost.currentIndex].classList.remove(
          ghost.name,
          "ghost",
          "scaredGhost"
        );
        ghost.currentIndex = ghost.startIndex;
        bonusScore += 100;
        squares[ghost.currentIndex].classList.add(ghost.name, "ghost");
      }
      gameOver();
    }, ghost.speed);
  }

  function gameOver() {
    let totalScore = score + bonusScore;
    if (
      squares[pacmanStart].classList.contains("ghost") &&
      !squares[pacmanStart].classList.contains("scaredGhost")
    ) {
      ghosts.forEach((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keydown", movePacman);
      setTimeout(function () {
        alert("Game Over!");
      }, 500);
      scoreDisplay.innerHTML = "GAME OVER, Your score was " + totalScore + ".";
    }
  }
  function checkWin() {
    let totalScore = score + bonusScore;
    if (score === 282) {
      ghosts.forEach((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keydown", movePacman);
      scoreDisplay.innerHTML = "YOU WIN! With a score of " + totalScore + "!";
    }
  }
});
