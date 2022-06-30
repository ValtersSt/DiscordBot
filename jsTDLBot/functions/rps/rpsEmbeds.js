const { MessageEmbed } = require('discord.js');

const winEmbed = (playerChoice, botHand) => {
  const edit = new MessageEmbed()
    .setColor('#39f739')
    .setTitle('YOU WON!!!   🥳')
    .setDescription(`You chose ${playerChoice}, I chose ${botHand}.`);
  return edit;
};

const loseEmbed = (playerChoice, botHand) => {
  const edit = new MessageEmbed()
    .setColor('#ff3d47')
    .setTitle('YOU LOSE!!!    🥲')
    .setDescription(`You chose ${playerChoice}, I chose ${botHand}.`);
  return edit;
};

const drawEmbed = (playerChoice, botHand) => {
  const edit = new MessageEmbed()
    .setColor('#3b3737')
    .setTitle(`IT'S A DRAW!!!   😐`)
    .setDescription(
      `You chose ${playerChoice}, I chose ${botHand}.\nLet's play again!`
    );
  return edit;
};

module.exports = {
  winEmbed,
  loseEmbed,
  drawEmbed,
};
