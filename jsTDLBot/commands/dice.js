const { MessageActionRow, MessageEmbed } = require('discord.js');
const { start, quit } = require('../buttons/buttonsDice');

module.exports = {
  name: 'dice',
  description: 'This is a dice command, init the dice game',
  execute(message, args) {
    const row = new MessageActionRow().addComponents(start, quit);

    const gameEmbed = new MessageEmbed()
      .setTitle('🎲 DICE GAME 🎲')
      .setDescription(
        'Rules:\nFirst who gets 21 points or more wins!\nPlayer rolls the dice.\nHold when satisfied with the current score.\nIf you get a roll of 1, you will lose all points and start from 0.'
      )
      .setThumbnail(
        'https://www.liveabout.com/thmb/oD2sGAnKtdZnxx5p0ivTIziC7UI=/2242x2242/smart/filters:no_upscale()/GettyImages-93453966-59684e1d3df78c57f49b0c91.jpg'
      );

    message.reply({
      embeds: [gameEmbed],
      components: [row],
    });
  },
};
