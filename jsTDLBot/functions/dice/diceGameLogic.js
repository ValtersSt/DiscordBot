const {
  updateEmbed,
  playerHoldEmbed,
  selectPLayerEmbed,
  endEmbed,
  thanksEmbed,
} = require('./diceEmbeds');

const {
  playerOneHoldMessageEdit,
  playerOneRollMessageEdit,
  playerTwoHoldMessageEdit,
  playerTwoRollMessageEdit,
  gameOverEdit,
} = require('./diceEmbedEdits');

let player1Score = 0;
let player2Score = 0;

const playerOnePlay = (interaction, userInteraction) => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  // If rolled '1', player loses turn, if not add score & continue
  if (dice !== 1) {
    player1Score += dice;
    playerOneRollMessageEdit(
      updateEmbed(player1Score, player2Score, dice),
      userInteraction
    );
    // Check if winning score, else continue
    if (player1Score >= 21) {
      gameOverEdit(endEmbed(player1Score, interaction), userInteraction);
      player1Score = 0;
      player2Score = 0;
    }
    // When turn lost, switch players
  } else {
    player1Score = 0;
    playerTwoRollMessageEdit(
      updateEmbed(player1Score, player2Score, dice),
      userInteraction
    );
  }
};

const playerOneHold = (userInteraction) => {
  playerOneHoldMessageEdit(
    playerHoldEmbed(player1Score, player2Score),
    userInteraction
  );
};

const playerTwoPlay = (interaction, userInteraction) => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  if (dice !== 1) {
    player2Score += dice;
    playerTwoRollMessageEdit(
      updateEmbed(player1Score, player2Score, dice),
      userInteraction
    );
    if (player2Score >= 21) {
      gameOverEdit(endEmbed(player2Score, interaction), userInteraction);
      player1Score = 0;
      player2Score = 0;
    }
  } else {
    player2Score = 0;
    playerOneRollMessageEdit(
      updateEmbed(player1Score, player2Score, dice),
      userInteraction
    );
  }
};

const playerTwoHold = (userInteraction) => {
  playerTwoHoldMessageEdit(
    playerHoldEmbed(player1Score, player2Score),
    userInteraction
  );
};

module.exports = {
  playerOnePlay,
  playerOneHold,
  playerTwoPlay,
  playerTwoHold,
};
