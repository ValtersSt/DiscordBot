const { selectPLayerEmbed, thanksEmbed } = require('./dice/diceEmbeds');
const { newGameMessageEdit, thanksEdit } = require('./dice/diceEmbedEdits');
const {
  playerOnePlay,
  playerTwoPlay,
  playerOneHold,
  playerTwoHold,
} = require('./dice/diceGameLogic');

const { gameOutcome } = require('./rps/rpsGameLogic');

// --------------------------------------------------------
// ----------- ROCK, PAPER, SCISSORS ----------------------
// --------------------------------------------------------

const rpsFunction = async (interaction, userInteraction) => {
  const hands = ['Rock', 'Paper', 'Scissors'];
  const botChoice = Math.floor(Math.random() * hands.length);

  if (interaction.customId === 'Rock') {
    gameOutcome('Rock', hands[botChoice], userInteraction);
  }

  if (interaction.customId === 'Paper') {
    gameOutcome('Paper', hands[botChoice], userInteraction);
  }

  if (interaction.customId === 'Scissors') {
    gameOutcome('Scissors', hands[botChoice], userInteraction);
  }
};

// --------------------------------------------------------
// ----------- DICE GAME, 1ST TO >= 21  -------------------
// --------------------------------------------------------

const diceFunction = (interaction, userInteraction) => {
  if (interaction.customId === 'Start') {
    newGameMessageEdit(selectPLayerEmbed(), userInteraction);
  }

  if (interaction.customId === 'Quit') {
    thanksEdit(thanksEmbed(), userInteraction);
  }

  if (interaction.customId === 'Player1') {
    playerOnePlay(interaction, userInteraction);
  } else if (interaction.customId === 'Hold1') {
    playerOneHold(userInteraction);
  }

  if (interaction.customId === 'Player2') {
    playerTwoPlay(interaction, userInteraction);
  } else if (interaction.customId === 'Hold2') {
    playerTwoHold(userInteraction);
  }
};

module.exports = {
  rpsFunction,
  diceFunction,
};
