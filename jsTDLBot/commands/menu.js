const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'menu',
  description: 'This is a embed command',
  execute(message, args) {
    const menuEmbed = new MessageEmbed()
      .setColor('#ed9537')
      .setTitle('Vending Machine')
      .setDescription('Buy whatever.. πΈ')
      .addFields(
        { name: '1. Orange juice π§', value: 'Price: 100', inline: true },
        { name: '2. Soda π₯€', value: 'Price: 200', inline: true },
        { name: '3. Chocolate snack π«', value: 'Price: 150', inline: true },
        { name: '4. Cookies πͺ', value: 'Price: 250', inline: true },
        { name: '5. Gummy bears π»', value: 'Price: 180', inline: true },
        { name: '6. Condoms πΎοΈ', value: 'Price: 500', inline: true },
        { name: '7. Crackers π₯¨', value: 'Price: 120', inline: true },
        { name: '8. Potato chips π', value: 'Price: 220', inline: true },
        { name: '9. Small snack π­', value: 'Price: 80', inline: true }
      )
      .setFooter({
        text: `To buy the item of your choosing type for example VS$buy 3 300\nVending machine returns change only in steps by 10, 20, 50, 100, 200, 500. If there's change that can't be returned in this way.. thanks! π`,
      });

    message.channel.send({ embeds: [menuEmbed] });
  },
};
