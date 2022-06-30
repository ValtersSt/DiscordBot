const fetch = require('node-fetch');
const config = require('../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'randomAPI',
  description: 'command to pull from a random api of users choice',
  async execute(message, args) {
    whatApi = args[0];

    if (args.length === 0) {
      const noAPI = new MessageEmbed()
        .setColor('ff3d47')
        .setTitle('FAIL')
        .setDescription(
          'Reason - Please provide the second argument!\nFor help type - VS$help'
        );

      return message.reply({ embeds: [noAPI] });
    }

    if (whatApi === 'joke') {
      let gifUrl = `https://g.tenor.com/v1/search?q=laugh&key=${config.gifKey}&limit=20`;
      let gifResponse = await fetch(gifUrl);
      let gifJson = await gifResponse.json();
      const randomGif = Math.floor(Math.random() * gifJson.results.length);
      let gif = gifJson.results[randomGif].media[0].gif.url;

      let jokeUrl = `https://v2.jokeapi.dev/joke/Miscellaneous,Pun?blacklistFlags=racist,sexist&type=single`;
      let jokeResponse = await fetch(jokeUrl);
      let jokeJson = await jokeResponse.json();
      let joke = jokeJson.joke;

      const embed = new MessageEmbed()
        .setColor('#39f739')
        .setTitle(joke)
        .setImage(gif)
        .setFooter({
          text: 'Note: Not me, nor my creator is responsible for the content of the joke.',
        });

      message.reply({ embeds: [embed] });
    }

    if (whatApi === 'quote') {
      let quoteUrl = `https://type.fit/api/quotes`;
      let quoteResponse = await fetch(quoteUrl);
      let quoteJson = await quoteResponse.json();
      const randomQuote = Math.floor(Math.random() * quoteJson.length);
      let quoteText = quoteJson[randomQuote].text;
      let quoteAuthor = quoteJson[randomQuote].author;

      if (!quoteAuthor) return (quoteAuthor = 'Uknown');

      const embed = new MessageEmbed()
        .setColor('#5595ed')
        .setTitle(quoteText)
        .setFooter({
          text: `- ${quoteAuthor}`,
        });

      message.reply({ embeds: [embed] });
    }

    if (whatApi === 'bored') {
      let boredUrl = `https://www.boredapi.com/api/activity/`;
      let boredResponse = await fetch(boredUrl);
      let boredJson = await boredResponse.json();
      let boredText = boredJson.activity;

      const embed = new MessageEmbed()
        .setColor('#5595ed')
        .setTitle(`${boredText}? 🤔 🤔 🤔`);

      message.reply({ embeds: [embed] });
    }

    if (whatApi === 'nasa') {
      let nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=HyEWm0jOZ44Ans76RGE20tFBDXbDu9B9RfkPvySV`;
      let nasaResponse = await fetch(nasaUrl);
      let nasaJson = await nasaResponse.json();
      let picOfTheDay = nasaJson.url;
      let title = nasaJson.title;
      let desc = nasaJson.explanation;

      const embed = new MessageEmbed()
        .setColor('#5595ed')
        .setTitle(title)
        .setDescription(desc)
        .setImage(picOfTheDay);

      message.reply({ embeds: [embed] });
    }

    if (whatApi === 'fact') {
      let factUrl = `https://uselessfacts.jsph.pl/random.json?language=en`;
      let factResponse = await fetch(factUrl);
      let factJson = await factResponse.json();
      let fact = factJson.text;

      const embed = new MessageEmbed()
        .setColor('#5595ed')
        .setTitle('Did you know? 😲 😲 😲')
        .setDescription(fact);

      message.reply({ embeds: [embed] });
    }
  },
};
