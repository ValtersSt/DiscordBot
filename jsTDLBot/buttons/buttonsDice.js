const { MessageButton } = require('discord.js');

const player1 = new MessageButton()
  .setCustomId('Player1')
  .setLabel('Player1 Roll Dice')
  .setStyle('PRIMARY');

const player2 = new MessageButton()
  .setCustomId('Player2')
  .setLabel('Player2 Roll Dice')
  .setStyle('PRIMARY');

const hold1 = new MessageButton()
  .setCustomId('Hold1')
  .setLabel('Hold')
  .setStyle('PRIMARY');

const hold2 = new MessageButton()
  .setCustomId('Hold2')
  .setLabel('Hold')
  .setStyle('PRIMARY');

const start = new MessageButton()
  .setCustomId('Start')
  .setLabel('Start')
  .setStyle('PRIMARY');

const quit = new MessageButton()
  .setCustomId('Quit')
  .setLabel('Quit')
  .setStyle('PRIMARY');

module.exports = {
  player1,
  player2,
  hold1,
  hold2,
  start,
  quit,
};
