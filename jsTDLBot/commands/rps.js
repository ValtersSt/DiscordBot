const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { rock, paper, scissors } = require('../buttons/buttonsRps');

module.exports = {
  name: 'rps',
  description: 'This is a rps command, init rps game',
  execute(message, args) {
    const row = new MessageActionRow().addComponents(rock, paper, scissors);
    const embed = new MessageEmbed()
      .setColor('#3b3737')
      .setTitle('ROCK - PAPER - SCISSORS')
      .setDescription('Choose your hand!')
      .setImage(
        'http://photos1.blogger.com/blogger/1334/1666/1600/23812006.jpg'
      );

    message.reply({ embeds: [embed], components: [row] });
  },
};
