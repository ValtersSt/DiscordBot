const { MessageButton } = require('discord.js');

const rock = new MessageButton()
  .setCustomId('Rock')
  .setLabel('Rock')
  .setStyle('PRIMARY');

const paper = new MessageButton()
  .setCustomId('Paper')
  .setLabel('Paper')
  .setStyle('PRIMARY');

const scissors = new MessageButton()
  .setCustomId('Scissors')
  .setLabel('Scissors')
  .setStyle('PRIMARY');

module.exports = {
  rock,
  paper,
  scissors,
};
