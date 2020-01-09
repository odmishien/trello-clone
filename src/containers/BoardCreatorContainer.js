import { connect } from 'react-redux';
import createBoard from '../actions/CreateBoard';
import BoardCreator from '../components/BoardCreator';

const mapStateToProps = state => {
  return {
    board: state.board,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createBoard: (title) => dispatch(createBoard(title)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardCreator)
