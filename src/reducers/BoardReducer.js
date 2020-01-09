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
        card: []
      }
      const id = uniqueId('')
      newStateBoard = Object.assign({}, state);
      newStateBoard.boardList[id] = board;
      return newStateBoard;
    case 'CREATE_CARD':
      let newStateCard = Object.assign({}, state);
      const card = {
        title: action.payload.title,
        boardId: action.payload.boardId,
      }
      newStateCard.boardList[card.boardId].card.push(card);
      return newStateCard;
    default:
      return state;
  }
}

export default boardReducer;
