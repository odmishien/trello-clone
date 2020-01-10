export default function moveCard(cardId) {
  return {
    type: 'MOVE_CARD',
    payload: {cardId: cardId}
  }
}
