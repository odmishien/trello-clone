import uniqueId from 'lodash/uniqueId';
const initialState = {
  boardList: {},
}

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOARD':
      let newStateBoard = Object.assign({}, state);
      const board = {
        title: action.payload.title,
        card: {}
      }
      const boardId = uniqueId('board_')
      newStateBoard = Object.assign({}, state);
      newStateBoard.boardList[boardId] = board;
      return newStateBoard;
    
    case 'CREATE_CARD':
      let newStateCard = Object.assign({}, state);
      const card = {
        title: action.payload.title,
        boardId: action.payload.boardId,
      }
      const cardId = uniqueId('card_')
      newStateCard.boardList[card.boardId].card[cardId] = card;
      return newStateCard;
    
    // case 'MOVE_CARD':
    default:
      return state;
  }
}

export default boardReducer;
