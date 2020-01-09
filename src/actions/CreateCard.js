export default function createCard(title, boardId) {
  return {
    type: 'CREATE_CARD',
    payload: {title: title, boardId: boardId}
  }
}
