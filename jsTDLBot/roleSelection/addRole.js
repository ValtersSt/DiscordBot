const addRole = async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  if (!reaction.message.guild) return;

  if (reaction.message.id === '967109429667446814') {
    //kage
    if (reaction.emoji.name === '🐉') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('967109162406412289');
      //jonin
    } else if (reaction.emoji.name === '🐺') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('967109224578572308');
      //chunin
    } else if (reaction.emoji.name === '🦊') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('967109312315002910');
      //genin
    } else if (reaction.emoji.name === '🐰') {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('967109349703024651');
    }
  }
};

module.exports = {
  addRole,
};
