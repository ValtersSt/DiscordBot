const { MessageActionRow } = require('discord.js');
const { rock, paper, scissors } = require('../../buttons/buttonsRps');
const row = new MessageActionRow().addComponents(rock, paper, scissors);

const embedEdit = async (embed, userInteraction) => {
  await userInteraction.edit({
    embeds: [embed],
    components: [],
  });
};

const drawEmbedEdit = async (embed, userInteraction) => {
  await userInteraction.edit({
    embeds: [embed],
    components: [row],
  });
};

module.exports = {
  embedEdit,
  drawEmbedEdit,
};
