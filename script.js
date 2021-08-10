// modes
var arrangingDice = "arrange";
var rollDice = "roll";


// game mode
var gameMode = "rollDice";

// Player turn

var player = 1;

// results array
var player1Rolls = [];
var player2Rolls = [];

//  Diceroll
var diceRoll = function () {
  return Math.ceil(Math.random() * 6);
};

// Playerscore
var player1Score = 0;
var player2Score = 0;

var playerRoll = function () {
  var diceArray = [diceRoll(), diceRoll()];

  if (player === 1) {
    player1Rolls = diceArray;
  } else {
    player2Rolls = diceArray;
  }
  return diceArray;
};

var concatenate2Numbers = function (num1, num2) {
  return Number(String(num1) + String(num2));
};

var main = function (input) {
  // console.log("gamemode", gameMode);
  // console.log("player", currentPlayer);
  if (gameMode === "rollDice") {
    playerRoll();
    if (player === 2) {
      gameMode = "arrangeDice";
      return (
        player2Rolls +
        " are the dice rolls. Type 1 to submit the first dice and 2 for the second dice"
      );
    }
    gameMode = "arrangeDice";
    return (
      player1Rolls +
      " are the dice rolls. 1 to submit the first dice and 2 for the second dice"
    );
  }

  if (gameMode == "arrangeDice") {
    if (player === 1 && input == 1) {
   
      gameMode = "rollDice";
      player = 2;
      player1Score = concatenate2Numbers(player1Rolls[0], player1Rolls[1]);
      return (
        player1Score +
        " is the player 1 score. Click submit to roll for player 2"
      );
    }

    if (player === 1 && input == 2) {
      gameMode = "rollDice";
      player = 2;
      player1Score = concatenate2Numbers(player1Rolls[1], player1Rolls[0]);
      return (
        player1Score +
        " is the player 1 score. Click submit to roll for player 2"
      );
    }
    if (player === 2 && input == 1) {
      player2Score = concatenate2Numbers(player2Rolls[0], player2Rolls[1]);
      if (player2Score < player1Score)
        return (
          "Player 1 score is " +
          player1Score +
          " and player 2 score is " +
          player2Score +
          " haha, player 1 is the best"
        );
      if (player2Score > player1Score)
        return (
          "Player 1 score is " +
          player1Score +
          " and player 2 score is " +
          player2Score +
          "Haha I win, player 2 wins"
        );
    }
    if (player === 2 && input == 2)
      player2Score = concatenate2Numbers(player2Rolls[1], player2Rolls[0]);
    gameMode = "rollDice";
    player == 1;
    if (player2Score < player1Score)
      return (
        "Player 1 score is " +
        player1Score +
        " and player 2 score is " +
        player2Score +
        " haha, player 1 is the best"
      );
    if (player2Score > player1Score)
      return (
        "Player 1 score is " +
        player1Score +
        " and player 2 score is " +
        player2Score +
        "Haha I win, player 2 wins"
      );
  }
};
