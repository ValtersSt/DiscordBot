const { MessageEmbed } = require('discord.js');

const updateEmbed = (player1Score, player2Score, dice) => {
  const scoreUpdate = new MessageEmbed()
    .setTitle('DICE GAME')
    .setDescription(`You rolled: ${dice}`)
    .addFields(
      {
        name: 'Player 1',
        value: `Score: ${player1Score}`,
        inline: true,
      },
      {
        name: 'Player 2',
        value: `Score: ${player2Score}`,
        inline: true,
      }
    )
    .setThumbnail(
      `https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Single-Die-with-${dice}-Showing.png`
    );
  return scoreUpdate;
};

const playerHoldEmbed = (player1Score, player2Score) => {
  const scoreUpdate = new MessageEmbed()
    .setTitle('DICE GAME')
    .setDescription('Player holds, next players turn!')
    .addFields(
      {
        name: 'Player 1',
        value: `Score: ${player1Score}`,
        inline: true,
      },
      {
        name: 'Player 2',
        value: `Score: ${player2Score}`,
        inline: true,
      }
    )
    .setThumbnail(
      `https://www.seekpng.com/png/detail/179-1792518_play-stop-pause-icon-png.png`
    );
  return scoreUpdate;
};

const selectPLayerEmbed = () => {
  const selectPlayer = new MessageEmbed()
    .setTitle('DICE GAME')
    .addFields({
      name: 'Choose who goes first.',
      value: 'Player 1 or Player 2.',
      inline: true,
    })
    .setThumbnail(
      'https://media.istockphoto.com/vectors/question-mark-glow-symbol-drawing-vector-id1063721054?b=1&k=20&m=1063721054&s=612x612&h=SGekndY7yYd9iWJR3bUTakc8UOvD5OXDzJp9lZxJZaw='
    );
  return selectPlayer;
};

const endEmbed = (playerScore, interaction) => {
  const againOrQuit = new MessageEmbed()
    .setTitle('WINNER!')
    .addField(
      `Player: \n${interaction.customId} won with a score of ${playerScore}!`,
      `Play again? - 'Start'\nQuit? - 'Quit'`
    )
    .setThumbnail(
      'https://w7.pngwing.com/pngs/418/866/png-transparent-cartoon-sport-drawing-cartoon-award-trophy-cartoon-character-orange-cartoons-thumbnail.png'
    );
  return againOrQuit;
};

const thanksEmbed = () => {
  const thanks = new MessageEmbed()
    .setTitle('GAME OVER')
    .addField('Sad to see you go!', 'Thanks for playing!')
    .setThumbnail(
      'https://image.shutterstock.com/image-vector/word-game-over-ornamental-design-260nw-408877972.jpg'
    );
  return thanks;
};

module.exports = {
  updateEmbed,
  playerHoldEmbed,
  selectPLayerEmbed,
  endEmbed,
  thanksEmbed,
};
