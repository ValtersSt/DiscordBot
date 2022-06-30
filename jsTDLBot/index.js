const { Client, Intents, Collection, MessageButton } = require('discord.js');
const config = require('./config.json');
const { rpsFunction, diceFunction } = require('./functions/buttonFunctions');
const { addRole } = require('./roleSelection/addRole');
const { removeRole } = require('./roleSelection/removeRole');
const fs = require('fs');

const client = new Client({
  intents: [
    'GUILDS',
    'GUILD_MESSAGES',
    'GUILD_PRESENCES',
    'GUILD_MESSAGE_REACTIONS',
    'GUILD_MEMBERS',
    'GUILD_PRESENCES',
  ],
  partials: ['MESSAGE', 'CHANNEL', 'USER', 'REACTION'],
});

client.commands = new Collection();

const commandFiles = fs
  .readdirSync('./commands/')
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log('I am ready!');
});

// ---- COMMANDS ----
client.on('messageCreate', (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const [CMD_NAME, ...args] = message.content
    .trim()
    .substring(config.prefix.length)
    .split(/\s+/);

  if (CMD_NAME === 'ping') {
    client.commands.get('ping').execute(message, args);
  }

  if (CMD_NAME === 'menu') {
    client.commands.get('menu').execute(message, args);
  }

  if (CMD_NAME === 'rps') {
    client.commands.get('rps').execute(message, args);
  }

  if (CMD_NAME === 'buy') {
    client.commands.get('buy').execute(message, args);
  }

  if (CMD_NAME === 'dice') {
    client.commands.get('dice').execute(message, args);
  }

  if (CMD_NAME === 'randomAPI') {
    client.commands.get('randomAPI').execute(message, args);
  }

  if (CMD_NAME === 'help') {
    client.commands.get('help').execute(message, args);
  }
});

// ---- BUTTON INTERACTIONS ----
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  const userInteraction = await interaction.deferUpdate({ fetchReply: true });

  rpsFunction(interaction, userInteraction);
  diceFunction(interaction, userInteraction);
});

// ---- ADD & REMOVE ROLES ----
client.on('messageReactionAdd', (reaction, user) => {
  addRole(reaction, user);
});

client.on('messageReactionRemove', (reaction, user) => {
  removeRole(reaction, user);
});

client.login(config.token);
