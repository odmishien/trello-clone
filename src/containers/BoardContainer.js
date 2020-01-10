import { connect } from 'react-redux';
import createCard from '../actions/CreateCard';
import moveCard from '../actions/MoveCard';
import Board from '../components/Board';

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    createCard: (title, boardId) => dispatch(createCard(title, boardId)),
    moveCard: (cardId) => dispatch(moveCard(cardId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
