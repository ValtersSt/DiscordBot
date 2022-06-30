const { drawEmbed, loseEmbed, winEmbed } = require('./rpsEmbeds');
const { drawEmbedEdit, embedEdit } = require('./rpsEmbedEdits');

const gameOutcome = (playerHand, botHand, userInteraction) => {
  // rock
  if (playerHand === 'Rock' && botHand === 'Rock')
    return drawEmbedEdit(drawEmbed('Rock', 'Rock'), userInteraction);
  if (playerHand === 'Rock' && botHand === 'Paper')
    return embedEdit(loseEmbed('Rock', 'Paper'), userInteraction);
  if (playerHand === 'Rock' && botHand === 'Scissors')
    return embedEdit(winEmbed('Rock', 'Scissors'), userInteraction);
  // paper
  if (playerHand === 'Paper' && botHand === 'Rock')
    return embedEdit(winEmbed('Paper', 'Rock'), userInteraction);
  if (playerHand === 'Paper' && botHand === 'Paper')
    return drawEmbedEdit(drawEmbed('Paper', 'Paper'), userInteraction);
  if (playerHand === 'Paper' && botHand === 'Scissors')
    return embedEdit(loseEmbed('Paper', 'Scissors'), userInteraction);
  // scissors
  if (playerHand === 'Scissors' && botHand === 'Rock')
    return embedEdit(loseEmbed('Scissors', 'Rock'), userInteraction);
  if (playerHand === 'Scissors' && botHand === 'Paper')
    return embedEdit(winEmbed('Scissors', 'Paper'), userInteraction);
  if (playerHand === 'Scissors' && botHand === 'Scissors')
    return drawEmbedEdit(drawEmbed('Scissors', 'Scissors'), userInteraction);
};

module.exports = {
  gameOutcome,
};
