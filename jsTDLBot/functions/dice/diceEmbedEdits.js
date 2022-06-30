const { MessageActionRow } = require('discord.js');

const {
  player1,
  player2,
  hold1,
  hold2,
  start,
  quit,
} = require('../../buttons/buttonsDice');

const rowPlayer1 = new MessageActionRow().addComponents(player1, hold1);
const rowPlayer2 = new MessageActionRow().addComponents(player2, hold2);
const rowNewGame = new MessageActionRow().addComponents(player1, player2);
const rowEndGame = new MessageActionRow().addComponents(start, quit);

const newGameMessageEdit = async (embed, userInteraction) => {
  await userInteraction.edit({
    embeds: [embed],
    components: [rowNewGame],
  });
};

const playerOneRollMessageEdit = async (embed, userInteraction) => {
  await userInteraction.edit({
    embeds: [embed],
    components: [rowPlayer1],
  });
};

const playerTwoRollMessageEdit = async (embed, userInteraction) => {
  await userInteraction.edit({
    embeds: [embed],
    components: [rowPlayer2],
  });
};

const playerOneHoldMessageEdit = async (embed, userInteraction) => {
  await userInteraction.edit({
    embeds: [embed],
    components: [rowPlayer2],
  });
};

const playerTwoHoldMessageEdit = async (embed, userInteraction) => {
  await userInteraction.edit({
    embeds: [embed],
    components: [rowPlayer1],
  });
};

const gameOverEdit = async (embed, userInteraction) => {
  await userInteraction.edit({
    embeds: [embed],
    components: [rowEndGame],
  });
};

const thanksEdit = async (embed, userInteraction) => {
  await userInteraction.edit({
    embeds: [embed],
    components: [],
  });
};

module.exports = {
  newGameMessageEdit,
  playerOneHoldMessageEdit,
  playerOneRollMessageEdit,
  playerTwoHoldMessageEdit,
  playerTwoRollMessageEdit,
  gameOverEdit,
  thanksEdit,
};
