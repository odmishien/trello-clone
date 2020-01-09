import { connect } from 'react-redux';
import createCard from '../actions/CreateCard';
import Board from '../components/Board';

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    createCard: (title, boardId) => dispatch(createCard(title, boardId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
