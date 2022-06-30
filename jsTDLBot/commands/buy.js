const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'buy',
  description: 'This is a buy command for the vending machine',
  execute(message, args) {
    const products = [
      { number: 1, price: 100, name: 'Orange juice' },

      { number: 2, price: 200, name: 'Soda' },

      { number: 3, price: 150, name: 'Chocolate snack' },

      { number: 4, price: 250, name: 'Cookies' },

      { number: 5, price: 180, name: 'Gummy bears' },

      { number: 6, price: 500, name: 'Condoms' },

      { number: 7, price: 120, name: 'Crackers' },

      { number: 8, price: 220, name: 'Potato chips' },

      { number: 9, price: 80, name: 'Small snack' },
    ];

    const coins = [500, 200, 100, 50, 20, 10];

    if (args.length === 0) {
      const noNr = new MessageEmbed()
        .setColor('ff3d47')
        .setTitle('PURCHASE FAILED')
        .setDescription('Reason - Please provide the product number!');

      return message.reply({ embeds: [noNr] });
    }

    const productNumber = args[0];
    const moneyEntered = args[1];

    if (productNumber > products.length) {
      const wrongNr = new MessageEmbed()
        .setColor('ff3d47')
        .setTitle('PURCHASE FAILED')
        .setDescription('Reason - Enter a valid product number.');

      return message.reply({ embeds: [wrongNr] });
    }

    if (moneyEntered === undefined) {
      const noMoneyAtAll = new MessageEmbed()
        .setColor('ff3d47')
        .setTitle('PURCHASE FAILED')
        .setDescription(
          `Reason - You didn't provide any money for the purchase!`
        );

      return message.reply({ embeds: [noMoneyAtAll] });
    }

    const currentName = products[productNumber - 1].name;
    const currentPrice = products[productNumber - 1].price;

    if (currentPrice > moneyEntered) {
      const noMoney = new MessageEmbed()
        .setColor('ff3d47')
        .setTitle('PURCHASE FAILED')
        .setDescription(`Reason - You don't have enough money for that!`);

      return message.reply({ embeds: [noMoney] });
    } else {
      let change = moneyEntered - currentPrice;
      let changeList = [];

      for (let coin of coins) {
        while (change >= coin) {
          change -= coin;
          changeList.push(coin);
        }
      }

      let finalChange = changeList.join(', ')
        ? '[' + changeList.join(', ') + ']'
        : '[]';

      const purchaseSuccessEmbed = new MessageEmbed()
        .setColor('#39f739')
        .setTitle('PRUCHASE SUCCESSFUL')
        .addFields({
          name: `You bought: ${currentName}`,
          value: `Your change: ${finalChange}`,
        });

      return message.reply({ embeds: [purchaseSuccessEmbed] });
    }
  },
};
