const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Lists all bot commands',
  execute(message, args) {
    const embed = new MessageEmbed()
      .setColor('DARK_BUT_NOT_BLACK')
      .setTitle('Your commands guide for the bot.  😎')
      .addFields(
        { name: 'VS$help', value: '• show command help' },
        { name: 'VS$ping', value: '• replies with pong' },
        { name: 'VS$menu', value: '• shows the vending machine menu' },
        {
          name: `VS$buy item number amount of money you'll pay`,
          value:
            '• E.g. - VS$buy 3 150, buys chocolate snack from the vending machine',
        },
        { name: 'VS$rps', value: '• play a game of Rock, Paper, Scissors' },
        {
          name: 'VS$dice',
          value: '• play a game of dice, with someone or yourslef',
        },
        { name: 'VS$randomAPI', value: 'Examples see below:' }
      )
      .setFooter({
        text: `• VS$randomAPI joke - lighten up with a joke\n• VS$randomAPI quote - a piece of wisdom\n• VS$randomAPI bored - get an idea of what to possibly do\n• VS$randomAPI nasa - the picture of the day from NASA\n• VS$randomAPI fact - random fact about random things`,
      });

    message.reply({ embeds: [embed] });
  },
};
